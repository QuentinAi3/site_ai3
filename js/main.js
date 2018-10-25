$(document).ready(function(){


	$(".rond").click( function() {

	$('.back-cover').show("fast");
	});

	$('.rond-open').on('click touch',function(){
		$('.back-cover').hide("fast");
	});
	$('.rond-open').on('click touch',function(){
		$('.cache').hide("fast");
	});

      
    $('.btnpolitique').on('click touch',function(){
      $('.job').hide("fast");
      $('.politique-rh').show("fast");
    });
	$('.btnoffre').on('click touch',function(){
      $('.politique-rh').hide("fast");
      $('.job').show("fast");
    });


		

/** ANIME POSTES **/

	
	$(".postes").on('click touch',function(){
  var columns_container = $(".dynamic-columns");
  if (!columns_container.hasClass("expanded")) {
    $(".dynamic-columns .liste-postes").removeClass("col-md-9");
    $(".dynamic-columns .liste-postes").addClass("col-md-3");
	 $(this).css( "background-color", "#e33C2C");
	 $(this).find('p,span').css("color", "#fafafa");
	 
	  
	 /** APPARITION DESC POSTE **/ 
	$(".desc-postes").removeClass("d-none");
    $(".desc-postes").addClass("d-inline-block");

    columns_container.toggleClass("expanded");
  }
  else {
    $(".dynamic-columns .liste-postes").removeClass("col-md-3");
    $(".dynamic-columns .liste-postes").addClass("col-md-9");
	
	$(this).css( "background-color", "#fafafa");
	$(this).find('p,span').attr("style", "");  
	
	
	  
	 /** APPARITION DESC POSTE **/ 
	$(".desc-postes").removeClass("d-inline-block");
    $(".desc-postes").addClass("d-none");

    columns_container.toggleClass("expanded");
  }
});
	
	$(".postes").on('click touch',function(){
  var postes = $(".liste-postes");
  if (postes.hasClass("active-postes")) {
  }
  else {
  }
		
});

	 /** CONTACT **/ 
var lastShown;
$('.agences').on('click','li', function(){
  var index = $(this).index();
    if(lastShown)
        lastShown.hide('fast');
    lastShown = $('.gmap iframe:eq('+index+')')
    lastShown.show('fast');
});
	
var adresse;
$('.agences').on('click','li', function(){
  var index = $(this).index();
    if(adresse)
        adresse.hide('fast');
    adresse = $('.coordonnees li:eq('+index+')')
    adresse.show('fast');
});
});

