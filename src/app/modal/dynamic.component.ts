import { ModalButtonInterface, ModalContextInterface } from './modal.interface';
import { defaultButton, defaultButtonGroup } from './modal-buttons';

export abstract class DynamicComponent {
  context: ModalContextInterface;
  defaultButton: ModalButtonInterface = defaultButton;
  defaultButtonGroup: ModalButtonInterface[] = defaultButtonGroup;
}
