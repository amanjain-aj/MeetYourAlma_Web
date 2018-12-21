// Get a reference to the database service
 var database = firebase.database();
 var messagesRef = database.ref('alumni');




// //listen to submit event
//  document.getElementById('contact').addEventListener('submit',submitForm);
 
//get form values
 function senduserdata() {
     
   
       var  name = getInputVal('name');
       var  email = getInputVal('email');
       var  role = getInputVal('role');
       var  regd = getInputVal('regd');
       var batch = getInputVal('batch');
       var branch = getInputVal('branch');
       var password = getInputVal('password');
       if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
           
      
       saveMessage(name,email,password,regd,batch,branch,role,status);
        
     //To display alert after submission
       document.querySelector('.alert').style.display = 'block';
     
     //To make alert display for 3 milliseconds
       setTimeout(function(){
           document.querySelector('.alert').style.display = 'none';
            },3000);
     
     //To reset the form after submission
        document.getElementById('register-form').reset();


 	  }
		//function to get values
		  function getInputVal(id){
		     
		      return document.getElementById(id).value;
		  }
		  
   
//Function to save values to firebase database
  function saveMessage(name,email,password,regd,batch,branch,role,status) {
      
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        role: role,
        regd: regd,
        batch: batch,
        branch: branch,
        password: password,
        status: 'unverified'
        });
      
}
 

