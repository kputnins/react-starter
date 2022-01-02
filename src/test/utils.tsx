import { ComponentType, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { RootState, reducer } from '../store';

export const renderWithStore = (
  ui: ReactElement,
  {
    state,
    renderOptions,
  }: {
    state?: RootState;
    renderOptions?: RenderOptions;
  } = {}
): RenderResult => {
  const store = configureStore({ reducer, preloadedState: state });

  function Wrapper({ children }: { children: ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper as ComponentType, ...renderOptions });
};
