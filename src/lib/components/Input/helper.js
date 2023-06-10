import { COUNTRYCODE } from "./constants";
const getSelectedCountry = (selectedCountryId) =>
  COUNTRYCODE.find((country) => country.includes(selectedCountryId));

export { getSelectedCountry };
