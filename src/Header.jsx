import React, { useState, useContext } from "react";
import CountryContext from "./context/CountryContext";
import RegionContext from "./context/RegionContext";

const Header = () => {
  const { content, setContent } = useContext(CountryContext);
  const { region, setRegion } = useContext(RegionContext);
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
      <h2>Where in the world?</h2>
      <form>
        <input
          type="text"
          placeholder="Search for a country"
          onChange={search}
        />
      </form>
      <label htmlFor="#">
        <button>
          <span>luna</span>
        </button>
      </label>
      <label htmlFor="">
        <select name="region" id="selregion" onChange={search1}>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </>
  );
};

export default Header;
