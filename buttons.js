$(document).ready(function() {
	$.ajax({
		url: "/abc"
	////if there is something ready...
	}).success(function(data) {
		console.log(data);


	}).error(function(){
		console.log('error');
	})
})