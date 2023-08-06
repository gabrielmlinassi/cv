import { formatAsMoney } from "@/lib";
import { CopyToClipboard } from "../CopyToClipboard";
import { Display } from "./display-toggler";

type SummaryProps = {
  entries: number[];
  avgEntry: number;
  stop: number;
  risk: number;
  display: Display;
};

export function Summary({ entries, avgEntry, stop, risk, display }: SummaryProps) {
  const position = 10;

  const stopPerc =
    stop > 0
      ? display === "money"
        ? +(100 - (stop / avgEntry) * 100).toFixed(2)
        : stop
      : 0;

  const positionSize = +((risk / stopPerc) * 100).toFixed(2);

  return (
    <summary>
      <div className="text-sm">Avg. Entry price: {formatAsMoney(avgEntry)}</div>
      <div>
        {entries.length > 1 ? (
          <>
            <ul>
              {entries.map((entry, key) => (
                <li key={key}>
                  <span>
                    Entry {key + 1} ({formatAsMoney(entry)}
                    ): {(position / entries.length).toFixed(2)}
                  </span>
                  <CopyToClipboard value={(position / entries.length).toFixed(2)} />
                </li>
              ))}
            </ul>
            <div>
              <span>Total Position Size..:</span>{" "}
              {!!position && (
                <>
                  {formatAsMoney(position)}
                  <CopyToClipboard value={position.toString()} />
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <span>Position Size..:</span>{" "}
            {!!position && (
              <>
                {formatAsMoney(position)}
                <CopyToClipboard value={position.toString()} />
              </>
            )}
          </>
        )}
      </div>
      <div>
        Max Leverage.........: {!!stopPerc && `${Math.round(100 / stopPerc) - 1}x`}
      </div>
    </summary>
  );
}
