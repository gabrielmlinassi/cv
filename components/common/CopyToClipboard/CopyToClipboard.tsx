import { CopyIcon } from "@components/operations/icons/CopyIcon";
import { useState } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

type CopyToClipboardProps = {
  value: string;
};

const CopyToClipboard = ({ value }: CopyToClipboardProps) => {
  const [, copy] = useCopyToClipboard();

  const handleClick = () => {
    copy(value);
  };

  return (
    <button
      onClick={handleClick}
      className="box-content h-5 w-5 rounded p-1 hover:bg-slate-200"
    >
      <CopyIcon />
    </button>
  );
};

export { CopyToClipboard };
