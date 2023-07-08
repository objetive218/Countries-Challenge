import { useContext, useEffect, useRef, useState } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";
import ExtendStyle from "./css/CountryExtend.module.css";

const CountryExtend = ({ countrySel }) => {
  const { one, setOne } = useContext(CountryContext);
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
        const item = pro[element].name;
        list.push(`${string} ${item} `);
      }
    } else {
      for (let element in pro) {
        const item = pro[element];
        list.push(`${string} ${item} `);
      }
    }
    return list;
  };
  const cur = current(extended?.currencies, "Current: ", true);
  const lagu = current(extended?.languages, "Languages: ", false);

  {
    /*  const border = extended?.borders
  
  const arr = border.map(element => {
    return element == all.fifa
    border?.map((element) => element === test?.fifa)
  });*/
  }
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
          <p>Border Countries: {border}</p>
        </section>
      </article>
    </>
  );
};
export default CountryExtend;
