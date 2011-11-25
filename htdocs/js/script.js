$(document).ready(function(){
	
	$('#mailto').click(function(){
		_gaq.push(['_trackPageview', '/mailto']);
	});
	
	$('[role="navigation"] a, a.goto').click(function(e){
		var anchor = $(this).attr('href').substr(1);
		_gaq.push(['_trackPageview', '/' + anchor]);
		if($('html').hasClass('no-touch'))
		{
			$('html,body').animate({scrollTop: $('[name=' + anchor + ']').offset().top}, 1000);
			return false;
		}
	});
	
	$(window).scroll(function(){
		adjust_banner();
	}).resize(function(){
		adjust_banner();
	});
	
});


function adjust_banner()
{
	if($('[role="banner"]').css('position') != 'fixed')
	{
		$('[role="banner"]').css('top', $(window).scrollTop());
	} else {
		$('[role="banner"]').css('top', 0);
	}
}