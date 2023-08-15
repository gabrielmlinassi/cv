import { formatAsMoney } from "@/lib";
import { CopyToClipboard } from "../CopyToClipboard";
import { ReactNode } from "react";
import { IEntries } from "./entries";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

type SummaryProps = {
  entries: IEntries;
  avgEntry: number;
  stop: number;
  risk: number;
};

export function Summary({ entries, avgEntry, stop, risk }: SummaryProps) {
  const stopPerc = 100 - (stop / avgEntry) * 100;
  const position = +((risk / stopPerc) * 100).toFixed(2) || 0;
  const maxLeverage = Math.floor(100 / stopPerc || 0);

  return (
    <div className="relative px-4 py-4">
      <SummaryItem title={`${entries.length > 1 ? "Avg." : ""} Entry price:`}>
        {formatAsMoney(avgEntry)}
      </SummaryItem>
      <SummaryItem title="Position Size:">
        <span>{formatAsMoney(position)}</span>
        <CopyToClipboard value={position.toString()} />
      </SummaryItem>
      <SummaryItem title="Max Leverage:">
        <div>{maxLeverage}x</div>
      </SummaryItem>
      <div className="absolute top-4 right-4">
        <button className="flex h-5 w-5 items-center justify-center rounded duration-100 hover:bg-gray-50">
          <DotsVerticalIcon />
        </button>
      </div>
    </div>
  );
}

function SummaryItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="font-bold">{title}</div>
      <div className="flex items-center gap-1">{children}</div>
    </div>
  );
}
