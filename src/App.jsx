import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Countries from "./Countries";
import RegionContext from "./context/RegionContext";
import CountryContext from "./context/CountryContext";
import AppStyle from "./css/App.module.css";
import CountryExtend from "./CountryExtend";
import { useCountries } from "./hooks/useCountries";

const App = () => {
  const { content } = useContext(CountryContext);
  const { region } = useContext(RegionContext);
  const [selectName, setSelectName]= useState(null);
  const { getAllCountries, countries } = useCountries();

  useEffect(() => {
    getAllCountries();
  },[region])

  const handleSelectName = (value) => {
    setSelectName(value);
  }

  const allCountSet = () => {
    if (content == null || String(content).length < 3) {
      return countries?.map(function (element, index) {
        if (index < 60) {
          return <Countries handle={handleSelectName} key={index} countrySel={element}/>;
        }
      });
    } else {
      return (
        <Countries
          handle={handleSelectName}
          countrySel={countries?.find(function (country) {
            return String(country?.name)
              .toLowerCase()
              .includes(String(content).toLowerCase());
          })}
        />
      );
    }
  }

  return (
    <>
      <Header handle={handleSelectName} nameSelected={selectName} />
      <section className={AppStyle.countries}>
        {selectName === null ? allCountSet() : <CountryExtend countrySel={selectName} handle={handleSelectName}  allCount ={countries}/>}
      </section>
    </>
  );
};

export default App;
