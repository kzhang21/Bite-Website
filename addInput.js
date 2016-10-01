//take input from user input, save to..?
$(document).ready(function(){
	//when the Add Filed button is clicked
	$("#add").click(function (e) {
	});

	$("body").on("click", ".add", function (e) 
	{
		//look up input value @UI

		//get request 
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


