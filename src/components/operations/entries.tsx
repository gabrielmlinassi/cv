import { TrashIcon } from "@radix-ui/react-icons";
import { TextField } from "components/ui/input-with-label";
import { ActionButton } from "./ActionButton";

export type Entries = {
  [key in number]: { price: number; percentage: number };
};

type EntriesProps = {
  entries: Entries;
  setEntries: (draft: any) => void;
  prefix: "$" | "%";
};

export function Entries({ prefix, entries, setEntries }: EntriesProps) {
  const handleAddNewEntry = () => {
    setEntries((draft: Entries) => {
      draft[Object.entries(entries).length] = {
        price: 0,
        percentage: 0,
      };
    });
  };

  const handleInputChange = (price: number, key: number) => {
    setEntries((draft: Entries) => {
      draft[key].price = price;
    });
  };

  const updtPercentage = (percentage: number, key: number) => {
    setEntries((draft: Entries) => {
      draft[key].percentage = percentage;
    });
  };

  const removeEntry = (entryIdx: number) => {
    setEntries((draft: Entries) => {
      delete draft[entryIdx];
    });
  };

  return (
    <div>
      <div className="space-y-4">
        {Object.entries(entries).map(([key, { price, percentage }]) => (
          <div key={key} className="flex items-center gap-2">
            <TextField
              type="number"
              id={`entry${key}`}
              label="Entry:"
              value={price || undefined}
              onChange={(e) => handleInputChange(+e.target.value, +key)}
              prefix={prefix}
              tabIndex={1}
            />
            {Object.entries(entries).length > 1 && (
              <div className="flex items-end gap-1">
                <div className="w-[125px]">
                  <TextField
                    type="number"
                    id={`multipler-${key}`}
                    label="Entry %:"
                    value={percentage || undefined}
                    onChange={(e) => updtPercentage(+e.target.value, +key)}
                  />
                </div>
                <div className="flex h-9 items-center">
                  <ActionButton onClick={() => removeEntry(+key)}>
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </ActionButton>
                </div>
              </div>
            )}
          </div>
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
