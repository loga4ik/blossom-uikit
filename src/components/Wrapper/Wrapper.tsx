import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Wrapper.module.css";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  lightShadow?: boolean;
  shadow?: boolean;
};

export const Wrapper = ({
  children,
  className,
  onClick,
  lightShadow = false,
  shadow = true,
}: Props) => {
  const classes = [
    styles.wrapper,
    shadow && lightShadow && styles.lightShadow,
    !shadow && styles.noShadow,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
