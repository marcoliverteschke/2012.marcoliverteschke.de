$(document).ready(function(){
	$('[role="navigation"] a, a.goto').click(function(e){
		var anchor = $(this).attr('href').substr(1);
		$('body').animate({scrollTop: $('[name=' + anchor + ']').offset().top}, 1000);
		return false;
	});
});