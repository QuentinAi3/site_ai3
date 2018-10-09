$(document).ready(function(){

	$(".cache").hide();
	$(".rond").click( function() {
		$(".cache").hide();
		var c = $(this).attr('class').split(' ')[0]; //Get First Class
	$('.back-cover').css('display',"block").fadeIn('slow').show();
	});

	$('.rond-open').on('click',function(){
		$('.back-cover').css('display','none');
	});
	$('.rond-open').on('click',function(){
		$('.cache').hide();
	});

});

