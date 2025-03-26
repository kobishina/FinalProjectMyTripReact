import React, { useState, useEffect } from 'react';

export function FavoriteButton({ countryName }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const toggleFavorite = () => {
        let updatedFavorites = [...favorites];

        if (favorites.includes(countryName)) {
            // Remove from favorites
            updatedFavorites = favorites.filter(fav => fav !== countryName);
        } else {
            // Add to favorites
            updatedFavorites.push(countryName);
        }

        // Update localStorage
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return (
        <button onClick={toggleFavorite} className='btn btn-warning'>
            {favorites.includes(countryName) ? "⭐ Remove from Favorites" : "☆ Add to Favorites"}
        </button>
    );
}
