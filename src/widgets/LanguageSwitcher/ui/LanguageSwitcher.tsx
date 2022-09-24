import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LanguageSwitcher.module.scss";

interface ILanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: ILanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames(styles.languageSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
};
