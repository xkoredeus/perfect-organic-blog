$(function() {
	$('.new-product__cnt').owlCarousel({
		nav: true,
		items: 1,
		dots: false,
		navText: ["<img src='img/icon__arrow_prev.svg'>", "<img src='img/icon__arrow_next.svg'>"],
	});
	// tabs
	$(document).ready(function () {
		$('.tabs__content-item').hide();
		$('.tabs__container div.tabs__content-item.active-tab').show();
		$('ul.tabs__list > li').click(function () {
			if (!($(this).hasClass('active'))) {
				var thisLi = $(this);
				var numLi = thisLi.index();
				thisLi.addClass('active').siblings().removeClass('active');
				thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
			}
		});
	});
	//questions block
	$('.questions__item-descr').hide();
	$('.questions__item-top').on('click', function() {
		$(this).parent('.questions__item').toggleClass('active');
		$(this).siblings('.questions__item-descr').slideToggle();
	});
	$('.questions__item-wrp:not(:first-child)').hide();
	$('.questions__btn').on('click', function(){
		$('.questions__item-wrp:nth-child(2)').slideToggle();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).html('Скрыть');
		} else {
			$(this).html('Показать еще')
		}
	});
	//mobile menu
	if ( $(window).width() < 992 ) {
		$('.nav__hamburger').on('click', function() {
			$(this).toggleClass("active");
			$('.nav__menu').toggleClass('active');
			$('body').toggleClass("fixed");
		});
		$('.nav__list-item_sub').on('click', function(){
			$(this).toggleClass('active').siblings().removeClass('active');

		});
		$('.nav__list-item_sub > a').on('click', function(e){
			e.preventDefault();
		});
	}
});