import { useState, useContext, useEffect, useRef } from "react";
import { searchCountries, searchRegion } from "../services/restcountries";
import RegionContext from "../context/RegionContext";

export function useCountries(country, reg) {
  const [countries, setCountries] = useState([]); 
  const { region } = useContext(RegionContext);
 
  const getAllCountries = async () => {
    if(region != "" && region != "Filter by Region"){
      try{
        const newRegion = await searchRegion(region);
        setCountries(newRegion);
      }catch(e){
        console.log(e)
      }
    }else{
      try{
        const newCountries = await searchCountries();
        setCountries(newCountries);
      } catch (e){
        console.log(e);
      }
    }
}

  return { getAllCountries, countries };
}

