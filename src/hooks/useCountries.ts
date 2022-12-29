import axios from "axios";
import { useEffect, useState } from "react";
import { CountriesType } from "../../types";

const staticCountries = [
  {
    code: "+234",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    name: "Nigeria",
    short_name: "NG",
  },
  {
    code: "+36",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    name: "Hungary",
    short_name: "HU",
  },
  {
    code: "+90",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    name: "Turkey",
    short_name: "TR",
  },
];

export const useCountries = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<CountriesType[]>(staticCountries);

  useEffect(() => {
    // fetchCountry();
  }, []);

  const fetchCountry = () => {
    setLoading(true);

    axios
      .all([
        axios.get("https://countriesnow.space/api/v0.1/countries/codes"),
        axios.get("https://countriesnow.space/api/v0.1/countries/flag/images"),
      ])
      .then(([res1, res2]) => {
        //@ts-ignore
        const countriesResponse = res1?.data?.data;
        //@ts-ignore
        const countriesImagesResponse = res2.data.data;

        //@ts-ignore
        const formattedCountries = countriesResponse?.map((item) => {
          const imageLink = countriesImagesResponse?.find(
            //@ts-ignore
            (imagesItem) => imagesItem.name === item.name
          )?.flag;
          return {
            code: item.dial_code,
            short_name: item.code,
            name: item.name,
            imageLink,
          };
        });

        setCountries(formattedCountries);
      })
      .catch((error) => {
        error;
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    countries,
  };
};
