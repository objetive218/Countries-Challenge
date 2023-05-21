import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Countries from "./Countries";
import RegionContext from "./context/RegionContext";
import CountryContext from "./context/CountryContext";
import AppStyle from "./css/App.module.css"

const App = () => {
  const [paises, setPaises] = useState([]);
  const [consult, setConsult] = useState(false);
  const { content } = useContext(CountryContext);
  const { region, setRegion } = useContext(RegionContext);
  const dates = async function () {
    const consult = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const respont = await consult.json();
    setPaises(
      respont.map(function (countrySel) {
        return countrySel.name.common;
      })
    );
  };
  useEffect(
    function () {
      dates();
    },
    [region]
  );

  return (
    <>
      <Header />
      <section className={AppStyle.countries}>
        {content == null || String(content).length < 3 ? (
          paises.map(function (element) {
            return <Countries countrySel={element} />;
          })
        ) : (
          <Countries
            countrySel={paises.find(function (pais) {
              return String(pais)
                .toLowerCase()
                .includes(String(content).toLowerCase());
            })}
          />
        )}
      </section>
    </>
  );
};

export default App;
