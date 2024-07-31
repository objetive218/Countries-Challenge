import React, { useState, useContext, useEffect } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";
import HeaderStyle from "./css/Header.module.css";
import { BsSearch, BsFillMoonFill, BsArrowLeftShort } from "react-icons/bs";
import ThemeContext from "./context/ThemeContext";

const Header = () => {
  const { setOne, one, searchLog, handleSubmit, setContent } = useContext(CountryContext);
  const { setRegion, changeReg, region } = useContext(RegionContext);
  const { toggleTheme } = useContext(ThemeContext);
  

  const selectRegion = async() => {
    /*call searchRegion a save in a state */
  }

  const sel = () => {
    return (
      <section className={HeaderStyle.bar}>
        <section className={HeaderStyle.box}>
          <form className={HeaderStyle.search} onSubmit={handleSubmit}>
            <BsSearch />
            <input
              name="count"
              type="text"
              placeholder="Search for a country"
              onChange={searchLog}
            />
          </form>
        </section>
        <label htmlFor="" className={HeaderStyle.region}>
          <select
            name="region"
            id="selregion"
            onChange={changeReg}
            className={HeaderStyle.selregion}
            value={region}
          >
            <option default hidden>
              Filter by Region
            </option>
            <option className={HeaderStyle.option}>Africa</option>
            <option className={HeaderStyle.option}>America</option>
            <option className={HeaderStyle.option}>Asia</option>
            <option className={HeaderStyle.option}>Europ</option>
            <option className={HeaderStyle.option}>Oceania</option>
          </select>
        </label>
      </section>
    );
  };
  const allSeccion = () => {
    return one === null ? (
      sel()
    ) : (
      <section className={HeaderStyle.back}>
        <form
          action=""
          onClick={() => setOne(null)}
          className={HeaderStyle.themeBack}
        >
          <BsArrowLeftShort />
          <h4>Back</h4>
        </form>
      </section>
    );
  };

  useEffect(() => {
    allSeccion();
  }, [one]);

  return (
    <>
      <section className={HeaderStyle.head}>
        <h2
          onClick={() => {
            setOne(null);
            setRegion("");
            setContent(null)
          }}
        >
          Where in the world?
        </h2>
        <form action="#" className={HeaderStyle.theme} onClick={toggleTheme}>
          <BsFillMoonFill />
          <h4>Dark Mode</h4>
        </form>
      </section>
      {allSeccion()}
    </>
  );
};

export default Header;
