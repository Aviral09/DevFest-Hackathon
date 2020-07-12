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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const button1 = document.getElementById('logout')

button1.addEventListener('click', e=>{
    firebase.auth().signOut().then(function() {
        window.location = './index.html';
      }).catch(function(error) {
        console.log(error)
      });
});