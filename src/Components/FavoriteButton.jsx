import React, { useEffect, useState } from "react";
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

export default function FavoriteButton({ vehicleId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.includes(vehicleId));
    }, [vehicleId]);

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(vehicleId)) {
            favorites = favorites.filter(id => id !== vehicleId);
            setIsFavorite(false);
        } else {
            favorites.push(vehicleId);
            setIsFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    return (
        <button onClick={toggleFavorite} className="favorite-button">
            <FaHeart className="favorite-button" title={ "Marcar como favorito"}  
        onClick={() => {
        if (!isFavorite) {
        toast.success("Veículo marcado como favorito!");
        } else {
        toast.info("Veículo removido dos favoritos.");
        }
    }}
     style={{ color: isFavorite ? "red" : "grey" }} />
        </button>
    ); 
}