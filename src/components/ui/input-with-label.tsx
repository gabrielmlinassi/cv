import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib";
import React, { InputHTMLAttributes, ReactNode } from "react";

type TextFieldProps = {
  label: string;
  renderLabel?: () => ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, renderLabel, prefix, ...inputProps }: TextFieldProps) {
  return (
    <div className="w-full items-center gap-1.5">
      <div className="mb-1 flex items-center gap-5">
        <Label htmlFor={inputProps.name ?? inputProps.id}>{label}</Label>
        {renderLabel?.()}
      </div>
      <InputWithPrefix prefix={prefix} {...inputProps} />
    </div>
  );
}

type InputWithPrefixProps = InputHTMLAttributes<HTMLInputElement>;

export function InputWithPrefix({ prefix, ...props }: InputWithPrefixProps) {
  return (
    <div className="relative overflow-hidden rounded-md">
      {!!prefix && <TextFieldPrefix prefix={prefix} />}
      <Input {...props} className={cn(!!prefix && "pl-10", props.className)} />
    </div>
  );
}

export function TextFieldPrefix({ prefix }: Pick<TextFieldProps, "prefix">) {
  return (
    <div className="absolute flex h-full w-8 items-center justify-center border-slate-500 bg-slate-500 text-white">
      {prefix}
    </div>
  );
}
