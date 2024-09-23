
$(document).ready(function() {	
	$(".Heinz").click(function(){
		$(this).children().slideToggle("slow");
	});
	
	$(".Gundam").click(function(){
		$(this).next().slideToggle("slow");
	});
	
});