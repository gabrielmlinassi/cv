import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib";
import React, { InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, prefix, ...inputProps }: TextFieldProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={inputProps.name ?? inputProps.id}>{label}</Label>
      <InputWithPrefix prefix={prefix} {...inputProps} />
    </div>
  );
}

type InputWithPrefixProps = InputHTMLAttributes<HTMLInputElement>;

export function InputWithPrefix({ prefix, ...props }: InputWithPrefixProps) {
  return (
    <div className="relative overflow-hidden rounded-md">
      <TextFieldPrefix prefix={prefix} />
      <Input {...props} className={cn("pl-10", props.className)} />
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
