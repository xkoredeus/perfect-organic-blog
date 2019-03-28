$(function() {
	$('.card__slider').owlCarousel({
		items: 1,
		dots: true,
		autoplay: true,
		// responsive : {
		//   0   : {
		//       items: 1
		//   },
		//   380 : {
		//       items: 1
		//   },
		//   480 : {
		//       items: 1
		//   },
		//   768 : {
		//       items: 3
		//   },
		//   1040 : {
		//       items: 4
		//   }
		// }
	});
	$('.new-product__cnt').owlCarousel({
		nav: true,
		items: 1,
		dots: false,
		navText: ["<img src='img/icon__arrow_prev.svg'>", "<img src='img/icon__arrow_next.svg'>"],
	});
	// tabs
	$(document).ready(function () {
		$(".tabs__content-item").hide();
		$(".tabs__container div.tabs__content-item.active-tab").show();
		$('ul.tabs__list > li').click(function () {
			if (!($(this).hasClass('active'))) {
				var thisLi = $(this);
				var numLi = thisLi.index();
				thisLi.addClass('active').siblings().removeClass('active');
				thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
			}
		});
	});
	//категории товаров
	$('.content-menu__wrp').on('click', function(){
		$(this).find('.content-menu').toggleClass('active');
	});
	$('.content-menu__cross').on('click', function(){
		$('.content-menu__wrp').toggleClass('active');
	});
	//страница оформления заказа
	$(".order__item_hide").hide();
	$('.order__btn-next').on('click', function(e){
		e.preventDefault();
		$(this).closest('.order__item').next('.order__item_hide').slideToggle();
	});
	//стилизация input type number
	$( '.cart__item-quantity' ).on( 'click', '.cart__item-quantity-minus, .cart__item-quantity-plus', function () {
	var input = $( this ).siblings( '.cart__item-quantity-num' );
		if ( (input.val() > 1) && ($( this ).hasClass( 'cart__item-quantity-minus' ) ) ) {
				input.val( +input.val() - 1 );
		} else if ( $( this ).hasClass( 'cart__item-quantity-plus' ) ) {
			input.val( +input.val() + 1 );
		};
	});
	//mobile menu
	if ( $(window).width() < 992 ) {
		$(".nav__hamburger").on('click',function() {
			$(this).toggleClass("active");
			$('.nav__menu').toggleClass('active');
			$('body').toggleClass("fixed");
		});
	}
});