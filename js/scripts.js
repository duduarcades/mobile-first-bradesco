
$(document).ready(function(){
    
    /* INICIO BANNER SLIDE SLICK*/
	$('.carrousel').slick({ 
		autoplay: true,
		speed: 500,
		dots: true

	});
	/* FIM BANNER SLIDE SLICK*/


	/* INICIO MOBILE ACTION MENU */
	$('.mobile_action').on('click', function(){

		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.main_header_nav').animate({'right': '0'}, 300);
		} else {
			$(this).removeClass('active');
			$('.main_header_nav').animate({'right': '-100%'}, 300);
		}

	});


	$('.barraCategoria li').on('click', function(e){

		

		var item = $('.box_destaques[data-item="' + $(this).attr('data-item') + '"]');

		$('.barraCategoria li').removeClass('active');

        if($(this).attr('data-item') == 'all') {
            $('.box_destaques').show();
            $(this).addClass('active');
            return;
        }
        item.show();                                     
        $('.box_destaques[data-item!="'+item.attr('data-item')+'"]').hide();


		e.preventDefault();

        var activeExists = $(this).hasClass('active');

		
		$('.barraCategoria li').removeClass('active');

		

		if(!activeExists) {
			$(this).addClass('active');
		}



		






		

		

	});




});


