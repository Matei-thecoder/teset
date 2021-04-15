


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBA36KC0b2ZMRIpFcXDk0wS3nGe3jVJgd4",
    authDomain: "teset-61ccf.firebaseapp.com",
    projectId: "teset-61ccf",
    storageBucket: "teset-61ccf.appspot.com",
    messagingSenderId: "623628583798",
    appId: "1:623628583798:web:99bb4a7bf1df521fa0b057"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      window.location = 'home.html';


      alert ("signed up");
  }
  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    window.location = 'home.html';

    promise.catch(e => alert(e.message));


  }
  function signOut(){
      auth.signOut();
      window.location='index.html';
      alert("signed out");

  }

  auth.onAuthStateChanged(function(user){
        if(user){
                var email = user.email;
                alert("Active User "+email);

        }
       else{
                alert("No active user")
       }

  });