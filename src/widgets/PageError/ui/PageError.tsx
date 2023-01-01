import React, { } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface IPageErrorProps {
    className?: string
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line
    location.reload();
  };

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {t('unexpected-error')}
      <Button onClick={reloadPage}>
        {t('reload-page')}
      </Button>
    </div>
  );
};
