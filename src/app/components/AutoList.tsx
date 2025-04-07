'use client';

import AutoCard from './AutoCard';

export default function AutoList({ cars }: { cars: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.map((car) => (
        <AutoCard key={car.id} car={car} />
      ))}
    </div>
  );
}
