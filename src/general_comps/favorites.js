import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
    const [favoriteCountries, setFavoriteCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoriteCountries(savedFavorites);

        const fetchCountryDetails = async () => {
            const details = await Promise.all(
                savedFavorites.map(async (country) => {
                    try {
                        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
                        return data[0];
                    } catch (error) {
                        console.error("Error fetching details for", country, error);
                        return null;
                    }
                })
            );
            setCountryDetails(details.filter(d => d));
        };

        if (savedFavorites.length > 0) {
            fetchCountryDetails();
        }
    }, []);

    const handleCountryClick = (countryName) => {
        nav(`/myTrip?name=${countryName}`);
    };

    const handleRemoveFavorite = (countryName) => {
        const updatedFavorites = favoriteCountries.filter(country => country !== countryName);
        setFavoriteCountries(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setCountryDetails(countryDetails.filter(country => country.name.common !== countryName));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Your Favorite Countries</h2>
            {countryDetails.length === 0 ? (
                <p className="text-center">No favorites added yet.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {countryDetails.map((country, index) => (
                        <div key={index} className="col">
                            <div
                                className="card shadow-sm text-center d-flex flex-column"
                                style={{ height: "100%", minHeight: "350px" }} // Ensures equal card height
                            >
                                <img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    className="card-img-top"
                                    style={{ height: "180px", objectFit: "cover" }} // Uniform flag size
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title">{country.name.common}</h5>
                                    <p className="card-text"><strong>Capital:</strong> {country.capital}</p>
                                    <p className="card-text"><strong>Region:</strong> {country.region}</p>
                                    <p className="card-text"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                    <div className="mt-auto d-flex justify-content-between">
                                        <button
                                            onClick={() => handleCountryClick(country.name.common)}
                                            className="btn btn-primary w-50 me-1">
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => handleRemoveFavorite(country.name.common)}
                                            className="btn btn-danger w-50 ms-1">
                                            Remove ⭐
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
