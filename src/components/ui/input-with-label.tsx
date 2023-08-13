import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib";
import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

type TextFieldProps = {
  label: string;
  renderLabel?: () => ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, renderLabel, prefix, ...inputProps }, ref) => {
    return (
      <div className="w-full items-center gap-1.5">
        <div className="mb-2 flex items-center gap-5">
          <Label htmlFor={inputProps.name ?? inputProps.id}>{label}</Label>
          {renderLabel?.()}
        </div>
        <InputWithPrefix prefix={prefix} {...inputProps} ref={ref} />
      </div>
    );
  }
);
TextField.displayName = "TextField";

type InputWithPrefixProps = InputHTMLAttributes<HTMLInputElement>;

export const InputWithPrefix = forwardRef<HTMLInputElement, InputWithPrefixProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <div className="relative overflow-hidden rounded-md ring-offset-2 focus-within:ring-2 focus-within:ring-gray-300">
        {!!prefix && <TextFieldPrefix prefix={prefix} />}
        <Input
          {...props}
          ref={ref}
          className={cn(!!prefix && "pl-10", props.className)}
        />
      </div>
    );
  }
);
InputWithPrefix.displayName = "InputWithPrefix";

export function TextFieldPrefix({ prefix }: Pick<TextFieldProps, "prefix">) {
  return (
    <div className="absolute flex h-full w-8 items-center justify-center border-slate-500 bg-slate-500 text-white">
      {prefix}
    </div>
  );
}
