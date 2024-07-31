import { useContext, useEffect, useRef, useState, useMemo } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";
import ExtendStyle from "./css/CountryExtend.module.css";
import { searchCountries } from "./services/restcountries";

const CountryExtend = ({ countrySel, event }) => {
  const { setOne } = useContext(CountryContext);
  const { global } = useContext(RegionContext);
  const [extended, setExtended] = useState([]);
  const [all, setAll] = useState([]);
  const test = useRef([]);

  
  const firtsCharge = async() =>{
    /*global.find(function (element) {
      return element.name === countrySel;
    });*/
    let result = await searchCountries();
  };
    
  const allCoun = async function () {
    let result = await searchCountries();
    const busqueda = result.find(function (elemento) {
      return elemento.name == countrySel;
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
          list.push(`${item}`);
        } else {
          const item = pro[element].name;
          list.push(", " + item);
        }
      }
    } else {
      for (let element in pro) {
        const item = pro[element];
        if (list.length < 1) {
          list.push(`${item} `);
        } else {
          list.push(", " + item);
        }
      }
    }
    return list;
  };
  
  const nativeN = (native) => {
    const list = [];
    for(let element in native){
        const item = native[element].official;
        list.push(item)}
        return list
    }
  const cur = current(extended?.currencies,"Current: ", true);
  const lagu = current(extended?.languages, "Languages: ", false);
  const native = nativeN(extended?.nativeName);

  const border = extended?.borders;
  const bor = border?.map((e, i) => {
    String(e);
    return all?.find((a) => e == a?.cca3);
  });
 
  
  console.log(native)
  return (
    <>
      <article className={ExtendStyle.country}>
        <picture className={ExtendStyle.pic}>
          <img
            src={extended?.flags}
            alt="flag"
            className={ExtendStyle.img}
          />
        </picture>
        <section className={ExtendStyle.information}>
          <h2>{countrySel}</h2>
          <p><b>Native Name:</b> {native[0]} </p>
          <p><b>Population:</b> {extended?.population}</p>
          <p><b>Region:</b>  {extended?.region}</p>
          <p><b>Sub Region:</b>  {extended?.subregion}</p>
          <p><b>Capital:</b>  {extended?.capital ? extended?.capital : countrySel}</p>
          <p><b>Top Level Domain:</b>  {extended?.tld}</p>
          <p><b>Current:</b> {cur}</p>
          <p><b>Languages: </b>
            {lagu.map((e) => {
              return e;
            })}
          </p>
          <section className={ExtendStyle.borders}>
          <p><b>Border Countries:</b></p>
            {bor != null
              ? bor.map((element, i) => (
                  <button
                    key={i}
                    className={ExtendStyle.bor}
                    onClick={(e) => {
                      e.preventDefault();
                      setOne(element.name);
                    }}
                  >
                    <span>
                    {element.name}
                    </span>
                  </button>
                ))
              : <p>N/A</p>}
          </section>
        </section>
      </article>
    </>
  );
};
export default CountryExtend;
