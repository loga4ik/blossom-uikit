import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput } from "./FileInput";

const meta: Meta<typeof FileInput> = {
  title: "Blossom/FileInput",
  component: FileInput,
  args: {
    label: "Фото товара",
    hint: "PNG или JPG, до 10 МБ",
  },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {};

export const Multiple: Story = {
  args: {
    label: "Фото образа",
    hint: "Можно выбрать несколько файлов",
    multiple: true,
    accept: "image/*",
  },
};

export const Required: Story = {
  args: {
    label: "Фото товара",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Фото товара",
    error: "Файл слишком большой — максимум 10 МБ",
  },
};

export const CustomClassName: Story = {
  render: () => (
    <>
      <style>{`.custom-file-input-demo { outline: 2px dashed var(--sage); outline-offset: 4px; border-radius: 22px; padding: 8px; }`}</style>
      <FileInput label="Фото товара" className="custom-file-input-demo" />
    </>
  ),
};

export const ImagePreview: Story = {
  name: "Превью загруженного фото (выберите файл)",
  args: {
    label: "Фото товара",
    hint: "Выберите изображение — появится миниатюра",
    accept: "image/*",
  },
};
