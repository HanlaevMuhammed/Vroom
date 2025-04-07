'use client';

type AutoFiltersProps = {
  filterYear: number | null;
  setFilterYear: (year: number | null) => void;
  filterTransmission: string | null;
  setFilterTransmission: (value: string | null) => void;
  onApply: () => void;
  onReset: () => void;
};

export default function AutoFilters({
  filterYear,
  setFilterYear,
  filterTransmission,
  setFilterTransmission,
  onApply,
  onReset,
}: AutoFiltersProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block font-medium mb-1">Год выпуска</label>
        <select
          value={filterYear || ''}
          onChange={(e) => setFilterYear(e.target.value ? Number(e.target.value) : null)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Любой</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Коробка передач</label>
        <select
          value={filterTransmission || ''}
          onChange={(e) => setFilterTransmission(e.target.value || null)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Любая</option>
          <option value="МКПП">МКПП</option>
          <option value="АКПП">АКПП</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onApply}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Применить
        </button>
        <button
          onClick={onReset}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}
