import React, { ComponentType, createContext, PropsWithChildren, useState, useCallback, useContext } from 'react';
import unionWith from 'lodash.unionwith';
import { ModalItem } from './types';

interface ModalLauncherContextValue {
  modals: ModalItem[];
  modalComponents: Record<string, ComponentType>;
  openModal: (modal: ModalItem) => void;
  closeModal: (modalName: string) => void;
  closeAllModals: () => void;
  ModalFallback: ComponentType | null;
}

const initialValue: ModalLauncherContextValue = {
  modals: [],
  modalComponents: {},
  openModal: () => {},
  closeModal: () => {},
  closeAllModals: () => {},
  ModalFallback: null,
};

const ModalLauncherContext = createContext<ModalLauncherContextValue>(initialValue);

interface ModalLauncherProviderProps {
  modalComponents: Record<string, ComponentType>;
  ModalFallback?: ComponentType | null;
}

export const ModalLauncherProvider: React.FC<PropsWithChildren<ModalLauncherProviderProps>> = ({
  children,
  modalComponents,
  ModalFallback = null,
}) => {
  const [modals, setModals] = useState<ModalItem[]>([]);

  const openModal = useCallback(
    (newModal: ModalItem): void => {
      const uniqueModals = unionWith(modals, [newModal], (a, b) => a.name === b.name);

      setModals(uniqueModals);
    },
    [modals],
  );

  const closeModal = useCallback(
    (modalName: string): void => {
      const filteredModals = modals.filter((modal) => modal.name !== modalName);

      setModals(filteredModals);
    },
    [modals],
  );

  const closeAllModals = useCallback(() => setModals([]), []);

  return (
    <ModalLauncherContext.Provider
      value={{
        modals,
        modalComponents,
        openModal,
        closeModal,
        closeAllModals,
        ModalFallback,
      }}
    >
      {children}
    </ModalLauncherContext.Provider>
  );
};

export const useModalLauncherContext = (): ModalLauncherContextValue => {
  const context = useContext(ModalLauncherContext);

  return context;
};

export const useModals = (): Omit<ModalLauncherContextValue, 'modals' | 'modalComponents' | 'ModalFallback'> => {
  const { openModal, closeModal, closeAllModals } = useModalLauncherContext();

  return {
    openModal,
    closeModal,
    closeAllModals,
  };
};
