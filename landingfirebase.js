 // Import the functions you need from the SDKs you need


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCqpme0ulRw4eHc6LSW64GKlXhkPKKuRH4",
   authDomain: "notii-8e38a.firebaseapp.com",
   projectId: "notii-8e38a",
   databaseURL: "https://notii-8e38a-default-rtdb.asia-southeast1.firebasedatabase.app",
   storageBucket: "notii-8e38a.appspot.com",
   messagingSenderId: "909617956814",
   appId: "1:909617956814:web:f9c4440ee70f907b8d0d9f",
   measurementId: "G-B61BLH0DMK"
 };


    
 if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
    const database = firebase.database();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  
  
  

  
  function saveUserData(phoneNumber, latitude, longitude) {
    const userDataRef = database.ref('user_data').push();
    return userDataRef.set({
        phoneNumber: phoneNumber,
        location: {
            latitude: latitude,
            longitude: longitude
        }
    })
    .then(() => {
        console.log("User data saved successfully.");
    })
    .catch((error) => {
        console.error("Error saving user data:", error);
    });
}

function saveUserNumber(phoneNumber) {
    const userDataRef = database.ref('user_number').push();
    return userDataRef.set({
        phoneNumber: phoneNumber
        
    })
    .then(() => {
        console.log("User data saved successfully.");
    })
    .catch((error) => {
        console.error("Error saving user data:", error);
    });
}


  
