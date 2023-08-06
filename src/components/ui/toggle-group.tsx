import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { Circle } from "lucide-react";

import { cn } from "lib/utils";

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
ToggleGroup.displayName = RadioGroupPrimitive.Root.displayName;

const ToogleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </ToggleGroupPrimitive.Item>
  );
});
ToogleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToogleGroupItem };
