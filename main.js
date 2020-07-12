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
var employees = []



db.collection("employee").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        employees.push(doc.data())
        console.log(employees)
        document.getElementById('card-container').innerHTML += `
        <div class="card " style="width: 18rem; ">
            <img class="card-img-top " src="./images/office.jpg" alt="Card image cap ">
            <div class="card-body ">
                <h5 class="card-title ">${doc.data().name}</h5>
                <p class="card-text ">Progress: ${doc.data().progress}%</p>
                <a href="# " class="btn btn-primary " data-toggle="modal" data-target="#exampleModalLong">Go somewhere</a>
            </div>
        </div>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        `
    });
});

$('#exampleModalLong').modal('toggle')