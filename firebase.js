const firebaseConfig = {
  apiKey: "AIzaSyA3T9soo2_auzAqJ_ZtEHDDUD0uEMUcdFA",
  authDomain: "sai-tech-fa515.firebaseapp.com",
  projectId: "sai-tech-fa515",
  storageBucket: "sai-tech-fa515.firebasestorage.app",
  messagingSenderId: "951329800871",
  appId: "1:951329800871:web:9a7f8b09f0d4228c5ad182",
  measurementId: "G-HYDN2DTNHZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ define auth here ONLY
window.auth = firebase.auth();
window.db = firebase.firestore();