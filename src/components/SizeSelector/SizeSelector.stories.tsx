import type { Meta, StoryObj } from "@storybook/react-vite";
import { SizeSelector } from "./SizeSelector";

const meta: Meta<typeof SizeSelector> = {
  title: "Blossom/SizeSelector",
  component: SizeSelector,
  args: {
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
  },
};

export default meta;
type Story = StoryObj<typeof SizeSelector>;

export const Default: Story = {};
