var config = {
    apiKey: "apiKey",
    authDomain: "https://project-xy-a-z.vercel.app",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://lustrous-aleph-307306-default-rtdb.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
const dbOject = database.child('object');
dbOject.on('value', snap => console.log(snap, snap.val()));