// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.vite_pass);
const firebaseConfig = {
  apiKey: import.meta.env.viteApiKey,
  authDomain: import.meta.env.viteAuthDomain,
  projectId: import.meta.env.viteProjectId,
  storageBucket: import.meta.env.viteStorageBucket,
  messagingSenderId: import.meta.env.viteMessagingSenderId,
  appId: import.meta.env.viteAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
