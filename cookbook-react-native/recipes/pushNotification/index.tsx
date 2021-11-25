import PushNotification, { Importance } from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { navigationRef } from '@components/AppNavigator/helper';
import { isIos } from '@constants/platform';

import {
  IsetupPushNotification,
  wLocalNotification,
  IlocalScheduleNotification
} from './intefaces';

const defaultChannel: string = 'your-channel-id';
const defaultMyChannel: string = 'My channel';
const defaultChannelDescription: string =
  'A channel to categorise your notifications';

export default function setupPushNotification({
  handleNotification,
  channelId = defaultChannel,
  channelName = defaultMyChannel
}: IsetupPushNotification) {
  PushNotification.configure({
    //Registration token
    onRegister: token => {
      if (token) {
        //save token to device
      }
    },
    //this function was called when press notification
    onNotification: notification => {
      //When notification is open we can add a callback
      if (handleNotification) handleNotification(notification);
      //if notification was started by Firebase or similar in console we can add additional data to Linking or navigate ex: route: Test
      if (notification.data.route)
        navigationRef.current.navigate(notification.data.route);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    // We can add a callback if notify has action property
    onAction: notification => {
      console.log('ACTION:', notification.action);
    },
    // if we have a Error on registration this function going be called. (Warning) Error returns allways when device is a simulator IOS
    onRegistrationError: err => {
      // View this error here
    },
    //only was neccessary to IOS
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    popInitialNotification: true,
    requestPermissions: isIos
  });
  //PushNotification require a channel to display the notification, channelId need to be exaclty with showLocalNotification({channelId})
  PushNotification.createChannel(
    {
      channelId, // (required) by default 'your-channel-id',
      channelName, // (required) by default 'My channel'
      channelDescription: defaultChannelDescription, // (optional) default: 'A channel to categorise your notifications'.
      vibrate: true // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
  return PushNotification;
}
export const showLocalNotification = ({
  message,
  title,
  subText,
  channelId = defaultChannel,
  soundName,
  bigLargeIconUrl,
  largeIconUrl,
  smallIcon,
  color,
  id = defaultChannel
}: wLocalNotification) => {
  if (isIos) {
    PushNotificationIOS.addNotificationRequest({
      id,
      title,
      body: message
    });
  } else {
    PushNotification.localNotification({
      message,
      title,
      subText,
      channelId,
      soundName,
      bigLargeIconUrl,
      smallIcon,
      largeIconUrl,
      color
    });
  }
};

const defaultDate: Date = new Date(Date.now() + 5 * 1000);
export const scheduleNotification = ({
  message,
  title,
  subText,
  channelId = defaultChannel,
  soundName,
  bigLargeIconUrl,
  largeIconUrl,
  largeIcon,
  bigLargeIcon,
  smallIcon,
  color,
  bigText,
  fireDate = defaultDate,
  date = defaultDate, //After 5 seconds by default
  id = defaultChannel
}: IlocalScheduleNotification) => {
  isIos
    ? PushNotificationIOS.addNotificationRequest({
        id,
        title,
        body: message,
        fireDate,
        sound: soundName,
        subtitle: subText
      })
    : PushNotification.localNotificationSchedule({
        channelId,
        title,
        message,
        date,
        color,
        smallIcon,
        bigText,
        largeIcon,
        bigLargeIcon,
        largeIconUrl,
        bigLargeIconUrl,
        soundName,
        subText
      });
};
export const cancelNotification = () => {
  isIos
    ? PushNotificationIOS.removeAllDeliveredNotifications()
    : PushNotification.cancelAllLocalNotifications();
};
