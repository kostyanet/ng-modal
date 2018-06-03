import { ModalButtonInterface } from './modal.interface';

const defaultButton: ModalButtonInterface = {
  text: 'Close',
  returns: true
};

const defaultButtonGroup: ModalButtonInterface[] = [
  {
    text: 'Proceed',
    returns: true,
  }, {
    text: 'Cancel',
    returns: false
  }
];

export { defaultButton, defaultButtonGroup };
