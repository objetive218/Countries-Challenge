import { useContext, useEffect, useState } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";

const CountryExtend = ({ countrySel }) => {
  const { one, setOne } = useContext(CountryContext);
  const { global } = useContext(RegionContext);
  const [extended, setExtended] = useState([]);

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
  const border = String(extended?.borders).split(" ");
  return (
    <>
      <article>
        <picture>
          <img src={extended?.flags?.svg} alt="flag" />
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
