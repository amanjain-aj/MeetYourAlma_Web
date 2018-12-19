function LogIn() {
	var email_login = document.getElementById('email_login').value;
	var password_login = document.getElementById('password_login').value;
	var designation = document.getElementById('designation').value;
	firebase.auth().signInWithEmailAndPassword(email_login, password_login)   
	.then(function(user) {
       // Success 
           // User is signed in.
           console.log("signed in");
           var userId = firebase.auth().currentUser.uid;
           console.log(userId);
           document.querySelector('.alert1').style.display = 'block';
       });
	//To display alert after submission
      
     
     //To make alert display for 3 milliseconds
       
          
     
     //To reset the form after submission
       document.getElementById('login-form').reset();
}
 
// function SignUp() {

// 	var email = document.getElementById('email').value;
// 	var password = document.getElementById('password').value;
// 	var regd = document.getElementById('regd').value;
// 	var name = document.getElementById('name').value;
// 	console.log(email);
// 	firebase.auth().createUserWithEmailAndPassword(email, password)
// 	.then(function(user) {
// 		var userId = firebase.auth().currentUser.uid;
// 		console.log(userId);
		
// 	}).catch(function(error) {
//   	// Handle Errors here.
//   	var errorCode = error.code;
//   	var errorMessage = error.message;
//   // ...
// 	});
// }