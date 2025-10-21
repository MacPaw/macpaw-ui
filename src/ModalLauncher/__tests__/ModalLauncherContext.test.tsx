/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { act } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { ModalLauncherProvider, useModalLauncherContext, useModals } from '../ModalLauncherContext';

describe('ModalLauncher', () => {
  it('should open and close modal correctly', () => {
    const TestComponent = () => {
      const { openModal, closeModal, closeAllModals, modals } = useModalLauncherContext();

      return (
        <div>
          <button data-testid="open-modal-btn" onClick={() => openModal({ name: 'testModal' })}>
            Open Modal
          </button>
          <button data-testid="close-modal-btn" onClick={() => closeModal('testModal')}>
            Close Modal
          </button>
          <button data-testid="close-all-modals-btn" onClick={closeAllModals}>
            Close All Modals
          </button>
          <span data-testid="modals-count">{modals.length}</span>
          <span data-testid="alias-modals-count">{modals.length}</span>
        </div>
      );
    };

    render(
      <ModalLauncherProvider modalComponents={{}}>
        <TestComponent />
      </ModalLauncherProvider>,
    );

    act(() => {
      const openModalBtn = screen.getByTestId('open-modal-btn');

      openModalBtn.click();
    });

    expect(screen.getByTestId('modals-count').textContent).toBe('1');
    expect(screen.getByTestId('alias-modals-count').textContent).toBe('1');

    act(() => {
      const closeModalBtn = screen.getByTestId('close-modal-btn');

      closeModalBtn.click();
    });

    expect(screen.getByTestId('modals-count').textContent).toBe('0');
    expect(screen.getByTestId('alias-modals-count').textContent).toBe('0');

    act(() => {
      const closeAllModalsBtn = screen.getByTestId('close-all-modals-btn');

      closeAllModalsBtn.click();
    });

    expect(screen.getByTestId('modals-count').textContent).toBe('0');
    expect(screen.getByTestId('alias-modals-count').textContent).toBe('0');
  });
});
