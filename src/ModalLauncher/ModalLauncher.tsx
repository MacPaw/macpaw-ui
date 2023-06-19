import React, { LazyExoticComponent, Suspense } from 'react';
import isEmpty from 'lodash.isempty';
import Dialog from '../Dialog/Dialog';
import { Maybe } from '../types';
import { useModalLauncherContext } from './ModalLauncherContext';
import { ModalItem } from './types';

type ModalBodyComponent =
  | Maybe<React.ComponentType<ObjectLiteral>>
  | LazyExoticComponent<React.ComponentType<ObjectLiteral>>;

const ModalLauncher = () => {
  const { modals, modalComponents, closeModal, ModalFallback } = useModalLauncherContext();

  return (
    <>
      {!isEmpty(modals) &&
        modals.map((modal: ModalItem) => {
          if (!modal.name) {
            throw new Error('ModalLauncher: Modal object should have "name" property');
          }

          const ModalBodyComponent = modalComponents?.[
            modal.name as keyof typeof modalComponents
          ] as ModalBodyComponent;

          const handleClose = () => {
            if (modal?.onCloseModal) modal?.onCloseModal();

            closeModal(modal.name!);
          };

          if (!ModalBodyComponent) return null;

          return (
            <Dialog
              isOpen
              key={modal.name}
              onRequestClose={handleClose}
              style={modal?.style}
              className={modal?.className}
            >
              <Suspense fallback={ModalFallback ? <ModalFallback /> : ''}>
                <ModalBodyComponent {...modal.props} />
              </Suspense>
            </Dialog>
          );
        })}
    </>
  );
};

export default ModalLauncher;
