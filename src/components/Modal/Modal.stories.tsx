import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { DressIllustration } from "../icons/DressIllustration";

const meta: Meta<typeof Modal> = {
  title: "Blossom/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const QuickViewDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ minHeight: 360 }}>
      <Button onClick={() => setOpen(true)}>Открыть быстрый просмотр</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DressIllustration color="var(--rose)" colorDeep="var(--rose-deep)" />
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 19, margin: "0 0 4px" }}>
          Блуза «Роза»
        </p>
        <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: "0 0 10px" }}>
          Шёлк, свободный рукав
        </p>
        <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 14px" }}>3 290 ₽</p>
        <Button variant="primary" fullWidth>
          В корзину
        </Button>
      </Modal>
    </div>
  );
};

export const QuickView: Story = {
  render: () => <QuickViewDemo />,
};
