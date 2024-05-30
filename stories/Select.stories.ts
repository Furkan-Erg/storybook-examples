import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "./Select";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    optionArray: ["Option 1", "Option 2", "Option 3"],
    size: "medium",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    optionArray: ["Option 1", "Option 2", "Option 3"],
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    optionArray: ["Option 1", "Option 2", "Option 3"],
  },
};
export const Large: Story = {
  args: {
    size: "large",
    optionArray: ["Option 1", "Option 2", "Option 3"],
  },
};
export const Selected: Story = {
  args: {
    selected: "Option 2",
    optionArray: ["Option 1", "Option 2", "Option 3"],
  },
};
export const Placeholder: Story = {
  args: {
    placeholder: "Select an option",
    optionArray: ["Option 1", "Option 2", "Option 3"],
  },
};
export const SelectedAndPlaceholder: Story = {
  args: {
    selected: "Option 2",
    placeholder: "Select an option",
    optionArray: ["Option 1", "Option 2", "Option 3"],
  },
};
export const Empty: Story = {
  args: {
    optionArray: [],
  },
};
