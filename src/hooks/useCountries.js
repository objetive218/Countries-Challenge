import { useState, useContext, useEffect } from "react";
import { searchCountries, searchRegion } from "../services/restcountries";
import RegionContext from "../context/RegionContext";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [regcount, setRegcount] = useState([]);
  const { region } = useContext(RegionContext);
  const getCountries = async () => {
    if (region != "" && region != "Filter by Region") {
      try {
        const newRegion = await searchRegion(region);
        setRegcount(
          newRegion.map(function (countrySel) {
            return countrySel.name;
          })
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const allCountries = await searchCountries();
        setRegcount(
          allCountries.map(function (countrySel) {
            return countrySel.name;
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    getCountries();
  }, [region]);
  return { selector: getCountries, regcount };
}
