import React, { useState, useContext, useEffect } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";
import HeaderStyle from "./css/Header.module.css";
import { BsSearch, BsFillMoonFill, BsArrowLeftShort } from "react-icons/bs";
import ThemeContext from "./context/ThemeContext";

const Header = () => {
  const { setContent, setOne, one, searchLog } = useContext(CountryContext);
  const { setRegion, changeReg } = useContext(RegionContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [intro, setIntro] = useState(null);
  useEffect(() => {
    setRegion("");
  }, [one]);

  return (
    <>
      <section className={HeaderStyle.head}>
        <h2 onClick={() => setOne(null)}>Where in the world?</h2>
        <form action="#" className={HeaderStyle.theme} onClick={toggleTheme}>
          <BsFillMoonFill />
          <h4>Dark Mode</h4>
        </form>
      </section>
      {one === null ? (
        <section className={HeaderStyle.bar}>
          <section className={HeaderStyle.box}>
            <form className={HeaderStyle.search}>
              <BsSearch />
              <input
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
            >
              <option value="" defaultValue hidden>
                Filter by Region
              </option>
              <option value="Africa" className={HeaderStyle.option}>
                Africa
              </option>
              <option value="America" className={HeaderStyle.option}>
                America
              </option>
              <option value="Asia" className={HeaderStyle.option}>
                Asia
              </option>
              <option value="Europ" className={HeaderStyle.option}>
                Europa
              </option>
              <option value="Oceania" className={HeaderStyle.option}>
                Oceania
              </option>
            </select>
          </label>
        </section>
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
      )}
    </>
  );
};

export default Header;
