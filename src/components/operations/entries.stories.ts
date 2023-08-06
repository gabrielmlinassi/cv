import type { Meta, StoryObj } from "@storybook/react";
import { Entries } from "./entries";

const meta: Meta<typeof Entries> = {
  title: "OP/Entries",
  component: Entries,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Entries>;

export const PercentualPrefix: Story = {
  args: {
    prefix: "%",
  },
};

export const MoneyPrefix: Story = {
  args: {
    prefix: "$",
  },
};
