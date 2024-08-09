export const searchCountries = async () => {
  try {
    const result = await fetch(`https://restcountries.com/v3.1/all`);
    const countriesList = await result.json();

    return countriesList?.map((country) => ({
      flags: country?.flags?.svg,
      name: country?.name?.common,
      population: country?.population,
      region: country?.region,
      subregion: country.subregion,
      capital: country.capital,
      tld: country.tld,
      currencies: country.currencies,
      languages: country.languages,
      borders: country.borders,
      cca3: country.cca3,
      nativeName: country?.name?.nativeName,
    }));
  } catch (e) {
    throw new Error(`Error searching countries`);
  }
};

export const searchRegion = async (R) => {
  try {
    const result = await fetch(`https://restcountries.com/v3.1/region/${R}`);
    const regionList = await result.json();

    return regionList?.map((country) => ({
      flags: country.flags?.svg,
      name: country.name?.common,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      tld: country.tld,
      currencies: country.currencies,
      languages: country.languages,
      borders: country.borders,
      cca3: country.cca3,
      nativeName: country?.name?.nativeName,
    }));
  } catch (e) {
    throw new Error(`Error searching region`);
  }
};
