$(document).ready(function(){


	$(".rond").click( function() {

	$('.back-cover').show("slow");
	});

	$('.rond-open').on('click touch',function(){
		$('.back-cover').hide("slow");
	});
	$('.rond-open').on('click touch',function(){
		$('.cache').hide("slow");
	});

      
    $('.btnpolitique').on('click touch',function(){
      $('.job').hide("slow");
      $('.politique-rh').show("slow");
    });
	$('.btnoffre').on('click touch',function(){
      $('.politique-rh').hide("slow");
      $('.job').show("slow");
    });

	
	
/** ANIME POSTES **/

	
	$(".postes").on('click touch',function(){
  var columns_container = $(".dynamic-columns");
  if (!columns_container.hasClass("expanded")) {
    $(".dynamic-columns .liste-postes").removeClass("col-md-9");
    $(".dynamic-columns .liste-postes").addClass("col-md-3");
	  
	 $(".desc-postes").removeClass("d-none");
    $(".desc-postes").addClass("d-inline-block");

    columns_container.toggleClass("expanded");
  }
  else {
    $(".dynamic-columns .liste-postes").removeClass("col-md-3");
    $(".dynamic-columns .liste-postes").addClass("col-md-9");
	
	  $(".desc-postes").removeClass("d-inline-block");
    $(".desc-postes").addClass("d-none");

    columns_container.toggleClass("expanded");
  }
});
	
});

