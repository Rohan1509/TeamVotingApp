import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCL-iA8WQ6WRsnAGajguurDxiKppJMCFuE",
        authDomain: "teamvotingapp-134d7.firebaseapp.com",
        databaseURL: "https://teamvotingapp-134d7-default-rtdb.firebaseio.com",
        projectId: "teamvotingapp-134d7",
        storageBucket: "teamvotingapp-134d7.appspot.com",
        messagingSenderId: "1087999387948",
        appId: "1:1087999387948:web:2920e07c826f3eb3de6489"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();