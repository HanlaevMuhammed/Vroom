"use client";

import { useEffect, useState } from "react";
import AutoCard from "./components/AutoCard";

export default function HomePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных (можно заменить на API-запрос)
    setTimeout(() => {
      setCars([
        {
          id: 1,
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/1998_Toyota_Supra_Twin_Turbo_--_08-23-2011.jpg",
          title: "Toyota Supra MK4",
          year: 1998,
          engine: "3.0L Turbo",
          power: "280 л.с.",
        },
        {
          id: 2,
          image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Nissan_Skyline_R34_GT-R_N%C3%BCr_001.JPG",
          title: "Nissan Skyline R34",
          year: 1999,
          engine: "2.6L Turbo",
          power: "280 л.с.",
        },
        {
          id: 3,
          image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mazda_RX-7_FD.JPG",
          title: "Mazda RX-7 FD",
          year: 1994,
          engine: "1.3L Rotary",
          power: "255 л.с.",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔥 Vroom – Поиск авто мечты</h1>
      {cars.length === 0 ? (
        <p className="text-lg">Загрузка...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars.map((car) => (
            <AutoCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

