import React, { useEffect, useState, useContext } from "react";
import CountryContext from "./context/CountryContext";
import counStyle from "./css/Countries.module.css";

const Countries = ({ countrySel }) => {
  const { content, one, setOne } = useContext(CountryContext);
  const [actualizar, setActualizar] = useState(null);

  const dates = async function () {
    let consult = await fetch(`https://restcountries.com/v3.1/all`);
    let result = await consult.json();
    const busqueda = result.find(function (elemento) {
      return elemento.name.common == countrySel;
    });
    setActualizar(busqueda);
  };
  useEffect(
    function () {
      dates();
    },
    [countrySel]
  );

  return (
    <>
      <article className={counStyle.country} onClick={(e) => {setOne(countrySel) }}>
        <picture className={counStyle.test}>

        <img
          className={counStyle.image}
          src={actualizar?.flags?.svg}
          alt="flag"
          />
          </picture>
        <section className={counStyle.info}>
          <h2>{countrySel}</h2>
          <p>Population: {actualizar?.population}</p>
          <p>Region: {actualizar?.region}</p>
          <p>Capital: {actualizar?.capital ? actualizar?.capital : countrySel}</p>
        </section>
      </article>
    </>
  );
};

export default Countries;
