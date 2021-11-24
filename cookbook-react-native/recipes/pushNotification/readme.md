# Cookbook React Native Bootstrap: pushNotification Recipe

<p align="center">
  <img width="350" height="700" src="https://i.ibb.co/Ltxn91Y/untitled.gif" alt="untitled" border="0">

  <img src="https://i.ibb.co/5kW8jBJ/Simulator-Screen-Recording-i-Phone-11-2021-11-24-at-16-36-40.gif" alt="Simulator-Screen-Recording-i-Phone-11-2021-11-24-at-16-36-40" border="0">
</p>

## Installation

`yarn add react-native-push-notification @types/react-native-push-notification @react-native-community/push-notification-ios`

or

npm install

`npm install react-native-push-notification @types/react-native-push-notification @react-native-community/push-notification-ios`

If you want to add this recipe to a project that wasn't created with our [bootstrap](https://github.com/Wolox/wolmo-bootstrap-react-native), you will need to add the following [aliases](https://github.com/tleunen/babel-plugin-module-resolver#readme) and files under them to your project:

## Configuration

#### Android

in `android/build.gradle`

```ts
   ext {
        googlePlayServicesVersion = "+" // Your play services version, default: "+"
        firebaseMessagingVersion = "+" //  Your Firebase version, default: "21.1.0"
        buildToolsVersion = "28.0.3"
        minSdkVersion = 19
        compileSdkVersion = 28
        targetSdkVersion = 28
        supportLibVersion = "23.1.1" // default: 23.1.1
    }
```

In `android/app/src/main/AndroidManifest.xml`

```ts
 <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
<!-- ADDED with this meta-data we can modify the icon in notifications, remember change resource name and apply the corrects sizes  -->
    <meta-data  android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@mipmap/ic_notification" />


<!-- Change the value to true to enable pop-up for in foreground on receiving remote notifications (for prevent duplicating while showing local notifications set this to false) -->
        <meta-data  android:name="com.dieam.reactnativepushnotification.notification_foreground"
                    android:value="false"/>
        <!-- Change the resource name to your App's accent color - or any other color you want -->
        <meta-data  android:name="com.dieam.reactnativepushnotification.notification_color"
                    android:resource="@color/white"/> <!-- or @android:color/{name} to use a standard color -->

        <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationActions" />
        <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationPublisher" />
        <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationBootEventReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
                <action android:name="android.intent.action.QUICKBOOT_POWERON" />
                <action android:name="com.htc.intent.action.QUICKBOOT_POWERON"/>
            </intent-filter>
        </receiver>

        <service
            android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>

```

In `android/app/src/main/res/values/colors.xml` (Create the file if it doesn't exist) for the notification_color

```ts
<resources>
  <color name="white">#FFF</color>
</resources>
```

If you need remote Notifications:

`In android/build.gradle`

```ts
buildscript {
    ...
    repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository
    }
    dependencies {
        ...
        classpath 'com.google.gms:google-services:4.3.10'
        ...
    }
}
allprojects {
  ...
  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository
    ...
  }
}
```

In `android/app/build.gradle`

```ts
apply plugin: 'com.google.gms.google-services'

dependencies{
  implementation platform('com.google.firebase:firebase-bom:29.0.0')
}
```

Download the file `google-service.json` to Firebase console and put in `android/app`, verify the package_name need to be equal

#### IOS

`npx pod-install` </br>
Open proyect in xCode and go to "Signing & Capabilities" tab. Add a 2 new Capabilities using "+ Capability" button:

- Background Mode capability and tick Remote Notifications.
- Push Notifications capability

Modify ios/_(nameproyect)_/AppDelegate.h :

```c
#import <UserNotifications/UNUserNotificationCenter.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>
```

Update AppDelegate.m :

```c
#import <UserNotifications/UserNotifications.h>
#import <RNCPushNotificationIOS.h>
```

Then add a following lines:

```c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  ...
  // Define UNUserNotificationCenter
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self;

  return YES;
}

//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  completionHandler(UNNotificationPresentationOptionSound | UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionBadge);
}

// Required for the register event.
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
 [RNCPushNotificationIOS didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}
// Required for the notification event. You must call the completion handler after handling the remote notification.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  [RNCPushNotificationIOS didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}
// Required for the registrationError event.
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
 [RNCPushNotificationIOS didFailToRegisterForRemoteNotificationsWithError:error];
}
// Required for localNotification event
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)(void))completionHandler
{
  [RNCPushNotificationIOS didReceiveNotificationResponse:response];
}

```

If you need Remote Notifications:

- Download `GoogleServices-info.plist` to firebase then open proyect with xCode and go to `Your React Native Project -> ios -> projectName.xcodepro` next, select add Files to "project" and select your GoogleServices-info.plist

Now we have to add Firebase Analytics on our POD file in iOS project:

Go to podfile and add:
`pod 'Firebase/Analytics'`
`pod 'Firebase/Messaging'`<br/>
Save the file and run `pod install`

In AppDelegate.m add:
#import <Firebase.h>

```ts
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
...
[FIRApp configure];
}
```

### Potencial errors IOS

In podfile
The library doesn't support platform <9, so if our proyect it's lower than, we need changed to some like `platform :ios, '10.0'` </br>
Other changes we may need:

```ruby
  versions['Flipper'] ||= '~> 0.80.0'
  versions['Flipper-Folly'] ||= '~> 2.5.0'
...

  add_flipper_pods!({ 'Flipper' => '0.80.0' })
  post_install do |installer|
    flipper_post_install(installer)
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '10.0'
      end
    end
   end
  end

```

If we have problems with simulator and close the app after install we can update the file: ios/(_yourProyectName_).xcodeproj/project.pbxproj :

```ts
...
		354FC076BB363F8276D468FA /* [CP] Embed Pods Frameworks */ = {
			isa = PBXShellScriptBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			inputPaths = (
				"${PODS_ROOT}/Target Support Files/Pods-CookbookReactNative/Pods-CookbookReactNative-frameworks.sh",
				"${PODS_XCFRAMEWORKS_BUILD_DIR}/OpenSSL-Universal/OpenSSL.framework/OpenSSL",
			);
			name = "[CP] Embed Pods Frameworks";
			outputPaths = (
				"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/OpenSSL.framework",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-CookbookReactNative/Pods-CookbookReactNative-frameworks.sh\"\n";
			showEnvVarsInLog = 0;
		};
```

### Utils files

#### alias `@utils`

- [scalingUtils.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/utils/scalingUtils.ts)

### Constants files

#### alias `@constants`

- [colors.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/colors.ts)
- [fonts.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/config/fonts.ts)
- [platform.ts](https://github.com/Wolox/wolmo-bootstrap-react-native/blob/master/generators/app/templates/src/constants/platform.ts)

### Recipes

#### alias `@buttonsRecipes` and `@modalsRecipes` but it would be recommended to put them in `@components`instead

- [CustomOpacityButton](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/buttons/custom-opacity-button#readme)

- [CustomModal](https://github.com/Wolox/frontend-cookbook/master/cookbook-react-native/recipes/modals/custom-modal#readme)

## Usage

- Maybe it's more clean move the folder into services path

```ts
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import setupPushNotifications, {
  showLocalNotification,
  scheduleNotification,
  cancelNotification
} from '@recipes/pushNotification';

import {
  IlocalNotification,
  IsetupPushNotification
} from '@recipes/pushNotification/intefaces';

export default function Home() {
  const navigation = useNavigation();
  // we can write where redirect on open notification, or other callback if we needed
  const handleNotificationOpen = () => {
    navigation.navigate(Routes.Test);
  };
  //this function going be called when pressed button
  const handlePress = () => {
    //Data to show in notification
    //channelId: 'your-channel-id' is optional but remember both channel need to be exaclty
    const NOTIFICATION_DATA: IlocalNotification = {
      message: 'hello',
      title: 'this is the Title!',
      subText: 'Subtext on notification'
    };
    showLocalNotification(NOTIFICATION_DATA);
    //params to setupPushNotifications
    /*
    channelId:string
    channelName:string
    handleNotification:Omit<ReceivedNotification, 'userInfo'>
  ) => void;
    channelDescription:string
    */
    const handleCallBack: IsetupPushNotification = {
      handleNotification: handleNotificationOpen
    };
    setupPushNotifications(handleCallBack);
  };
  useEffect(() => {
    //SetupPushNotifications need to be initialized when render the component and overwrite if we want change callback in specific component, ex: redirect to other screens or similar
    setupPushNotifications({});
  }, []);
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View>
          <Text>Get my notifications now!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
```
