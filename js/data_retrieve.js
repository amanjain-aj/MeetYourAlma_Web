// Get a reference to the database service
 
 var database = firebase.database();
 var ref = database.ref('alumni');
 ref.on('value',getdata);
 function getdata(data) {
 	
    var alumni = data.val();
    var keys = Object.keys(alumni);
    
    var html = "";
    
    for (var i = 0 ; i < keys.length; i++) {
            
       var k = keys[i];
       // var batch = alumni[k].batch;
       // var branch = alumni[k].branch;
       // var email = alumni[k].email;
       // var name = alumni[k].name;
        
       // var regd = alumni[k].regd; 
       // var xyz = alumni[k];
       function output() {

       	  var password = alumni[k].password;
       	  return password;
       }
       function givestatus() {
       		var status = alumni[k].status;
       		return status;
       }
     //   var tr = " ";
     //   tr = tr + "<tr>";    
 	   // tr = tr + "<td >" +  alumni[k].name + "</td>";
     //   tr = tr + "<td >" +  alumni[k].email + "</td>";
     //   tr = tr + "<td >" + 	alumni[k].branch + "</td>"; 
     //   tr = tr + "<td >" +  alumni[k].batch + "</td>";
     //   tr = tr + "<td >" + alumni[k].regd + "</td>";
     //   tr = tr + "<td >" + alumni[k].status + "</td>";              
     //   tr = tr + "<td><input value='Verify' type='button' class='theButton' id='ma' onclick='test()'></td>";
     //   tr = tr + "</tr>";
	

    html = html + "<tr>"+ 
            "<td>"+ (i+1) + "</td>"+
            "<td>"+ alumni[k].name + "</td>"+
            "<td>"+ alumni[k].email + "</td>"+
            "<td>"+ alumni[k].branch + "</td>"+
            "<td>"+ alumni[k].batch + "</td>"+
            "<td>"+ alumni[k].regd + "</td>"+
            // "<td>"+ alumni[k].status + "</td>"+
            "<td><input value='Verify' type='button' class='theButton'  id='ma' ></td>"+
            "</tr>";  	
            var x = $("#tableHtml").html(html);		
            console.log(x);
}

		
$('body').on('click', 'input.theButton', function(e) {
	var txt;
	e.preventDefault();
	txt = $(this).parent().prev().prev().prev().prev().text();
	password = output();
	
	
	     var email = txt;
	     var password = password;
		 firebase.auth().createUserWithEmailAndPassword(email, password)
		 .then(function(e){

		 	var userId = firebase.auth().currentUser.uid;
            console.log(userId);
            if(userId!=''){
            	window.alert('User Verified');
            	var user = firebase.auth().currentUser;

				user.sendEmailVerification().then(function() {
				  // Email sent.
				}).catch(function(error) {
				  // An error happened.
				});
            }


		 }).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});


})
	
}
