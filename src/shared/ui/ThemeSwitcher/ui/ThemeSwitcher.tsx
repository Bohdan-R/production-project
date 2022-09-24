import React from "react";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.button, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
