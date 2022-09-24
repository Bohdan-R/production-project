import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import styles from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={styles.link}>
          Main
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={"/about"}
          className={styles.link}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
