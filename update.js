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
var db = firebase.firestore()

const txtname = document.getElementById('name');
const txtdescription = document.getElementById('description');
const button = document.getElementById('submit');
const txtimage = document.getElementById('image');
const txtprogress = document.getElementById('progress');
const txtsalary =document.getElementById('salary');

var user = firebase.auth().currentUser;

button.addEventListener('click',(e)=>{
    const name = txtname.value;
    const description = txtdescription.value;
    const image =txtimage.value;
    const progress = txtprogress.value;
    const salary = txtsalary.value;
    db.collection(`employee`).add({
        name: name,
        description: description,
        image: image,
        progress: progress,
        salary: salary
    }).then(function(){
        location.href = './main.html'
    }).catch(function(err){
        console.log(err)
    })
})