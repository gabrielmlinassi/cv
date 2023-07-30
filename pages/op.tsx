import { useEffect, useState } from "react";
import { ActionButton } from "@components/operations/ActionButton";
import { CopyToClipboard } from "@components/common";
import cn from "classnames";
import { MoneyHelpers } from "utils/money";

type State = {
  entries: { [key in `entry-${number}`]: number };
  stop: number;
  risk: number;
};

const OperationsPage = () => {
  const [entriesQty, setEntriesQty] = useState(1);
  const [stopDisplay, setStopDisplay] = useState<"perc" | "num">("num");
  const [state, setState] = useState<State>({
    entries: { "entry-1": 0 },
    risk: 0,
    stop: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id.startsWith("entry-")) {
      setState((state) => ({
        ...state,
        ["entries"]: {
          ...state.entries,
          [e.target.id]: e.target.value,
        },
      }));
    } else {
      setState((state) => ({ ...state, [e.target.id]: e.target.value }));
    }
  };

  const setRiskTo = (value: number) => {
    setState((state) => ({ ...state, risk: value }));
  };

  const handleAddNewEntry = () => {
    setEntriesQty((entriesQty) => entriesQty + 1);
  };

  const totalEntries = Object.values(state.entries).reduce(
    (acc, curr) => acc + +curr,
    0
  );
  const avgTotalEntries = totalEntries / Object.values(state.entries).length;

  const stopPerc =
    state.stop > 0
      ? stopDisplay === "num"
        ? +(100 - (state.stop / avgTotalEntries) * 100).toFixed(2)
        : state.stop
      : 0;

  const positionSize = +((state.risk / stopPerc) * 100).toFixed(2);

  return (
    <div className="h-screen bg-slate-300 py-20">
      <div className="mx-auto block max-w-4xl px-3">
        <div className="inline-block">
          <h1 className="text-xl font-bold uppercase">
            Calculate your operation size in pair USDT
          </h1>
          <div className="mt-4 space-y-5 rounded bg-white px-5 py-5">
            <div>
              <label htmlFor="entry">
                {entriesQty > 1 ? "Partial Entries:" : "Entry:"}
              </label>
              <div className="space-y-1">
                {Array.from({ length: entriesQty }, (v, k) => k + 1).map(
                  (key) => (
                    <div key={key} className="flex flex-col gap-0.5">
                      <div className="flex">
                        <div className="relative">
                          <input
                            type="number"
                            id={`entry-${key}`}
                            value={state.entries[`entry-${key}`]}
                            onChange={handleInputChange}
                            className="h-9 w-[250px] rounded pl-10"
                          />
                          <div className="absolute left-0 top-0 bottom-0 flex w-7 items-center justify-center rounded-l bg-slate-500 text-white">
                            {stopDisplay === "num" ? "$" : "%"}
                          </div>
                        </div>
                        {entriesQty === key && (
                          <button
                            onClick={handleAddNewEntry}
                            className="ml-1 inline-flex w-7 items-center justify-center rounded bg-slate-600 text-sm text-white"
                          >
                            +
                          </button>
                        )}
                      </div>
                    </div>
                  )
                )}
                <div className="text-sm">
                  Avg. Entry price:{" "}
                  {Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  }).format(avgTotalEntries)}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-3">
                <label htmlFor="entry">Stop:</label>
                <div className="space-x-1">
                  <button
                    onClick={() => {
                      setStopDisplay("num");
                      setState((state) => ({ ...state, stop: 0 }));
                    }}
                    className={cn([
                      "inline-flex w-5 items-center justify-center rounded border border-slate-600 text-sm",
                      stopDisplay === "num" && "bg-slate-600 text-white",
                    ])}
                  >
                    $
                  </button>
                  <button
                    onClick={() => setStopDisplay("perc")}
                    className={cn([
                      "inline-flex w-5 items-center justify-center rounded border border-slate-600 text-sm",
                      stopDisplay === "perc" && "bg-slate-600 text-white",
                    ])}
                  >
                    %
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="relative">
                  <input
                    type="number"
                    id="stop"
                    value={state.stop}
                    onChange={handleInputChange}
                    className="h-9 w-[250px] rounded pl-10"
                  />
                  <div className="absolute left-0 top-0 bottom-0 flex w-7 items-center justify-center rounded-l bg-slate-500 text-white">
                    {stopDisplay === "num" ? "$" : "%"}
                  </div>
                </div>
                {!!stopPerc && (
                  <div className="text-sm">
                    {stopDisplay === "num"
                      ? `${stopPerc}%`
                      : Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        }).format(
                          avgTotalEntries - (avgTotalEntries * state.stop) / 100
                        )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-3">
                <label htmlFor="entry">Risk:</label>
                <div className="space-x-1">
                  <ActionButton onClick={() => setRiskTo(100)}>
                    $100
                  </ActionButton>
                  <ActionButton onClick={() => setRiskTo(200)}>
                    $200
                  </ActionButton>
                  <ActionButton onClick={() => setRiskTo(400)}>
                    $400
                  </ActionButton>
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="risk"
                  value={state.risk}
                  onChange={handleInputChange}
                  className="h-9 w-[250px] rounded pl-10"
                />
                <div className="absolute left-0 top-0 bottom-0 flex w-7 items-center justify-center rounded-l bg-slate-500 text-white">
                  {stopDisplay === "num" ? "$" : "%"}
                </div>
              </div>
            </div>
            <pre>
              <div>
                {entriesQty > 1 ? (
                  <>
                    <ul>
                      {Object.values(state.entries).map((entry, key) => (
                        <li key={key}>
                          <span>
                            Entry {key + 1} ({MoneyHelpers.format(entry)}
                            ): {(positionSize / entriesQty).toFixed(2)}
                          </span>
                          <CopyToClipboard
                            value={(positionSize / entriesQty).toFixed(2)}
                          />
                        </li>
                      ))}
                    </ul>
                    <div>
                      <span>Total Position Size..:</span>{" "}
                      {!!positionSize && (
                        <>
                          {Intl.NumberFormat("en-us", {
                            style: "currency",
                            currency: "USD",
                          }).format(positionSize)}
                          <CopyToClipboard value={positionSize.toString()} />
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <span>Position Size..:</span>{" "}
                    {!!positionSize && (
                      <>
                        {Intl.NumberFormat("en-us", {
                          style: "currency",
                          currency: "USD",
                        }).format(positionSize)}
                        <CopyToClipboard value={positionSize.toString()} />
                      </>
                    )}
                  </>
                )}
              </div>
              <div>
                Max Leverage.........:{" "}
                {!!stopPerc && `${Math.round(100 / stopPerc) - 1}x`}
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;
