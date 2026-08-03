import styles from "./ThemeToggle.module.css";
import { Button } from "../Button/Button";
import { applyTheme, useTheme } from "../../hooks/useTheme";

export const ThemeToggle = () => {
  const theme = useTheme();

  const toggle = () => applyTheme(theme === "light" ? "dark" : "light");

  return (
    <Button className={styles.toggle} onClick={toggle} aria-label="Переключить тему">
      <span className={styles.dot}>{theme === "dark" ? "☾" : "☀"}</span>
    </Button>
  );
};
