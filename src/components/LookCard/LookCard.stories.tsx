import type { Meta, StoryObj } from "@storybook/react-vite";
import { LookCard } from "./LookCard";

const meta: Meta<typeof LookCard> = {
  title: "Blossom/LookCard",
  component: LookCard,
  args: {
    title: "Платье миди «Ирис»",
    description: "Лён, свободный крой",
  },
};

export default meta;
type Story = StoryObj<typeof LookCard>;

export const Default: Story = {};
