import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import MainIcon from 'shared/assets/icons/page-main.svg';
import AboutIcon from 'shared/assets/icons/page-about.svg';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.link}
        >
          <MainIcon className={styles['link-icon']} />
          <span className={styles['link-content']}>{t('main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.link}
        >
          <AboutIcon className={styles['link-icon']} />
          <span className={styles['link-content']}>{t('about')}</span>
        </AppLink>
      </div>
      <Button
        className={styles['collapsed-btn']}
        data-testid="sidebar-toggle-btn"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
