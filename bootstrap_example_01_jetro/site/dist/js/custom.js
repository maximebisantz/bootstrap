/**
 * CUSTOM js FILE
 * 
 */

//window.alert('hello world');

$(document).ready(function(){
	//window.alert('hello world');
	
	$('#carousel-item-1').addClass("active");
	
	$('.carousel').carousel({
		interval : 5000
	});
	
	/**
	 * Animate the caption on carousel.slide event.
	 */
	$('#home-carousel').on('slid.bs.carousel', function(e){
		
		/**
		 * Dirty trick to put the class "active" on the related 
		 * carousel indicator. (because it's different from 
		 * bootstrap default indicators, it didn't follow the 
		 * slides as they slid)
		 */
		
		// select custom indicators
		$indicators = $('.carousel-indicators-item');
		
		// Find active indicator and remove the active class
		$active = $indicators.filter('.active');
		$active.removeClass('active');
		
		// From the relatedTarget event object. Custom ID provided
		$currentSlide = e.relatedTarget.id.replace("carousel-item-", "");
		
		// Select the indicator of the current slide and attach the active class
		$next = $indicators[$currentSlide - 1];
		$($next).addClass('active');
		
	})
	
	
	// Display a modal for styling
	//$('#article-1-more').modal('show');
	
	
	
	
})