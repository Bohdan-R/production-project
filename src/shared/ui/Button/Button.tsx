import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  onClick?(): void;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  onClick,
  ...otherProps
}) => (
  <button
    type="button"
    className={classNames(styles.button, {}, [className, styles[theme]])}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);
