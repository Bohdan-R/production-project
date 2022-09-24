import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={styles.link}>
          {t("main")}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={"/about"}
          className={styles.link}
        >
          {t("about")}
        </AppLink>
      </div>
    </div>
  );
};
