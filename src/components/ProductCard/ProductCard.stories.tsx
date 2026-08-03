import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Blossom/ProductCard",
  component: ProductCard,
  args: {
    title: "Платье миди «Ирис»",
    fabric: "Лён, свободный крой",
    price: 4890,
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    colors: [
      { name: "Лавандовый", value: "var(--lavender)", deep: "var(--lavender-deep)" },
      { name: "Розовый", value: "var(--rose)", deep: "var(--rose-deep)" },
      { name: "Золотой", value: "var(--gold)", deep: "var(--gold-deep)" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};

export const AlreadyFavorite: Story = {
  args: { defaultFavorite: true },
};
