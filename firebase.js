// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAk2hB67Df0Xcq2HvXJGcmht0QZTtLp5OQ",
    authDomain: "weeks-f9bd8.firebaseapp.com",
    databaseURL: "https://weeks-f9bd8.firebaseio.com",
    projectId: "weeks-f9bd8",
    storageBucket: "weeks-f9bd8.appspot.com",
    messagingSenderId: "870989957053",
    appId: "1:870989957053:web:2c37444d4b6cb721e074d4",
    measurementId: "G-849LEETYHW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var storage = firebase.storage();


function getFirebaseData(callback) {
    database.ref('/').on('value', function(snapshot) {
        const data = (snapshot.val() && snapshot.val()) || 'Anonymous';
        callback(null, data)
    });
};

function saveOnFirebase(weeks) {
    database.ref('/week')
    firebase.database().ref('weeks').set(weeks);
}

function storageBackupOnFirebase(json) {
    const filename = `${moment().format('DDMMYYYY_HH:mm:ss')}.json`;

    var storageRef = storage.ref().child(filename);
    storageRef.putString(JSON.stringify(json)).then(function(snapshot) {
        location.href="/project-52-2020/";
        alert("Yeah!! Ya queda una foto menos :D");
     });
}
