import { ImageSourcePropType } from "react-native";

export enum DialogType {
  GENERAL_SUCCESS = 'GENERAL_SUCCESS',
  GENERAL_ERROR = 'GENERAL_ERROR'
}

export interface DialogInfo {
  icon?: ImageSourcePropType;
  primaryButtonText: string;
  secondaryButtonText?: string;
  subtitle?: string;
  title: string;
}
