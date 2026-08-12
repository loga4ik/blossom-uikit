import type { Meta, StoryObj } from "@storybook/react-vite";
import { Wrapper } from "./Wrapper";

const meta: Meta<typeof Wrapper> = {
  title: "Blossom/Wrapper",
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  render: () => (
    <Wrapper>
      <div style={{ padding: 20 }}>Приподнятая поверхность (shadowOut по умолчанию)</div>
    </Wrapper>
  ),
};

export const ShadowIn: Story = {
  render: () => (
    <Wrapper shadowOut={false}>
      <div style={{ padding: 20 }}>Внутренняя тень, как в dropzone у FileInput</div>
    </Wrapper>
  ),
};

export const NoShadow: Story = {
  render: () => (
    <Wrapper shadow={false}>
      <div style={{ padding: 20 }}>Без тени, плоская поверхность</div>
    </Wrapper>
  ),
};
