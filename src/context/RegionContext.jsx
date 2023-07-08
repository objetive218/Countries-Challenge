import { createContext, useState, useEffect, useContext } from "react";
import CountryContext from "./CountryContext";

const RegionContext = createContext("");
const RegionProvider = function ({ children }) {
  const [region, setRegion] = useState("");
  const [global, setGlobal] = useState([]);
  const {one} = useContext(CountryContext)

  const changeReg = function (e) {
    e.preventDefault();
    setRegion(e.target.value);
  };

  const globalDate = () =>
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((json) =>
        setGlobal(
          json.map(function (countrySel) {
            return countrySel.name.common;
          })
        )
      )
      .catch((error) => console.log(error));

  useEffect(() => {
    globalDate();
  }, [one, region]);
  

  return (
    <RegionContext.Provider value={{ region, setRegion, global, changeReg }}>
      {children}
    </RegionContext.Provider>
  );
};
export { RegionProvider };
export default RegionContext;
