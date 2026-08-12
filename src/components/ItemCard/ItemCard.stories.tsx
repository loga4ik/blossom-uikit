import type { Meta, StoryObj } from "@storybook/react-vite";
import { ItemCard } from "./ItemCard";

const meta: Meta<typeof ItemCard> = {
  title: "Blossom/ItemCard",
  component: ItemCard,
  args: {
    title: "Джинсы прямые",
    category: "Низ",
    meta: "3 нед.",
  },
};

export default meta;
type Story = StoryObj<typeof ItemCard>;

export const Default: Story = {};

export const WithPhoto: Story = {
  args: {
    imageUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='240'%3E%3Crect width='320' height='240' fill='%234a5a72'/%3E%3C/svg%3E",
  },
};

export const AlreadyFavorite: Story = {
  args: {
    defaultFavorite: true,
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
      <ItemCard title="Джинсы прямые" category="Низ" meta="3 нед." />
      <ItemCard title="Блуза шёлковая" category="Верх" meta="1 нед." defaultFavorite />
      <ItemCard title="Кроссовки белые" category="Обувь" />
    </div>
  ),
};
