'use client';

import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import AutoCard from './AutoCard';

export default function AutoCardStack({
  cars,
  likedCars,
  setLikedCars,
  rejectedCars,
  setRejectedCars
}) {
  const [currentIndex, setCurrentIndex] = useState(cars.length - 1);

  const handleSwipe = (direction: string, carId: number) => {
    if (direction === 'left') {
      setRejectedCars((prev: number[]) => [...prev, carId]);
    } else if (direction === 'right') {
      if (!likedCars.includes(carId)) {
        setLikedCars((prev: number[]) => [...prev, carId]);
      }
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const manualSwipe = (direction: 'left' | 'right') => {
    if (currentIndex < 0 || currentIndex >= cars.length) return;

    const car = cars[currentIndex];
    handleSwipe(direction, car.id);
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-4">
      <div className="relative h-[500px] w-[320px]">
        {cars.map((car, index) => (
          <TinderCard
            key={car.id}
            onSwipe={(dir) => handleSwipe(dir, car.id)}
            preventSwipe={['up', 'down']}
            className="absolute"
          >
            <div className="w-[320px]">
              <AutoCard car={car} />
            </div>
          </TinderCard>
        ))}
        {cars.length === 0 && <p className="text-white text-center">Нет подходящих авто</p>}
      </div>

      {/* Кнопки свайпа */}
      {currentIndex >= 0 && (
        <div className="flex gap-6 mt-2">
          <button
            onClick={() => manualSwipe('left')}
            className="text-red-500 text-3xl hover:scale-110 transition"
            title="Не нравится"
          >
            ❌
          </button>
          <button
            onClick={() => manualSwipe('right')}
            className="text-green-500 text-3xl hover:scale-110 transition"
            title="Нравится"
          >
            💙
          </button>
        </div>
      )}
    </div>
  );
}
