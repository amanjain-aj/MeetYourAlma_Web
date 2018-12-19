// Get a reference to the database service
 
 var database = firebase.database();
 var ref = database.ref('alumni');
 ref.on('value',getdata);
 function getdata(data) {
 	
    var alumni = data.val();
    var keys = Object.keys(alumni);
    
    
    for (var i = 0 ; i < keys.length; i++) {
            
       var k = keys[i];
       // var batch = alumni[k].batch;
       // var branch = alumni[k].branch;
       // var email = alumni[k].email;
       // var name = alumni[k].name;
       // var password = alumni[k].password;
       // var regd = alumni[k].regd; 
       // var xyz = alumni[k];

	
	var html = "";

    html +="<tr>"+
            "<td>"+ (i+1) + "</td>"+
            "<td>"+ alumni[k].name + "</td>"+
            "<td>"+ alumni[k].email + "</td>"+
            "<td>"+ alumni[k].branch + "</td>"+
            "<td>"+ alumni[k].batch + "</td>"+
            "<td>"+ alumni[k].regd + "</td>"+
            // "<td>"+ alumni[k].password + "</td>"+
            "<td><button data-arrayIndex='"+ i +"'>Edit</button><button data-arrayIndex='"+ i +"'>Verify</button></td>"+"</tr>";
}

$("#tableHtml").html(html);		
		// for (var j = 0; j < col.length; j++) 
		// 	{
  //               var tabCell = tr.insertCell(-1);
  //               tabCell.innerHTML = alumni[i][col[j]];
  //           }
	
}