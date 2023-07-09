import { useContext, useEffect, useRef, useState } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";
import ExtendStyle from "./css/CountryExtend.module.css";

const CountryExtend = ({ countrySel, event }) => {
  const { one, setOne, searchLog } = useContext(CountryContext);
  const { global } = useContext(RegionContext);
  const [extended, setExtended] = useState([]);
  const [all, setAll] = useState([]);
  const test = useRef([]);

  const result = () =>
    global.find(function (element) {
      return element.name === countrySel;
    });
  const allCoun = async function () {
    let consult = await fetch(`https://restcountries.com/v3.1/all`);
    let result = await consult.json();
    const busqueda = result.find(function (elemento) {
      return elemento.name.common == countrySel;
    });
    setExtended(busqueda);
    setAll(result);
    test.current = result;
  };

  useEffect(() => {
    allCoun();
  }, [countrySel]);

  const current = (pro, string, bool) => {
    const list = [];
    if (bool) {
      for (let element in pro) {
        if (list.length < 1) {
          const item = pro[element].name;
          list.push(`${string} ${item} `);
        } else {
          const item = pro[element].name;
          list.push(", " + item);
        }
      }
    } else {
      for (let element in pro) {
        const item = pro[element];
        if (list.length < 1) {
          list.push(`${string} ${item} `);
        } else {
          list.push(", " + item);
        }
      }
    }
    return list;
  };
  const cur = current(extended?.currencies, "Current: ", true);
  const lagu = current(extended?.languages, "Languages: ", false);

  const border = extended?.borders;
  const bor = border?.map((e, i) => {
    String(e);
    return all?.find((a) => e == a?.cca3);
  });

  console.log(bor);
  return (
    <>
      <article className={ExtendStyle.country}>
        <picture className={ExtendStyle.pic}>
          <img
            src={extended?.flags?.svg}
            alt="flag"
            className={ExtendStyle.img}
          />
        </picture>
        <section>
          <h2>{countrySel}</h2>
          <p>Population: {extended?.population}</p>
          <p>Region: {extended?.region}</p>
          <p>Sub Region: {extended?.subregion}</p>
          <p>Capital: {extended?.capital ? extended?.capital : countrySel}</p>
          <p>Top Level Domain: {extended?.tld}</p>
          <p>{cur}</p>
          <p>
            {lagu.map((e) => {
              return e;
            })}
          </p>
          <p>Border Countries:</p>
          <form className={ExtendStyle.borders}>
            {bor != null
              ? bor.map((element, i) => (
                  <button
                    key={i}
                    className={ExtendStyle.bor}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(e.target.value);
                      setOne(element.name.common);
                    }}
                  >
                    {element.name.common}
                  </button>
                ))
              : null}
          </form>
        </section>
      </article>
    </>
  );
};
export default CountryExtend;
