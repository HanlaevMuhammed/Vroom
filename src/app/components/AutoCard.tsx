"use client";

import { useFavorites } from "../hooks/useFavorites";
import { Card, CardContent } from "@/components/ui/card";

export default function AutoCard({ car }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <Card className="p-4">
      <img src={car.image} alt={car.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{car.title}</h2>
      <p className="text-gray-600">{car.year} • {car.engine} • {car.power}</p>

      <button
        onClick={() => toggleFavorite(car)}
        className={`mt-2 px-4 py-2 rounded text-white ${isFavorite ? "bg-red-500" : "bg-gray-500"}`}
      >
        {isFavorite ? "❤️ В избранном" : "🤍 Добавить в избранное"}
      </button>
    </Card>
  );
}

