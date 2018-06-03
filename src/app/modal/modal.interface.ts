export interface ModalCommandInterface {
    type: 'success' | 'spinner' | 'error' | 'warning' | 'none';
    options?: ModalOptionsInterface;
}

export interface ModalOptionsInterface {
  title?: string;
  message?: string;
  handler?: Function;
  buttons?: ModalButtonInterface[];
}

export interface ModalContextInterface extends ModalOptionsInterface {
  close: Function;
}

export interface ModalButtonInterface {
  text: string;
  returns: any;
}
