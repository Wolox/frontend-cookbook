import {
  PushNotificationObject,
  PushNotificationScheduleObject,
  ReceivedNotification
} from 'react-native-push-notification';

export interface IsetupPushNotification {
  handleNotification?: (
    notification: Omit<ReceivedNotification, 'userInfo'>
  ) => void;
  channelId?: string;
  channelName?: string;
  channelDescription?: string;
}

export interface IlocalNotification extends PushNotificationObject {
  id?: string;
}

export interface WLocalScheduleNotification
  extends PushNotificationScheduleObject {
  id?: string;
  fireDate?: Date;
}
