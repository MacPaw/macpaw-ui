export interface ModalItem {
  name: string;
  props?: ObjectLiteral;
  style?: ObjectLiteral;
  className?: string;
  onCloseModal?: () => void;
}
