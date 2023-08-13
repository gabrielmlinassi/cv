import { useMemo, useState } from "react";

import { ActionButton } from "components/operations";

import { Entries, IEntries } from "@/components/operations/entries";
import { Display, DisplayToggler } from "@/components/operations/display-toggler";
import { TextField } from "@/components/ui/input-with-label";
import { formatAsMoney, formatAsPercentage } from "@/lib";
import { Summary } from "@/components/operations/Sumarry";
import { useFieldArray, useForm } from "react-hook-form";

export type FormValues = {
  entries: IEntries;
  stop: number;
  risk: number;
};

/**
 * TODO: Add yup validation
 *
 */

const OperationsPage = () => {
  const [display, setDisplay] = useState<Display>("money");

  const { register, handleSubmit, setValue, watch, control } = useForm<FormValues>({
    defaultValues: {
      entries: [{ price: 0, percentage: 100 }],
      risk: 0,
      stop: 0,
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "entries",
  });

  const entries = watch("entries");
  const stop = watch("stop");
  const risk = watch("risk");

  const avgEntry = useMemo(() => {
    const sumPercentual = entries.reduce((acc, curr) => {
      return acc + curr.percentage;
    }, 0);

    const sumEntries = entries.reduce((acc, curr) => {
      return acc + curr.price * curr.percentage;
    }, 0);

    return sumEntries / sumPercentual;
  }, [entries]);

  const stopPerc = useMemo(() => {
    return (stop / avgEntry) * 100 - 100 || 0;
  }, [stop, avgEntry]);

  const stopVal = useMemo(() => {
    return avgEntry - (avgEntry * stop) / 100 || 0;
  }, [avgEntry, stop]);

  function handleChangeDisplay(value: typeof display) {
    setValue("stop", 0);
    setDisplay(value);
  }

  return (
    <div className="h-screen bg-white py-20">
      <div className="mx-auto w-fit rounded-lg bg-gray-200 p-8">
        <div className="inline-block">
          <h1 className="text-xl font-bold uppercase">
            Calculate your operation size in pair USDT
          </h1>
          <div className="mt-4 rounded bg-white">
            <div className="space-y-5 px-5 py-6">
              <Entries
                entries={fields}
                append={append}
                remove={remove}
                register={register}
                prefix="$"
              />
              <div className="flex flex-col gap-0.5">
                <div>
                  <TextField
                    label="Stop:"
                    renderLabel={() => (
                      <div className="flex w-full items-center justify-between">
                        <DisplayToggler
                          defaultValue={display}
                          onValueChange={handleChangeDisplay}
                        />
                        <div className="text-xs text-red-500">
                          {avgEntry && stop
                            ? display === "money"
                              ? `(${formatAsPercentage(stopPerc)})`
                              : `(${formatAsMoney(stopVal)})`
                            : null}
                        </div>
                      </div>
                    )}
                    {...register("stop", { valueAsNumber: true })}
                    type="number"
                    prefix={display === "money" ? "$" : "%"}
                    tabIndex={2}
                  />
                </div>
              </div>
              <div>
                <TextField
                  label="Risk"
                  type="number"
                  {...register("risk", { valueAsNumber: true })}
                  prefix="$"
                  tabIndex={3}
                  renderLabel={() => (
                    <div className="flex items-center gap-1">
                      {[100, 200, 400].map((value) => (
                        <div key={`risk-${value}`}>
                          <ActionButton
                            style="outline"
                            onClick={() => setValue("risk", value)}
                          >
                            {formatAsMoney(value)}
                          </ActionButton>
                        </div>
                      ))}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="border-t px-5 py-5">
              <Summary entries={entries} avgEntry={avgEntry} stop={stop} risk={risk} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;
