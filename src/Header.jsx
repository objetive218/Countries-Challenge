import React, { useState, useContext } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";
import HeaderStyle from "./css/Header.module.css";
import { BsSearch, BsFillMoonFill } from "react-icons/bs";
import ThemeContext from "./context/ThemeContext";

const Header = () => {
  const { setContent } = useContext(CountryContext);
  const { setRegion } = useContext(RegionContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [intro, setIntro] = useState(null);
  const search1 = function (e) {
    e.preventDefault();
    setRegion(e.target.value);
  };
  const search = function (e) {
    e.preventDefault();
    setContent(e.target.value);
  };

  return (
    <>
      <section className={HeaderStyle.head}>
        <h2>Where in the world?</h2>
        <form action="#" className={HeaderStyle.theme} onClick={toggleTheme}>
            <BsFillMoonFill />
            <h4>Dark Mode</h4>
        </form>
      </section>
      <section className={HeaderStyle.bar}>
        <form className={HeaderStyle.search}>
          <BsSearch />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={search}
          />
        </form>
        <label htmlFor="" className={HeaderStyle.region}>
          <select name="region" id="selregion" onChange={search1}>
            <option value="" defaultValue hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europ">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </section>
    </>
  );
};

export default Header;
