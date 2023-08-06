import { TextField } from "components/ui/input-with-label";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type EntriesProps = {
  entries: number[];
  setEntries: Dispatch<SetStateAction<number[]>>;
  prefix: "$" | "%";
};

export function Entries({ prefix, entries, setEntries }: EntriesProps) {
  const handleAddNewEntry = () => {
    setEntries((entries) => [...(entries ?? []), 0]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, key: number) => {
    const value = e.target.value;
    setEntries((entries) => {
      return entries.map((entry, idx) => {
        return key === idx ? +value : entry;
      });
    });
  };

  return (
    <div>
      <div className="space-y-1">
        {entries.map((_, key) => (
          <TextField
            key={key}
            type="number"
            id={`entry${key}`}
            label={entries.length > 1 ? `Entry ${key + 1}:` : "Entry:"}
            value={entries[key]}
            onChange={(e) => handleInputChange(e, key)}
            prefix={prefix}
          />
        ))}
      </div>
      <div className="mt-2 text-center">
        <button onClick={handleAddNewEntry}>
          <span className="text-xs text-gray-500 underline">Add new entry</span>
        </button>
      </div>
    </div>
  );
}
