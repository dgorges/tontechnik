// ----------------------------------------------------------------------------------------------------
// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
// ----------------------------------------------------------------------------------------------------
( function()
{
	$( function()
	{
		// ----------------------------------------------------------------------------------------------------
		// Globals

		var $document = $( document );
		var $window = $( window );

		var body_height = 0;

		var viewport_height = 0;

		var viewport_top = 0;
		var viewport_bottom = 0;

		var viewport_top_previous = -1;

		var elements = [];
		var elements_in_view = [];

		var property_defaults =
		{
			'opacity' : 1,
			'translatex' : 0,
			'translatey' : 0,
			'translatez' : 0,
			'rotatex' : 0,
			'rotatey' : 0,
			'rotatez' : 0,
			'scale' : 1
		};

		var animateme_selector = '.animateme';
		var scrollme_selector = '.scrollme';

		// Easing functions

		var easing_functions =
		{
			'linear' : function( x )
			{
				return x;
			},

			'easeout' : function( x )
			{
				return x * x * x;
			},

			'easein' : function( x )
			{
				x = 1 - x;
				return 1 - ( x * x * x );
			},

			'easeinout' : function( x )
			{
				if( x < 0.5 )
				{
					return ( 4 * x * x * x );
				}
				else
				{
					x = 1 - x;
					return 1 - ( 4 * x * x * x ) ;
				}
			}
		};

		// Events to bind initialisation to

		var init_events =
			[
				'ready',
				'page:load', // Turbolinks
				'page:change' // Turbolinks
			];

		// ----------------------------------------------------------------------------------------------------
		// Initialisation

		init = function()
		{
			init_elements();

			on_resize();

			setInterval( update , 10 );

			// Recalculate heights & positions on resize and rotate

			$window.on( 'resize orientationchange' , function(){ on_resize(); } );

			// Recalculate heights & positions when page is fully loaded + a bit just in case

			$window.load( function(){ setTimeout( function(){ on_resize(); } , 100 ) });
		}

		// ----------------------------------------------------------------------------------------------------
		// Get list and pre-load animated elements

		init_elements = function()
		{
			// For each reference element

			$( scrollme_selector ).each( function()
			{
				var element = {};

				element.element = $( this );

				var effects = [];

				// For each animated element

				$( this ).find( animateme_selector ).addBack( animateme_selector ).each( function()
				{
					// Get effect details
					var effect = {};

					effect.element = $( this );
					effect.when = effect.element.data( 'when' );
					effect.from = effect.element.data( 'from' );
					effect.to = effect.element.data( 'to' );

					if( effect.element.is( '[data-easing]' ) )
					{
						effect.easing = easing_functions[ effect.element.data( 'easing' ) ]
					}
					else
					{
						effect.easing = easing_functions[ 'easeout' ];
					}

					// Get animated properties

					var properties = {};

					if( effect.element.is( '[data-opacity]' ) )    properties.opacity    = effect.element.data( 'opacity' );
					if( effect.element.is( '[data-translatex]' ) ) properties.translatex = effect.element.data( 'translatex' );
					if( effect.element.is( '[data-translatey]' ) ) properties.translatey = effect.element.data( 'translatey' );
					if( effect.element.is( '[data-translatez]' ) ) properties.translatez = effect.element.data( 'translatez' );
					if( effect.element.is( '[data-rotatex]' ) )    properties.rotatex    = effect.element.data( 'rotatex' );
					if( effect.element.is( '[data-rotatey]' ) )    properties.rotatey    = effect.element.data( 'rotatey' );
					if( effect.element.is( '[data-rotatez]' ) )    properties.rotatez    = effect.element.data( 'rotatez' );
					if( effect.element.is( '[data-scale]' ) )      properties.scale      = effect.element.data( 'scale' );

					effect.properties = properties;

					effects.push( effect );
				});

				element.effects = effects;

				elements.push( element );
			});
		}

		// ----------------------------------------------------------------------------------------------------
		// Update elements

		update = function()
		{
			window.requestAnimationFrame( function()
			{
				update_viewport_position();

				if( viewport_top_previous != viewport_top )
				{
					update_elements_in_view();
					animate();
				}

				viewport_top_previous = viewport_top;
			});
		}

		// ----------------------------------------------------------------------------------------------------
		// Animate stuff

		animate = function()
		{
			// For each element in viewport

			var elements_in_view_length = elements_in_view.length;

			for( var i=0 ; i<elements_in_view_length ; i++ )
			{
				var element = elements_in_view[i];

				// For each effect

				var effects_length = element.effects.length;

				for( var e=0 ; e<effects_length ; e++ )
				{
					var effect = element.effects[e];

					// Get effect animation boundaries

					switch( effect.when )
					{
						case 'view' :
							var start = element.top - viewport_height;
							var end = element.bottom;
							break;

						case 'exit' :
							var start = element.bottom - viewport_height;
							var end = element.bottom;
							break;

						default :
							var start = element.top - viewport_height;
							var end = element.top;
							break;
					}

					if( start < 0 ) start = 0;
					if( end > ( body_height - viewport_height ) ) end = body_height - viewport_height;

					// Get scroll position of reference selector

					var scroll = ( viewport_top - start ) / ( end - start );

					// Get relative scroll position for effect

					var from = effect[ 'from' ];
					var to = effect[ 'to' ];

					var length = to - from;

					var scroll_relative = ( scroll - from ) / length;

					// Apply easing

					var scroll_eased = effect.easing( scroll_relative );

					// Get new value for each property

					var opacity    = animate_value( scroll , scroll_eased , from , to , effect , 'opacity' );
					var translatey = animate_value( scroll , scroll_eased , from , to , effect , 'translatey' );
					var translatex = animate_value( scroll , scroll_eased , from , to , effect , 'translatex' );
					var translatez = animate_value( scroll , scroll_eased , from , to , effect , 'translatez' );
					var rotatex    = animate_value( scroll , scroll_eased , from , to , effect , 'rotatex' );
					var rotatey    = animate_value( scroll , scroll_eased , from , to , effect , 'rotatey' );
					var rotatez    = animate_value( scroll , scroll_eased , from , to , effect , 'rotatez' );
					var scale      = animate_value( scroll , scroll_eased , from , to , effect , 'scale' );

					// Update properties

					effect.element.css(
						{
							'opacity' : opacity,
							'transform' : 'translate3d( '+translatex+'px , '+translatey+'px , '+translatez+'px ) rotateX( '+rotatex+'deg ) rotateY( '+rotatey+'deg ) rotateZ( '+rotatez+'deg ) scale( '+scale+' )'
						} );
				}
			}
		}

		// ----------------------------------------------------------------------------------------------------
		// Calculate property values

		animate_value = function( scroll , scroll_eased , from , to , effect , property )
		{
			var value_default = property_defaults[ property ];

			// Return default value if property is not animated

			if( !( property in effect.properties ) ) return value_default;

			var value_target = effect.properties[ property ];

			var forwards = ( to > from ) ? true : false;

			// Return boundary value if outside effect boundaries

			if( scroll < from && forwards ) { return value_default; }
			if( scroll > to && forwards ) { return value_target; }

			if( scroll > from && !forwards ) { return value_default; }
			if( scroll < to && !forwards ) { return value_target; }

			// Calculate new property value

			var new_value = value_default + ( scroll_eased * ( value_target - value_default ) );

			// Round as required

			switch( property )
			{
				case 'opacity'    : new_value = new_value.toFixed(2); break;
				case 'translatex' : new_value = new_value.toFixed(0); break;
				case 'translatey' : new_value = new_value.toFixed(0); break;
				case 'translatez' : new_value = new_value.toFixed(0); break;
				case 'rotatex'    : new_value = new_value.toFixed(1); break;
				case 'rotatey'    : new_value = new_value.toFixed(1); break;
				case 'rotatez'    : new_value = new_value.toFixed(1); break;
				case 'scale'      : new_value = new_value.toFixed(3); break;
				default : break;
			}

			// Done

			return new_value;
		}

		// ----------------------------------------------------------------------------------------------------
		// Update viewport position

		update_viewport_position = function()
		{
			viewport_top = $window.scrollTop();
			viewport_bottom = viewport_top + viewport_height;
		}

		// ----------------------------------------------------------------------------------------------------
		// Update list of elements in view

		update_elements_in_view = function()
		{
			elements_in_view = [];

			var elements_length = elements.length;

			for( var i=0 ; i<elements_length ; i++ )
			{
				if ( ( elements[i].top < viewport_bottom ) && ( elements[i].bottom > viewport_top ) )
				{
					elements_in_view.push( elements[i] );
				}
			}
		}

		// ----------------------------------------------------------------------------------------------------
		// Stuff to do on resize

		on_resize = function()
		{
			// Update viewport/element data

			update_viewport();
			update_element_heights();

			// Update display

			update_viewport_position();
			update_elements_in_view();
			animate();
		}

		// ----------------------------------------------------------------------------------------------------
		// Update viewport parameters

		update_viewport = function()
		{
			body_height = $document.height();
			viewport_height = $window.height();
		}

		// ----------------------------------------------------------------------------------------------------
		// Update height of animated elements

		update_element_heights = function()
		{
			var elements_length = elements.length;

			for( var i=0 ; i<elements_length ; i++ )
			{
				var element_height = elements[i].element.outerHeight();
				var position = elements[i].element.offset();

				elements[i].height = element_height;
				elements[i].top = position.top;
				elements[i].bottom = position.top + element_height;
			}
		}

		// ----------------------------------------------------------------------------------------------------
		// Bind initialisation

		var init_events_string = init_events.join( ' ' );

		$document.on( init_events_string , function(){ init(); } );

		// ----------------------------------------------------------------------------------------------------

	})

}).call( this );