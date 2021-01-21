// Changed from wildcard to default export in Firebase SDK 8.0.0
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  const firebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  };
  console.log({ firebaseOptions });
  // firebase.initializeApp(firebaseOptions);
}

export default firebase;
