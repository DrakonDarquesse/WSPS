import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCipWEdUPKCFYAe0cqjwbK5x3Bd5RU0H0s",
  authDomain: "my-fyp-40911.firebaseapp.com",
  projectId: "my-fyp-40911",
  storageBucket: "my-fyp-40911.appspot.com",
  messagingSenderId: "1026987205210",
  appId: "1:1026987205210:web:303fa3a6e7f65c6ffeae63",
  measurementId: "G-GGR152T0SS"
};

const app = initializeApp(firebaseConfig);

export { app }
