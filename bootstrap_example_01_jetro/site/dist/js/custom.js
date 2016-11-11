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
		 * Sorted out with CSS selector only.
		 */
//		console.log(this);
//		$this = this;
//		
//		$caption = $('.active .carousel-caption').first();

//		$caption.css('display: none');
//		void($caption.offsetWidth);
//		$caption.css('display: block');
		
		
	})
	
	
	
})