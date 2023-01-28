import { useTheme } from 'app/providers/ThemeProvider';
import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose(): void;
    children: React.ReactChild | React.ReactNode;
    className?: string;
}

const KEYCODE = 'Escape';

function Modal({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  const { theme } = useTheme();
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const handleEscapeKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === KEYCODE) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscapeKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKeydown);
    };
  }, [isOpen, handleEscapeKeydown]);

  return (
    <Portal>
      <div className={classNames(styles.modal, {}, [true && styles[theme]])}>
        <div className={classNames(styles.overlay, mods, [className])} onClick={onClose}>
          <div
            className={classNames(styles.content, mods, [className])}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>

      </div>
    </Portal>
  );
}

export default Modal;
