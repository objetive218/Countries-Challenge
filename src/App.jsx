import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Countries from "./Countries";
import RegionContext from "./context/RegionContext";
import CountryContext from "./context/CountryContext";
import AppStyle from "./css/App.module.css";
import CountryExtend from "./CountryExtend";
import { useCountries } from "./hooks/useCountries";

const App = () => {
  const [paises, setPaises] = useState([]);
  const { content, one } = useContext(CountryContext);
  const { region, global } = useContext(RegionContext);
  const { selector, getCountries, regcount } = useCountries();

  const countSet = function () {
    if (content == null || String(content).length < 3) {
      return regcount?.map(function (element, index) {
        if (index < 60) {
          return <Countries key={index} countrySel={element} />;
        }
      });
    } else {
      return (
        <Countries
          countrySel={regcount.find(function (pais) {
            return String(pais)
              .toLowerCase()
              .includes(String(content).toLowerCase());
          })}
        />
      );
    }
  };

  return (
    <>
      <Header />
      <section className={AppStyle.countries}>
        {one === null ? countSet() : <CountryExtend countrySel={one} />}
      </section>
    </>
  );
};

export default App;
