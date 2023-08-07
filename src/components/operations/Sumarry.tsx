import { formatAsMoney } from "@/lib";
import { CopyToClipboard } from "../CopyToClipboard";
import { Display } from "./display-toggler";
import { ReactNode } from "react";

type SummaryProps = {
  entries: number[];
  avgEntry: number;
  stop: number;
  risk: number;
  display: Display;
};

export function Summary({ entries, avgEntry, stop, risk, display }: SummaryProps) {
  const stopPerc = 100 - (stop / avgEntry) * 100;
  const position = +((risk / stopPerc) * 100).toFixed(2) || 0;
  const maxLeverage = 100 / stopPerc || 0;

  console.log({ position, maxLeverage, stopPerc });

  return (
    <div>
      <SummaryItem title={`${entries.length > 1 ? "Avg." : ""} Entry price:`}>
        {formatAsMoney(avgEntry)}
      </SummaryItem>
      <SummaryItem title="Position Size:">
        <span>{formatAsMoney(position)}</span>
        <CopyToClipboard value={position.toString()} />
      </SummaryItem>
      <SummaryItem title="Max Leverage:">
        <div>{Math.floor(maxLeverage)}x</div>
      </SummaryItem>
    </div>
  );
}

function SummaryItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="font-bold">{title}</div>
      <div className="flex items-center gap-1">{children}</div>
    </div>
  );
}

// {entries.length > 1 && (
//   <ul>
//     {entries.map((entry, key) => (
//       <li key={key}>
//         <span>
//           Entry {key + 1} ({formatAsMoney(entry)}
//           ): {(position / entries.length).toFixed(2)}
//         </span>
//         <CopyToClipboard value={(position / entries.length).toFixed(2)} />
//       </li>
//     ))}
//   </ul>
// )}
