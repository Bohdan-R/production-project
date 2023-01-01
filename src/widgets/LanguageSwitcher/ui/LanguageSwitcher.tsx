import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

interface ILanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: ILanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);

  const handleSetLang = (language: string) => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      <button
        type="button"
        className={classNames(
          styles.switcher,
          { [styles.selected]: lang === 'ru' },
          [],
        )}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSetLang((e.target as HTMLElement).textContent)}
      >
        ru
      </button>

      <div className={styles.line} />

      <button
        type="button"
        className={classNames(
          styles.switcher,
          { [styles.selected]: lang === 'en' },
          [],
        )}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSetLang((e.target as HTMLElement).textContent)}
      >
        en
      </button>
    </div>
  );
}
