import { useEffect, useState, useContext } from "react";
import CountryContext from "./context/CountryContext";
import counStyle from "./css/Countries.module.css";
import { searchCountries } from "./services/restcountries";
import { useCountries } from "./hooks/useCountries";

const Countries = ({ countrySel }) => {
  const { content, one, setOne } = useContext(CountryContext);
  const [actualizar, setActualizar] = useState(null);

  const search = async() => {
    const test = await searchCountries();
    const findCount = test?.find(function (elemento) {
      return elemento.name == countrySel;
    });
    setActualizar(findCount)
  };
  useEffect(() => {
    search();
  }, [countrySel]);
  return (
    <>
      <article
        className={counStyle.country}
        onClick={(e) => {
          setOne(countrySel);
        }}
      >
        <picture className={counStyle.test}>
          <img
            className={counStyle.image}
            src={actualizar?.flags}
            alt="flag"
          />
        </picture>
        <section className={counStyle.info}>
          <h2>{countrySel}</h2>
          <p>Population: {actualizar?.population}</p>
          <p>Region: {actualizar?.region}</p>
          <p>
            Capital: {actualizar?.capital ? actualizar?.capital : countrySel}
          </p>
        </section>
      </article>
    </>
  );
};

export default Countries;
