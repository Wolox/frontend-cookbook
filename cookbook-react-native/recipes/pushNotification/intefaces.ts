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

export interface wLocalNotification extends PushNotificationObject {
  id?: string;
}

export interface IlocalScheduleNotification
  extends PushNotificationScheduleObject {
  id?: string;
  fireDate?: Date;
}
