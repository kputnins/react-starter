import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DataTestId, renderWithStore, rootState } from '../../test';
import { RootState } from '../../store';

import Counter, { LABELS } from './Counter';

describe('Counter', () => {
  it('Renders without crashing', () => {
    renderWithStore(<Counter />);
  });

  it('Displays the current count value from the count store', () => {
    const initialCount = 27;
    const state: RootState = { ...rootState, counter: { value: initialCount } };

    renderWithStore(<Counter />, { state });
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe(
      initialCount.toString()
    );
  });

  it(`Clicking the ${LABELS.incrementByOne} button updates the displayed count state by +1`, () => {
    renderWithStore(<Counter />);
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('0');

    userEvent.click(screen.getByText(LABELS.incrementByOne));
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('1');
  });

  it(`Clicking the ${LABELS.decrementByOne} button updates the displayed count state by -1`, () => {
    renderWithStore(<Counter />);
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('0');

    userEvent.click(screen.getByText(LABELS.decrementByOne));
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('-1');
  });

  it(`Clicking the ${LABELS.incrementByFourTwenty} button updates the displayed count state by +420`, () => {
    renderWithStore(<Counter />);
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('0');

    userEvent.click(screen.getByText(LABELS.incrementByFourTwenty));
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('420');
  });

  it(`Clicking the ${LABELS.decrementBySixtyNine} button updates the displayed count state by -69`, () => {
    renderWithStore(<Counter />);
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('0');

    userEvent.click(screen.getByText(LABELS.decrementBySixtyNine));
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('-69');
  });

  it(`Clicking the ${LABELS.reset} button updates the displayed count state to 0`, () => {
    renderWithStore(<Counter />);
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('0');

    userEvent.click(screen.getByText(LABELS.incrementByFourTwenty));
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('420');

    userEvent.click(screen.getByText(LABELS.reset));
    expect(screen.getByTestId(DataTestId.COUNT).innerHTML).toBe('0');
  });
});
