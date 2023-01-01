import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: IThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.switcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK
        ? <DarkThemeIcon width={22} height={22} />
        : <LightThemeIcon width={22} height={22} />}
    </Button>
  );
}
