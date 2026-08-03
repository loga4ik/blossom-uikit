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
      <div style={{ padding: 20 }}>Базовая поверхность на --bg-secondary</div>
    </Wrapper>
  ),
};

export const LightShadow: Story = {
  render: () => (
    <Wrapper lightShadow>
      <div style={{ padding: 20 }}>Более тонкая тень</div>
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
