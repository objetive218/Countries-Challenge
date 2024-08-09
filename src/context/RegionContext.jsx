import { createContext, useState } from "react";

const RegionContext = createContext("");
const RegionProvider = function ({ children }) {
  const [region, setRegion] = useState("");

  const changeReg = function (e) {
    e.preventDefault();
    setRegion(e.target.value);
  };
  return (
    <RegionContext.Provider value={{ region, setRegion, changeReg }}>
      {children}
    </RegionContext.Provider>
  );
};
export { RegionProvider };
export default RegionContext;
