"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (car) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === car.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== car.id);
    } else {
      updatedFavorites = [...favorites, car];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
}

