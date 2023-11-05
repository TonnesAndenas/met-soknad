import { useState, useEffect } from "react";
import { IWeatherData } from "./types";

// function to fetch data from api with parameters for lat and lon
const fetchWeatherDataWithParams = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://api.met.no/weatherapi/airqualityforecast/0.1/?lat=${lat}&lon=${lon}&areaclass=grunnkrets`
  );
  // check if response is ok
  if (!response.ok) {
    throw new Error("Could not fetch data!");
  }
  return response.json();
};

// function to get the data with parameters for lat and lon
const useWeatherDataWithParams = (lat: number, lon: number) => {
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  // useEffect to fetch the data
  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    fetchWeatherDataWithParams(lat, lon)
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [lat, lon]);

  return { weatherData, isLoading, error };
};

// export function to get data from Bjølsen
export const getWeatherDataBjolsen = () => 
  useWeatherDataWithParams(59.940283, 10.763587);

// export function to get data from Ørfiske
export const getWeatherDataOrfiske = () =>
  useWeatherDataWithParams(60.0718926, 10.7970985);