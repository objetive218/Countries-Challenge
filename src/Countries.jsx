import React, { useEffect, useState, useContext } from "react";
import CountryContext from "./context/CountryContext";

const Countries = ({ countrySel }) => {
  const { content } = useContext(CountryContext);
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
      <img src={actualizar?.flags?.svg} alt="flag" />
      <h2>{countrySel}</h2>
      <p>Population:{actualizar?.population}</p>
      <p>Region:{actualizar?.region}</p>
      <p>Capital:{actualizar?.capital}</p>
    </>
  );
};

export default Countries;
