import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Blossom/TextInput",
  component: TextInput,
  args: {
    placeholder: "Введите значение",
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Имя получателя",
    placeholder: "Анна Смирнова",
  },
};

export const Required: Story = {
  args: {
    label: "Телефон",
    placeholder: "+7 900 000-00-00",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Промокод",
    placeholder: "BLOSSOM10",
    error: "Такого промокода не существует",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <TextInput size="sm" label="Маленькое" placeholder="sm" />
      <TextInput size="md" label="Среднее" placeholder="md" />
      <TextInput size="lg" label="Большое" placeholder="lg" />
    </div>
  ),
};
