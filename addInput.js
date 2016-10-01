//take input from user input, save to..?
$(document).ready(function(){
	//when the Add Filed button is clicked
	$("#add").click(function (e) {
	});

	$("body").on("click", ".add", function (e) 
	{
		//look up input value @UI 
		var ingredients = document.getElementById('add').value 

		//get request 
		$input = Input::all(); //getting all input for the request 

		//get whatever input is available

		//store in array
		var array = [ingredients];

		//parce html template 
		//put on page 
		console.log('ingredients');

		//& store in javascript to send in backend 
		$.ajax({
	    	url: "/urltoMyOwnSite.php",
	    	type: "POST",
	    	data: {myArray : array}
		});

		//get data back from backend, form in jsand
		//convert back into html to print out recipes they can use
		$.get(
	    "something.php",
	    {paramOne : 1, paramX : 'abc'},
	    function(data) {
	       alert('page content: ' + data);
	    }
	);
/*
			   <!-- the script code below submits your input by hiting enter rather than a button -->
	    <script type="text/javascript">
	    $(function(){
	      $("#field").keyup(function(event){
	  if(event.which == 13){
	    document.POST.submit();
	    }
	}); 
	</script> */

	});
});


