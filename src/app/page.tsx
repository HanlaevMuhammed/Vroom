'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import AutoCardStack from '@/app/components/AutoCardStack';
import AutoList from '@/app/components/AutoList';
import AutoFilters from '@/app/components/AutoFilters';
import { FaFilter, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [filterTransmission, setFilterTransmission] = useState<string | null>(null);

  const [rejectedCars, setRejectedCars] = useState<number[]>([]);
  const [likedCars, setLikedCars] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'tinder' | 'list'>('tinder');

  const fetchCars = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('cars').select('*');
    if (error) {
      console.error('Ошибка загрузки данных:', error);
      setErrorMsg('Ошибка загрузки данных.');
    } else {
      setCars(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const toggleFilterMenu = () => setIsFiltersOpen(!isFiltersOpen);

  const handleApplyFilters = () => {
    setIsFiltersOpen(false);
  };

  const handleResetFilters = () => {
    setFilterYear(null);
    setFilterTransmission(null);
    fetchCars();
    setIsFiltersOpen(false);
  };

  const filteredCars = cars.filter((car) => {
    return (
      !rejectedCars.includes(car.id) &&
      !likedCars.includes(car.id) &&
      (!filterYear || car.year === filterYear) &&
      (!filterTransmission || car.transmission === filterTransmission)
    );
  });

  if (loading) return <div className="text-center text-lg py-8">Загрузка...</div>;
  if (errorMsg) return <div className="text-center text-red-500 py-8">{errorMsg}</div>;

  return (
    <div className="flex">
      {/* Фильтры — десктоп */}
      <div className="w-64 p-4 hidden md:block">
        <h2 className="text-lg font-semibold mb-2">Фильтры</h2>
        <AutoFilters
          filterYear={filterYear}
          setFilterYear={setFilterYear}
          filterTransmission={filterTransmission}
          setFilterTransmission={setFilterTransmission}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        />
      </div>

      {/* Основной контент */}
      <div className="flex-1 p-4">
        {/* Фильтры — мобильная версия */}
        <button
          onClick={toggleFilterMenu}
          className="md:hidden mb-4 flex items-center gap-2 text-blue-600"
        >
          {isFiltersOpen ? <FaTimes /> : <FaFilter />} Фильтры
        </button>

        {isFiltersOpen && (
          <div className="md:hidden mb-4 border rounded p-4">
            <AutoFilters
              filterYear={filterYear}
              setFilterYear={setFilterYear}
              filterTransmission={filterTransmission}
              setFilterTransmission={setFilterTransmission}
              onApply={handleApplyFilters}
              onReset={handleResetFilters}
            />
          </div>
        )}

        {/* Переключение режима отображения */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setViewMode('tinder')}
            className={`px-4 py-2 rounded ${viewMode === 'tinder' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Режим Tinder
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Режим списка
          </button>
        </div>

        {/* Отображение карточек */}
        {viewMode === 'tinder' ? (
          <AutoCardStack
            cars={filteredCars}
            rejectedCars={rejectedCars}
            setRejectedCars={setRejectedCars}
            likedCars={likedCars}
            setLikedCars={setLikedCars}
          />
        ) : (
          <AutoList cars={filteredCars} />
        )}
      </div>
    </div>
  );
}
