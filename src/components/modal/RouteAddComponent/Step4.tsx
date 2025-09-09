import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react'

function Step4() {
  const [stations, setStations] = useState<string[]>([""]);

  const addStation = (index: number) => {
    const newStations = [...stations];
    newStations.splice(index + 1, 0, ""); // thêm sau station hiện tại
    setStations(newStations);
  };

  const removeStation = (index: number) => {
    if (stations.length === 1) return; // không cho xóa hết
    const newStations = [...stations];
    newStations.splice(index, 1);
    setStations(newStations);
  };

  const updateStation = (index: number, value: string) => {
    const newStations = [...stations];
    newStations[index] = value;
    setStations(newStations);
  };

  return (
    <div className="max-h-[9rem] overflow-y-auto space-y-2 pr-10">
      {
        stations.map((station, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              value={station}
              onChange={(e) => updateStation(index, e.target.value)}
              placeholder={`Station ${index + 1}`}
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={() => addStation(index)}
              className="w-8 h-8 flex items-center justify-center rounded bg-cyan-800 text-white"
            >
              <PlusIcon />
            </button>
            <button
              onClick={() => removeStation(index)}
              className="w-8 h-8 flex items-center justify-center rounded bg-rose-800 text-white"
              disabled={stations.length === 1}
            >
              <MinusIcon />
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Step4