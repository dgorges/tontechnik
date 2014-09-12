/*
 * GLOBAL JS FOR FRESH-X
 */


var B = {};

requirejs.config({
	paths: {
		'jquery-ui': 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min'
	}
});

require([
	'jquery'
	,'libs/bootstrap'
	,'libs/jquery.customSelect'
	,'libs/jquery.bxslider'
	,'libs/jquery.sidr.min'
	,'libs/owl.carousel'
	,'libs/jquery.magnific-popup'
	,'libs/jquery.loading'
	,'libs/gmaps'
	,'libs/jquery.stickem'

], function() {

	B.initialize = function() {

		B.accordion.initialize();
		B.customselect.initialize();
		B.slides.initialize();
		B.sidr.initialize();
		B.owlslides.initialize();
		B.magnific.initialize();
		B.loading.initialize();
		B.gmaps.initialize();
		B.scrollTo.initialize();
		B.stickEm.initialize();
	};



	// open links with class bJS_popup in lightbox
	B.magnific = {
		settings: {
			$ajaxPopup : $('.bJS_ajaxpopup')
			, $youtubePopup : $('.bJS_youtubepopup')
			, $imagePopup : $('.bJS_imagepopup')
		}

		, initialize: function() {

			var
				me = this
				,s = me.settings;

			// open content popup
			s.$imagePopup.magnificPopup({
				type: 'image'
				, gallery: {
					enabled: true
					,navigateByImgClick: true
					,preload: [0,1]
					,tCounter: '<div class="mfp-counter b_imageCounter">%curr% von %total%</div>' // markup of counter
				}
				, fixedContentPos : true
				, fixedBgPos : true
				, zoom: {
					enabled: true,
					duration: 300, // don't foget to change the duration also in CSS
					opener: function(element) {
						return element.find('img');
					}
				}
				, midClick: true
				, removalDelay: 200
				, mainClass: 'my-mfp-zoom-in'
			});
			// ajax popup
			s.$ajaxPopup.magnificPopup({
				type: 'ajax',
				ajax: {

					cursor: 'mfp-ajax-cur',
					tError: '<a href="%url%">The content</a> could not be loaded.'
				},
				callbacks: {
					parseAjax: function(mfpResponse) {
						// parse response till id mainContent
						mfpResponse.data = $(mfpResponse.data).filter('#mainContent');
					},
					ajaxContentAdded: function() {
						// adds the content to the dom
						this.content;
					}
				}
			});

			// open youtube video in popup
			s.$youtubePopup.magnificPopup({
				type:'iframe'
				, iframe: {
					markup: '<div class="mfp-iframe-scaler bG_popupContent">'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><button title="Close (Esc)" type="button" class="mfp-close">×</button>'+
						'</div>',

					patterns: {
						youtube: {
							index: 'youtube.com/',
							id: 'v=',
						}
					},
					srcAction: 'iframe_src'
				}
			});
		}

	}

	// creates a sidebar off canvas navigation
	B.sidr = {
		initialize : function() {
			var me = this;
			me.events();
		}
		, events : function() {
			$('#responsive-menu-button').sidr({
				name: 'dgJS_offCanvas',
				source: '.dgJS_nav'
			});
		}
	}
	// creates a sidebar off canvas navigation
	B.gmaps = {
		initialize : function() {
			var me = this;
			me.events();


		}
		, events : function() {
			if($('.dgJS_maps').length > 0) {



				var triggerMap = $('.dgJS_maps').get(0);

				$('.dgJS_maps').each(function(){

					var $mapContainer = $(this);

					var dataLat = $mapContainer.data('lat');
					var dataLong = $mapContainer.data('long');
					var markerContent = $mapContainer.data('marker');
					var markerTitle = $mapContainer.data('markerTitle');

					var map = new GMaps({
						div: this,
						lat: dataLat,
						lng: dataLong
					});
					map.addMarker({
						lat: dataLat,
						lng: dataLong,
						title: markerTitle,
						infoWindow: {
							content: '<p>' + markerContent + '</p>'
						}
					});
				});

			}
		}
	}
	// toggles a class for an accordion to show the actual status
	B.accordion = {
		initialize : function() {
			var me = this;
			me.events();
		}
		, events : function() {
			$('.dgJS_accordionHeadline').click(function() {
				$(this).toggleClass('active').parents().siblings().children('.dgJS_accordionHeadline').removeClass('active');
			});

		}
	}

	// scroll to clicked element and ad class active
	B.scrollTo = {
		initialize : function() {
			var me = this;
			me.events();
		}
		, events: function() {

			$('.js_slideToContent').click(function() {
				$('.js_slideToContent').removeClass('active');
				$(this).addClass('active');
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							// 70 px offset to the top cause the fixed nav has 150 px height
							scrollTop: target.offset().top - 170
						}, 1000);
						return false;
					}
				}
			});
		}

	}


	// custom selectelements styled with jquery plugin customSelect
	B.customselect = {
		initialize: function() {
			$('.dgJS_selectbox').customSelect();
		}
	};
	// index of currect page and slide to them
	B.stickEm = {
		initialize: function() {
			var topSpacingFromHeader = ($('#header').outerHeight( true ) ) - 5;
			$('.dgJS_sectionIndex').sticky({topSpacing:topSpacingFromHeader});
			$(window).on('resize', function(){
				var topSpacingFromHeader = $('#header').outerHeight( true );
				$('.dgJS_sectionIndex').sticky({topSpacing:topSpacingFromHeader});
				console.log(topSpacingFromHeader);
			});
			console.log(topSpacingFromHeader);

		}
	};

	// custom selectelements styled with jquery plugin customSelect
	B.loading = {
		initialize: function() {
			$('.dgJS_loading').submit(function() {
				var message = $(this).closest('.dgJS_loading').data('loadingmessage');
				if(typeof message == 'undefined') {
					message = 'Ihre Anfrage wird verarbeitet...';
				}
				$('body').loading({
					stoppable: false
					, message: message
				});
			});
		}
	};


	// settings for bxSlider for the keyvisualslider
	B.slides = {
		settings : {
			$slider : ""
		}
		, initialize: function() {

			var
				me = this
				, s = me.settings;

			s.$slider = $('.bJS_slides').bxSlider({
				prevText: ''
				, nextText: ''
				, pager: true
				, auto: true
				, pause: 5000
				, speed: 1250
			});
		}
	};

	// settings for bxSlider for the keyvisualslider
	B.owlslides = {
		settings : {
			$slider : ""
		}
		, initialize: function() {

			var
				me = this
				, s = me.settings;

			s.$slider = $('.dgJS_owlslides').owlCarousel({
				lazyLoad : true
				, navigation : true
				, singleItem : true
				, autoPlay : true
				, stopOnHover : true
				, navigationText : ["<i class='b_prevSlide'></i>","<i class='b_nextSlide'></i>"]
				, slideSpeed : 1000
				, paginationSpeed : 1000
				, rewindSpeed : 1000
				, autoHeight : true
			});
		}
	};





	$(document).ready(function () {
		B.initialize();
	});
});
