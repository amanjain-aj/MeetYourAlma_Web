function LogIn() {
	var email_login = document.getElementById('email').value;
	var password_login = document.getElementById('password').value;

	firebase.auth().signInWithEmailAndPassword(email, password)   
	.then(function(user) {
       // Success 
           // User is signed in.
           console.log("signed in");
           var userId = firebase.auth().currentUser.uid;
           console.log(userId);
       });
}
function SignUp() {

	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var regd = document.getElementById('regd').value;
	var name = document.getElementById('name').value;
	console.log(email);
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(user) {
		var userId = firebase.auth().currentUser.uid;
		console.log(userId);
		
	}).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  // ...
	});
   

}