//add data to firestore where db = firebase.firestore()

db.collection("users").add({
    first: "Mario",
    last: "Luigi",
    dob: "12/12/2012",
    salary: 1200000,
    tasks: [{
        name: "TAsk 1",
        completed: true,
        remarks: "complted well"
    },
    {
        name: "Task 2",
        completed: false,
        remarks: ""
    }]    
})
.then(function(doc) {
    console.log("Document written with ID: ", doc.id);
})
.catch(function(err) {
    console.error(err);
});

//deleting a user

db.collection("users").doc("user1").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error(error);
});

//deleting a feild, say dob of user

db.collection("users").doc("user1").update({
    dob : firebase.firestore.FieldValue.delete()
})

//updating a field

db.collection("users").doc("user1").update({
    first: "New",
    last: "Name",
    dob: "13/12/2012",
    salary: 1250000,
    tasks: [{
        name: "Task 1",
        completed: true,
        remarks: "completed well"
    },
    {
        name: "Task 2",
        completed: true,
        remarks: "satisfactory"
    }] 
    //individual updates are also available
})


