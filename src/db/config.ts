import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "next-crud-cod3r-d3d4d.appspot.com",
  messagingSenderId: "88034556853",
  appId: "1:88034556853:web:9c2f92d87ba9fe976237fc"
};

const app = initializeApp(firebaseConfig);
export default app