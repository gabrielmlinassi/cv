import { RadioGroup, RadioGroupItem } from "components/ui/radio-group";
import { Label } from "components/ui/label";

export type Display = "perc" | "money";

type DisplayTogglerProps = {
  defaultValue?: Display;
  onValueChange: (v: Display) => void;
};

export function DisplayToggler({ defaultValue, onValueChange }: DisplayTogglerProps) {
  return (
    <RadioGroup defaultValue={defaultValue} onValueChange={onValueChange}>
      <div className="flex gap-4">
        <Label htmlFor="money" className="flex items-center gap-1">
          <RadioGroupItem value="money" id="money" />
          <span>$</span>
        </Label>
        <Label htmlFor="perc" className="flex items-center gap-1">
          <RadioGroupItem value="perc" id="perc" />
          <span>%</span>
        </Label>
      </div>
    </RadioGroup>
  );
}
