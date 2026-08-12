import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete } from "./Autocomplete";
import type { DropDownOption } from "../DropDown/DropDown";

const meta: Meta<typeof Autocomplete> = {
  title: "Blossom/Autocomplete",
  component: Autocomplete,
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Empty: Story = {
  args: {
    label: "Вещь",
    placeholder: "Начните вводить название…",
    options: [],
  },
};

export const WithOptions: Story = {
  args: {
    label: "Вещь",
    defaultValue: "Джин",
    placeholder: "Начните вводить название…",
    options: [
      { value: "1", label: "Джинсы прямые" },
      { value: "2", label: "Джинсы скинни" },
      { value: "3", label: "Джинсовая куртка" },
    ],
  },
};

export const Loading: Story = {
  args: {
    label: "Вещь",
    defaultValue: "Плат",
    placeholder: "Начните вводить название…",
    options: [],
    isLoading: true,
  },
};

export const NoResults: Story = {
  args: {
    label: "Вещь",
    defaultValue: "зюзюка",
    placeholder: "Начните вводить название…",
    options: [],
  },
};

const catalog = [
  "Джинсы прямые",
  "Джинсы скинни",
  "Джинсовая куртка",
  "Платье миди «Ирис»",
  "Платье вечернее",
  "Блуза шёлковая",
  "Блуза «Роза»",
  "Кроссовки белые",
  "Юбка плиссе",
];

const fakeDbSearch = (query: string): Promise<DropDownOption[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const matches = catalog
        .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
        .map((name) => ({ value: name, label: name }));
      resolve(matches);
    }, 500);
  });

const LiveSearchDemo = () => {
  const [options, setOptions] = useState<DropDownOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const requestId = useRef(0);

  const handleChange = async (query: string) => {
    if (!query) {
      setOptions([]);
      setIsLoading(false);
      return;
    }
    const currentRequest = ++requestId.current;
    setIsLoading(true);
    const results = await fakeDbSearch(query);
    if (currentRequest === requestId.current) {
      setOptions(results);
      setIsLoading(false);
    }
  };

  return (
    <Autocomplete
      label="Вещь"
      placeholder="Начните вводить название…"
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
      onSelect={(option) => console.log("выбрано:", option)}
    />
  );
};

export const LiveSearch: Story = {
  name: "Живой поиск (имитация запроса в БД)",
  render: () => <LiveSearchDemo />,
};
