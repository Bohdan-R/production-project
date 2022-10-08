import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface ILoaderProps {
    className?: string
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={classNames(styles['lds-ring'], {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
