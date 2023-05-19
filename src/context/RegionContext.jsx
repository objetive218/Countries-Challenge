import { createContext, useState } from "react";

const RegionContext = createContext("america");
const RegionProvider = function({children}){
  const [region, setRegion] = useState("america");

  return <RegionContext.Provider value={{region,setRegion}}>{children}</RegionContext.Provider>
}
export {RegionProvider}
export default RegionContext;