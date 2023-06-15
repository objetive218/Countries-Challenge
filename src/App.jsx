import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Countries from "./Countries";
import RegionContext from "./context/RegionContext";
import CountryContext from "./context/CountryContext";

import AppStyle from "./css/App.module.css";

const App = () => {
  const [paises, setPaises] = useState([]);
  const [test, setTest] = useState([]);
  const { content } = useContext(CountryContext);
  const { region, setRegion } = useContext(RegionContext);

  const dates = () =>
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) =>
        setPaises(
          res.map(function (countrySel) {
            return countrySel.name.common;
          })
        )
      )
      .catch((error) => {
        console.log(error);
      });

  const globalDate = () =>
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) =>
        setTest(
          res.map(function (countrySel) {
            return countrySel.name.common;
          })
        )
      )
      .catch((error) => {
        console.log(error);
      });

  const prueba = useRef(dates());

  useEffect(
    function () {
      globalDate();
    },
    [test]
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
            countrySel={test.find(function (pais) {
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
