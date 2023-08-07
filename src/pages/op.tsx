import { useMemo, useState } from "react";

import { ActionButton } from "components/operations";

import { Entries } from "@/components/operations/entries";
import { Display, DisplayToggler } from "@/components/operations/display-toggler";
import { TextField } from "@/components/ui/input-with-label";
import { formatAsMoney, formatAsPercentage } from "@/lib";
import { Summary } from "@/components/operations/Sumarry";
import { useImmer } from "use-immer";

const OperationsPage = () => {
  const [display, setDisplay] = useState<Display>("money");
  const [entries, setEntries] = useImmer<Entries>({ 0: { price: 0, percentage: 0 } });
  const [stop, setStop] = useState(0);
  const [risk, setRisk] = useState(0);

  const avgEntry = useMemo(() => {
    const sumPercentual = Object.values(entries).reduce((acc, curr) => {
      return acc + curr.percentage;
    }, 0);

    const sumEntries = Object.values(entries).reduce((acc, curr) => {
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

  const setRiskTo = (value: number) => {
    setRisk(value);
  };

  function handleChangeDisplay(value: typeof display) {
    setStop(0);
    setDisplay(value);
  }

  return (
    <div className="h-screen bg-slate-300 py-20">
      <div className="mx-auto block max-w-4xl px-3">
        <div className="inline-block">
          <h1 className="text-xl font-bold uppercase">
            Calculate your operation size in pair USDT
          </h1>
          <div className="mt-4 space-y-5 rounded bg-white px-5 py-5">
            <Entries {...{ entries, setEntries }} prefix="$" />
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
                  value={stop || undefined}
                  onChange={(e) => setStop(+e.target.value)}
                  id="stop"
                  type="number"
                  prefix={display === "money" ? "$" : "%"}
                  tabIndex={2}
                />
              </div>
            </div>
            <div>
              <TextField
                type="number"
                id="risk"
                value={risk || undefined}
                label="Risk:"
                onChange={(e) => setRisk(+e.target.value)}
                prefix="$"
                tabIndex={3}
                renderLabel={() => (
                  <div className="flex items-center gap-1">
                    {[100, 200, 400].map((value) => (
                      <div key={`risk-${value}`}>
                        <ActionButton style="outline" onClick={() => setRiskTo(value)}>
                          {formatAsMoney(value)}
                        </ActionButton>
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
            <Summary {...{ entries, avgEntry, stop, risk, display }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;
