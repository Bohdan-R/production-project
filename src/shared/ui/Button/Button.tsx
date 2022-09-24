import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
