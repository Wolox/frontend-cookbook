import * as firebase from 'firebase/app';
import 'firebase/firestore';

import app from 'config/firebase';

export const updateDownloadsCounter = (tech, component) => {
  if (app) {
    const componentDownloads = app
      .firestore()
      .collection('downloads')
      .doc('techs')
      .collection(tech)
      .doc(component || 'no-name');
    componentDownloads.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true });
  }
};
