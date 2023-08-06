import type { Meta, StoryObj } from "@storybook/react";
import { DisplayToggler } from "./display-toggler";

const meta: Meta<typeof DisplayToggler> = {
  title: "OP/DisplayToggler",
  component: DisplayToggler,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DisplayToggler>;

export const PercentualPrefix: Story = {
  args: {
    defaultValue: "money",
  },
};

export const MoneyPrefix: Story = {
  args: {
    defaultValue: "perc",
  },
};
