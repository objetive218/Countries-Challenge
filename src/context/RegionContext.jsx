import { createContext, useState , useEffect} from "react";

const RegionContext = createContext("");
const RegionProvider = function({children}){
  const [region, setRegion] = useState("");  
  const [test, setTest] = useState([]);
  const globalDate = () =>
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((json) =>
        setTest(
          json.map(function (countrySel) {
            return countrySel.name.common;
          })
        )
      )
      .catch((error) => {
        console.log(error);
      });
      useEffect(()=>{
        globalDate()
      },[])

  return <RegionContext.Provider value={{region,setRegion, test }}>{children}</RegionContext.Provider>
}
export {RegionProvider}
export default RegionContext;