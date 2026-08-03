import { useEffect } from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/tokens/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      description: "Тема Blossom UI Kit",
      toolbar: {
        title: "Тема",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Светлая" },
          { value: "dark", icon: "moon", title: "Тёмная" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "light";
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);
      return (
        <div style={{ background: "var(--bg)", padding: "2rem", minHeight: "100%" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
