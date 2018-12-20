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
  		    	document.location.href = "alumni_db.html";
  		    }
		}, 500);
       });
	
      
     
    
       
          
     
       document.getElementById('login-form').reset();
}
 
