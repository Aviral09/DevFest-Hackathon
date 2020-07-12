var firebaseConfig = {
    apiKey: "AIzaSyDiAD9-E0JkSKt3BD5y5Gpj7OP5Cz1ZSbc",
    authDomain: "officemanagement-3196a.firebaseapp.com",
    databaseURL: "https://officemanagement-3196a.firebaseio.com",
    projectId: "officemanagement-3196a",
    storageBucket: "officemanagement-3196a.appspot.com",
    messagingSenderId: "810522578256",
    appId: "1:810522578256:web:6a05bc912515494b26f055",
    measurementId: "G-ELCBHR461S"
  };
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, employees

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
}

var db = firebase.firestore()

db.collection('employee').get().then(function(doc) {
    if (doc.exists) {
        [...employees, doc.data()]
        //utilize this employees to get data from users
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


