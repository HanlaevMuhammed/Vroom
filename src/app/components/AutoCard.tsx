"use client";

import { useState } from "react";
import { FiExternalLink, FiInfo } from "react-icons/fi";

type Car = {
  id: number;
  name: string;
  year: number;
  engine: string;
  power: number;
  price: number;
  fuel: string;
  transmission: string;
  drive: string;
  body_type: string;
  color: string;
  mileage: number;
  platform: string;
  link: string;
  image: string;
};

export default function AutoCard({ car }: { car: Car }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative border rounded-xl p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transform hover:scale-105 transition duration-300">
      {/* Контент карточки */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-white text-gray-800 text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-white">
          {car.platform}
        </div>
        <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-white">
          {car.year}
        </div>
      </div>

      {/* Название и цена */}
      <div className="mt-3 flex justify-between items-center">
        <h2 className="text-base font-semibold dark:text-white">{car.name}</h2>
        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
          {car.price.toLocaleString()} ₽
        </span>
      </div>

      {/* Пробег и коробка */}
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {car.mileage.toLocaleString()} км • {car.transmission}
      </p>

      {/* Информация о моторе */}
      <p className="text-sm text-gray-800 dark:text-gray-200">
        {car.engine} • {car.power} л.с.
      </p>

      {/* Кнопка Подробнее */}
      <button
        className="mt-2 flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        onClick={() => setShowDetails(!showDetails)}
      >
        <FiInfo className="mr-1" />
        Подробнее
      </button>

      {/* Детали */}
      {showDetails && (
        <div className="mt-2 text-sm text-gray-700 dark:text-gray-200 space-y-1 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
          <p><strong>Кузов:</strong> {car.body_type}</p>
          <p><strong>Привод:</strong> {car.drive}</p>
          <p><strong>Топливо:</strong> {car.fuel}</p>
          <p><strong>Цвет:</strong> {car.color}</p>
          <a
            href={car.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mt-2"
          >
            Перейти к объявлению <FiExternalLink className="ml-1" />
          </a>
        </div>
      )}
    </div>
  );
}
