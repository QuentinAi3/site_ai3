$(document).ready(function(){

	$(".cache").hide();
	$(".rond").click( function() {
		$(".cache").hide();
		var c = $(this).attr('class').split(' ')[0]; //Get First Class
		$("#menu-open ."+c).fadeIn('slow').show();
		$('.back-cover').css('display',"block");
	});

	$('.back-cover, .btn-rond').on('click',function(){
		$('.back-cover').css('display','none');
	});
	$('.back-cover, .btn-rond').on('click',function(){
		$('.cache').hide();
	});
});

