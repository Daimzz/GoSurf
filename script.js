$(function () {
	$('.header__slider').slick({

		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/header/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/header/arrow-right.svg" alt="arrow-right">',
		asNavFor: '.slider-dots',
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
		
		
	});

	$('.location-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/header/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/header/arrow-right.svg" alt="arrow-right">',
		asNavFor: '.slider-map',
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 1,
			  },
			},
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			 },
			 {
				breakpoint: 540,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerMode:true
				}
			 },
			 {
				breakpoint: 400,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerMode:false
				}
			 },
			
		 ]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 8,
		infinite: true,
		arrows: false,
		
		focusOnSelect: true,
		asNavFor: '.location-slider',
		 responsive: [
			
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 1,
				 infinite: true,
			  },
			},
			{
				breakpoint: 768,
				
				settings: {
					
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  
				}
			 },
			 {
				breakpoint: 540,
				settings: {
					centerMode:true,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				 
				}
			 },
		
			 {
				breakpoint: 360,
				settings: {
				  centerMode:true,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerPadding: '25px',
				}
			 },
			 {
				breakpoint: 319,
				settings: {
				  centerMode:false,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerPadding: '25px',
				}
			 },

		 ]
	});

	$('.travel__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		// fade:true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/header/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/header/arrow-right.svg" alt="arrow-right">',


	});
	$('.sleep__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		// fade:true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/header/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/header/arrow-right.svg" alt="arrow-right">',


	});
	$('.shop__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		// fade:true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/header/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/header/arrow-right.svg" alt="arrow-right">',


	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});


	// $('.quantity-button').on('click', function(){
	// 	let summ = ($('.nights').val() * $('.summ').data('nights')) + ($('.guests').val() * $('.summ').data('guests'))
	// 	$('.summ').html('$'+summ+' USD')
	// })


	// изначальный просчёт цены по умолчанию
	// var parents = $(this).parents('.sleep__slider');
	var current = $('.slick-current')
	let summ = ($('.slick-current .guests').val() * $('.slick-current .summ').data('nights')) * $('.slick-current .nights').val();
	$('.slick-current .summ').html('$' + summ + ' USD');

	// изменение цены при клике для каждого слайда
	$('.quantity').on('change', function () {
		var parents = $(this).parents('.slick-current');
		let summ = ($('.slick-current .guests').val() * $('.slick-current .summ').data('nights')) * $('.slick-current .nights').val();
		$('.slick-current .summ').html('$' + summ + ' USD');
	})

	$('.plus__add').on('click', function(event){
		$(this).toggleClass('plus-active')
		$(this).siblings('.plus__text').toggleClass('display')
	});


	$('.header__burger').on('click', function(){
		$('.menu').toggleClass('active')
		$('.header__burger').toggleClass('active')
	});

	//activate wow.js <<<<<--------

	new WOW().init({
		
	});

});

