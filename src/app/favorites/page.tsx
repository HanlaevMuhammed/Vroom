"use client";

import { useFavorites } from "../hooks/useFavorites";
import AutoCard from "../components/AutoCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">❤️ Избранные автомобили</h1>
      {favorites.length === 0 ? (
        <p className="text-lg">Вы еще не добавили автомобили в избранное.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((car) => (
            <AutoCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

