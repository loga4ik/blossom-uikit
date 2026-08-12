import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropDown } from "./DropDown";

const categoryOptions = [
  { value: "top", label: "Верх" },
  { value: "bottom", label: "Низ" },
  { value: "shoes", label: "Обувь" },
  { value: "accessory", label: "Аксессуар" },
];

const meta: Meta<typeof DropDown> = {
  title: "Blossom/DropDown",
  component: DropDown,
  args: {
    options: categoryOptions,
    placeholder: "Выберите категорию",
  },
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Категория",
    required: true,
  },
};

export const WithSelectedValue: Story = {
  args: {
    label: "Категория",
    defaultValue: "bottom",
  },
};

export const WithError: Story = {
  args: {
    label: "Категория",
    error: "Нужно выбрать категорию",
  },
};
