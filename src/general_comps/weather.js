import React, { useState, useEffect } from 'react';
import Select from "react-select";

const WeatherComponent = ({ defaultCountry }) => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const [countryWeatherData, setCountryWeatherData] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // const urlParams = new URLSearchParams(window.location.search);
        // const defaultCountry = urlParams.get('name');
        console.log(defaultCountry);
        if (defaultCountry) {
            setCountry(defaultCountry);
            fetchWeatherData(defaultCountry);
            fetchCities(defaultCountry);
            fetchCountryInfo(defaultCountry);
            setCity("");
        }
    }, [defaultCountry]);

    useEffect(() => {
        if (city) {
            fetchWeatherData(city);
        }
    }, [city]);

    const fetchCities = async (country) => {
        try {
            const response = await fetch(`https://countriesnow.space/api/v0.1/countries`);
            const data = await response.json();
            const countryData = data.data.find((item) => item.country === country);
            if (countryData) {
                setCities(countryData.cities);
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const fetchWeatherData = async (_location) => {
        setLoading(true);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${_location}&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setCountryWeatherData(data);
                setError('');
            } else {
                setWeatherData(null);
                setError(`Weather information for ${_location} is not available. 
                Showing information for ${country} instead.`);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError(`Weather information for ${_location} is not available. 
            Showing information for ${country} instead.`);
        }
        setLoading(false);
    };

    const fetchCountryInfo = async (country) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
            const data = await response.json();
            setCountryInfo(data[0]);
        } catch (error) {
            console.error('Error fetching country info:', error);
        }
    };

    return (
        <div>
            <h2>Weather in {city ? `${city}, ${country}` : country}</h2>

            <div>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">{!city ? 'Select City' : city}</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {(weatherData || countryWeatherData) && (
                <div>
                    <h3>Description: {weatherData ? weatherData.weather[0].description : countryWeatherData.weather[0].description}</h3>
                    <h4>Temperature: {weatherData ? weatherData.main.temp : countryWeatherData.main.temp}°C</h4>
                    <h5>Feels Like: {weatherData ? weatherData.main.feels_like : countryWeatherData.main.feels_like}</h5>
                    <h6>Wind Speed: {weatherData ? weatherData.wind.speed : countryWeatherData.wind.speed} m/s</h6>
                    <img
                        src={`http://openweathermap.org/img/w/${weatherData ? weatherData.weather[0].icon : countryWeatherData.weather[0].icon}.png`}
                        alt="Weather Icon"
                        style={{ width: '150px', height: '150px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
