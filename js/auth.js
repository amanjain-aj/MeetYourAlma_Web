function LogIn() {
	var email_login = document.getElementById('email_login').value;
	var password_login = document.getElementById('password_login').value;
	var designation = document.getElementById('designation').value;
  if (email_login.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password_login.length < 4) {
          alert('Please enter atleast a password of minimum length 6');
          return;
        }
        if (!(designation == 'student' || designation == 'alumni' || designation == 'admin'))
         {
          alert('Please Enter Proper Designation In LowerCase');
          return;
        }
	firebase.auth().signInWithEmailAndPassword(email_login, password_login)   
	.then(function(user) {
       // Success 
           // User is signed in.
           console.log("signed in");
           var userId = firebase.auth().currentUser.uid;
           console.log(userId);
            document.querySelector('.alert1').style.display = 'block';
            
           setTimeout(function(){
          
           },250);
           setTimeout(function(){
 			if(designation == 'admin') {
 				document.location.href = "admin_db.html";
 			}	   
  		    else if (designation == 'student') {
  		    	document.location.href = "student_db.html";
  		    }
  		    else{
  		    	document.location.href = "student_db.html";
  		    }
		}, 500);
       }).catch(function(error){

        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }

       });
	
       document.getElementById('login-form').reset();
       firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        // document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
        
           document.getElementById("user-div").style.display = 'block';
          
          var user = firebase.auth().currentUser;

          if(user!=null) {
            var email_Id = user.email;
            console.log(email_Id);
            document.getElementById("user-para").innerHTML = "Welcome User: " + email_Id;
          }
         
          else {

         
          // [START_EXCLUDE]
          document.getElementById("user-div").style.display = 'none';
        
          
          // if (!emailVerified) {
          //   document.getElementById('quickstart-verify-email').disabled = false;
          // }
          // [END_EXCLUDE]
        } 
      }
      });

}
 
function sendPasswordReset() {

    var email = document.getElementById('email_password_reset').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
}
     
      // Listening for auth state changes.
      // [START authstatelistener]
      
      // [END authstatelistener]
      /*document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);*/
      // document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
      // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);

 
    function LogOut() {
       if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        document.location.href = "index.html";
        // [END signout]
    }
  }
