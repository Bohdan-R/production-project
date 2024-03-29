import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '../../../config/i18n/i18nForTest';

export interface IComponentRenderOptions {
    route?: string,
}

export function ComponentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
  const {
    route = '/',
  } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
      ,

    </MemoryRouter>,

  );
}
