var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, employees

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
}

var db = firebase.firestore()

db.collections('users').doc(email.toString()).get().then(function(doc) {
    if (doc.exists) {
        employees = doc.data().employees
        //utilize this employees to get data from users
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


