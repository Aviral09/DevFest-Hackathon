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


var db = firebase.firestore()

db.collection("employee").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        document.getElementById('card-container').innerHTML += `
        <div class="card " style="width: 18rem; ">
            <img class="card-img-top " src=${doc.data().image} alt="Card image cap ">
            <div class="card-body ">
                <h5 class="card-title ">${doc.data().name}</h5>
                <p class="card-text ">Progress: ${doc.data().progress}%</p>
                <div id="accordion">
                    <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                        More Details
                        </a>
                    </div>
                    <div id="collapseOne" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                        Description: ${doc.data().description}<br>
                        Salary: ${doc.data().salary}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        `
    });
});


