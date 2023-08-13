import { TrashIcon } from "@radix-ui/react-icons";
import { TextField } from "components/ui/input-with-label";
import { ActionButton } from "./ActionButton";
import {
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormRegister,
} from "react-hook-form";
import { FormValues } from "@/pages/op";

export type IEntries = { price: number; percentage: number }[];

type EntriesProps = {
  entries: IEntries;
  prefix: "$" | "%";
  register: UseFormRegister<FormValues>;
  append: UseFieldArrayAppend<FormValues, "entries">;
  remove: UseFieldArrayRemove;
};

export function Entries({ prefix, entries, append, remove, register }: EntriesProps) {
  const handleAddNewEntry = () => {
    append({ price: 0, percentage: 0 });
  };

  const removeEntry = (entryIdx: number) => {
    remove(entryIdx);
  };

  return (
    <div>
      <div className="space-y-4">
        {entries.map((_, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <TextField
              type="number"
              id={`entry-${idx}`}
              label="Entry:"
              {...register(`entries.${idx}.price`, { valueAsNumber: true })}
              prefix={prefix}
              tabIndex={1}
            />
            {entries.length > 1 && (
              <div className="flex items-end gap-1">
                <div className="w-[125px]">
                  <TextField
                    type="number"
                    id={`multipler-${idx}`}
                    label="Entry %:"
                    {...register(`entries.${idx}.percentage`, { valueAsNumber: true })}
                  />
                </div>
                <div className="flex h-9 items-center">
                  <ActionButton onClick={() => removeEntry(+idx)}>
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
