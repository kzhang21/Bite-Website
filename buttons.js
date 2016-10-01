$(document).ready(function() {
	$.ajax({
		url: "/abc"
	////if successful ajax request
	}).success(function(data) {

}

	}).error(function(){
		console.log('ERROR');
	})
})