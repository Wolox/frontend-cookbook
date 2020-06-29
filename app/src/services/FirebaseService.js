import firebase from 'firebase/app'

import app from 'config/firebase';

export const updateDownloadsCounter = (tech, component) => {
  const componentDownloads = app.firestore().collection('downloads').doc('techs').collection(tech).doc(component || 'no-name');
  componentDownloads.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true });
}
