import { useContext, useEffect, useState } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";

const CountryExtend = ({ countrySel }) => {
  const { one, setOne } = useContext(CountryContext);
  const { global } = useContext(RegionContext);
  const [extended, setExtended] = useState([]);

  const result = () => global.find(function (element) {
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
    allCoun()
  }, [countrySel]);
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
          <ul>Currencies: {extended?.currencies ? Object.keys(extended?.currencies).map(element => {
            <li>
                {element.name}
            </li>
            
          }): "error"}</ul>
          {/*<p>Languages: {Object.keys(extended?.languages).forEach(element,index,arr => {
            element
          })}</p>*/}
          <p>Border Countries: {extended?.borders}</p>
        </section>
      </article>
    </>
  );
};
export default CountryExtend;
