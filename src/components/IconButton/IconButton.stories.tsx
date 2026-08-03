import type { Meta, StoryObj } from "@storybook/react-vite";
import { FavoriteButton } from "./FavoriteButton";

const meta: Meta<typeof FavoriteButton> = {
  title: "Blossom/FavoriteButton",
  component: FavoriteButton,
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: { defaultFavorite: false },
};

export const AlreadyFavorite: Story = {
  args: { defaultFavorite: true },
};
