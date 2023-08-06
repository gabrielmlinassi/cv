import { useMemo, useState } from "react";

import { ActionButton } from "components/operations";

import { Entries } from "@/components/operations/entries";
import { Display, DisplayToggler } from "@/components/operations/display-toggler";
import { TextField } from "@/components/ui/input-with-label";
import { formatAsMoney, formatAsPercentage } from "@/lib";
import { Summary } from "@/components/operations/Sumarry";

const OperationsPage = () => {
  const [display, setDisplay] = useState<Display>("money");
  const [entries, setEntries] = useState<number[]>([0]);
  const [stop, setStop] = useState(0);
  const [risk, setRisk] = useState(0);

  const avgEntry = useMemo(() => {
    return entries.reduce((acc, curr) => acc + +curr, 0) / entries.length;
  }, [entries]);

  const setRiskTo = (value: number) => {
    setRisk(value);
  };

  function handleChangeDisplay(value: typeof display) {
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
                        (
                        {display === "money"
                          ? formatAsPercentage((stop / avgEntry) * 100 - 100)
                          : formatAsMoney(avgEntry - (avgEntry * stop) / 100)}
                        )
                      </div>
                    </div>
                  )}
                  value={stop}
                  onChange={(e) => setStop(+e.target.value)}
                  id="stop"
                  type="number"
                  prefix="$"
                />
              </div>
            </div>
            <div>
              <TextField
                type="number"
                id="risk"
                value={risk}
                label="Risk:"
                onChange={(e) => setRisk(+e.target.value)}
                prefix="$"
                renderLabel={() => (
                  <div className="space-x-1">
                    <ActionButton onClick={() => setRiskTo(100)}>$100</ActionButton>
                    <ActionButton onClick={() => setRiskTo(200)}>$200</ActionButton>
                    <ActionButton onClick={() => setRiskTo(400)}>$400</ActionButton>
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
