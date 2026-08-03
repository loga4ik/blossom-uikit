import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchField } from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Blossom/SearchField",
  component: SearchField,
  args: {
    placeholder: "Платье, блуза, юбка…",
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {};
