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
	
      
     
    
       
          
     
       document.getElementById('login-form').reset();
}
 
