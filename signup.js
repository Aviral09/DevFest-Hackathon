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
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

const db = firebase.firestore();

const txtemail = document.getElementById('txtemail');
const txtpassword = document.getElementById('txtpassword');
const button = document.getElementById('submit');
const txtname = document.getElementById('name');
const txtphone = document.getElementById('phone');
const txty =document.getElementById('again-password');



button.addEventListener('click', e=>{
  if(txty.value===txtpassword.value)
  {  
    const email = txtemail.value;
    const password = txtpassword.value;
    const name = txtname.value;
    const phone = txtphone.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (err) {
     console.log(err)
     alert(err)
    }).then(db.collection("users").add({
      name: name,
      email: email,
      phone: phone   
  })
  .then(function(doc) {
      console.log("Document written with ID: ", doc.id);
  }).catch(function(err){
    console.log(err)
  }));



    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = './landing.html';
        }
      });
    }
    else
    {
      
        alert('ERROR Pls enter same password');
    
    }
    
});



    




