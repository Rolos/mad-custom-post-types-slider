(function($){
	
	// Call cslider script on each parallax-slider
	$('.da-slider').each( function( index ) {				
		$(this).cslider({
				bgincrement : parseInt( prlx.bgincrement ),
				autoplay    : parseInt( prlx.autoplay ),
				interval    : parseInt( prlx.interval ),
				current     : parseInt( prlx.current )
		});
	});

	$('.da-slider').each( function( index ) {
		// Call touchSwipe script on each parallax-slider
		$(this).swipe({
				 swipeLeft:  function() { $('#da-slider').find('span.da-arrows-next').click() },
				 swipeRight: function() { $('#da-slider').find('span.da-arrows-prev').click() },
				});
	});
})(jQuery);