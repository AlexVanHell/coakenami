$(document).ready(function(){

	$('.ms_inner').css('width' , $('.ms_section').width() * $('.ms_section').size() );
	$('.ms_section').css('width' , $('.ms_inner').width() / $('.ms_section').size() );

	$('.alb_img').hide();

	$('.main_container').css('height', $(window).height());

	$('.book_container').css('height', $('.book_container').width() * 1.4502 );

	if( $(window).width() < 693 || $(window).height() < 500){
		$('.resp_showmenu').show();
		$('.menu_container').css('bottom' , - $('.menu_container').outerHeight(true) );
	}

	$('.resp_showmenu').click(function(){
		$('.menu_container').animate({ bottom : '0' } , 1200);
	});

	$('.galshow_img').css('height' , $(window).height() - ($('.gallery_show .close').outerHeight() + $('.galshow_info').height()) );

	$('.album_container').click(function(){
		$(this).find('.alb_img').slideDown(1200);
		$(this).find('.close_album').show();
	});

	$('.close_album').click(function(){
		$(this).parents('.album_container').find('.alb_img').slideUp();
		$(this).hide();
		event.stopPropagation();
	});

	$('.alb_img img').click(function(){

		var index = $(this).parents('.parimg').index();
		var totalimg = $(this).parents('.alb_img').find('.parimg').length;
		var album_name = $(this).parents('.album_container').find('.alb_img').siblings('.title_normal').text();

		//var album_num = $(this).parents('.album_container').find('.title_normal').index();

		$('.gallery_show').fadeIn(800);
		$('.galshowinner img').attr('src' , $(this).attr('src'));
		$('#galimg_pos').text(index);
		$('#galimg_total').text(totalimg);
		$('#album_name').text(album_name);
		//$('#album_number').text(album_num);

		if( index == totalimg ){
			$('.gallery_buttons span#right').hide();
		}
		else{
			$('.gallery_buttons span#right').show();
		}
		if( index == 1 ){
			$('.gallery_buttons span#left').hide();	
		}
		else{
			$('.gallery_buttons span#left').show();
		}

	});

	$('.gallery_buttons span#right').click(function(){
		var actualimg = parseInt( $('#galimg_pos').text() ) ;
		var actalb = $('#album_name').text();

		$('.parimg img').parents('.alb_img').siblings('h3.title_normal:contains("'+ actalb +'")').siblings('.alb_img').find('.parimg').eq( actualimg ).find('img').trigger('click');
	});

	$('.gallery_buttons span#left').click(function(){
		var actualimg = parseInt( $('#galimg_pos').text() ) ;
		var actalb = $('#album_name').text();

		$('.parimg img').parents('.alb_img').siblings('h3.title_normal:contains("'+ actalb +'")').siblings('.alb_img').find('.parimg').eq( actualimg - 2 ).find('img').trigger('click');
	});

	$('.gallery_show .close span').click(function(){
		$('.gallery_show').fadeOut(800);
	});

});