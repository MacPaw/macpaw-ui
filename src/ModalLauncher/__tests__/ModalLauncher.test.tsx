// eslint-disable-next-line import/no-extraneous-dependencies
import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalLauncher from '../ModalLauncher';
import { useModalLauncherContext } from '../ModalLauncherContext';

jest.mock('../ModalLauncherContext', () => ({
  ...jest.requireActual('../ModalLauncherContext'),
  useModalLauncherContext: jest.fn().mockReturnValue({
    modals: [],
    modalComponents: [],
    closeModal: jest.fn(),
    ModalFallback: <div>ModalFallback</div>,
  }),
}));

describe('ModalLauncher', () => {
  it('render empty ModalLauncher', async () => {
    const { container } = render(<ModalLauncher />);

    expect(container.innerHTML).toBe('');
  });

  it('render with error', async () => {
    (useModalLauncherContext as jest.Mock).mockReturnValue({
      modals: [{}],
      modalComponents: [],
      closeModal: jest.fn(),
      ModalFallback: <div>ModalFallback</div>,
    });
    try {
      render(<ModalLauncher />);
    } catch (error) {
      expect((error as unknown as { message: string }).message).toBe(
        'ModalLauncher: Modal object should have "name" property',
      );
    }
  });

  it('render with another modal window', async () => {
    const closeModal = jest.fn();
    const onCloseModal = jest.fn();

    (useModalLauncherContext as jest.Mock).mockReturnValue({
      modals: [{ name: 'c', onCloseModal }],
      modalComponents: {
        a: <div>a-test</div>,
      },
      closeModal,
      ModalFallback: <div>ModalFallback</div>,
    });

    const { container } = render(<ModalLauncher />);

    expect(container.innerHTML).toBe('');
  });

  it('render with modal window', async () => {
    const closeModal = jest.fn();
    const onCloseModal = jest.fn();

    (useModalLauncherContext as jest.Mock).mockReturnValue({
      modals: [{ name: 'a', onCloseModal }],
      modalComponents: {
        a: () => <div>a-test</div>,
        b: () => <div>b-test</div>,
      },
      closeModal,
      ModalFallback: <div>ModalFallback</div>,
    });

    const { rerender } = render(<ModalLauncher />);

    expect(screen.getByText(/a-test/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(closeModal).toBeCalled();

    (useModalLauncherContext as jest.Mock).mockReturnValue({
      modals: [{ name: 'b', onCloseModal }],
      modalComponents: {
        a: () => <div>a-test</div>,
        b: () => <div>b-test</div>,
      },
      closeModal,
      ModalFallback: null,
    });
    rerender(<ModalLauncher />);
    expect(screen.getByText(/b-test/)).toBeInTheDocument();
  });
});
