export interface ToastAction {
  message: string;
  type: string;
}

export interface ToastMessageState {
  active: boolean;
  message: string;
  type: string;
}
