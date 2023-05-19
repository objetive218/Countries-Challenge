import { createContext, useState } from "react";

const CountryContext = createContext(null);
const CountryProvider = function ({ children }) {
  const [content, setContent] = useState(null);
  return (
    <CountryContext.Provider value={{ content, setContent }}>
      {children}
    </CountryContext.Provider>
  );
};
export { CountryProvider };
export default CountryContext;
