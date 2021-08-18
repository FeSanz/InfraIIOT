   var firebaseConfig = {
      apiKey: "AIzaSyDSaJQjVoC68qsMv36zikiyXST4_dyXGPA",
      authDomain: "i-iot-b1e3d.firebaseapp.com",
      projectId: "i-iot-b1e3d",
      storageBucket: "i-iot-b1e3d.appspot.com",
      messagingSenderId: "914861533746",
      appId: "1:914861533746:web:3db15ad941478bcb8b6a2b",
      measurementId: "G-W8VD8H258M"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const auth = firebase.auth();
    const fs = firebase.firestore();