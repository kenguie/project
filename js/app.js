

//------------------- homemade carousel --------------------//
	// var slideNum = 0;

	// var slides = $('#carousel img');

	// slides.eq(slideNum).show();

	// var sliderTimer = setInterval(function() {

		
	// 	slides.eq(slideNum).fadeOut();

	// 	slideNum++;

	// 	if(slideNum >= slides.length) {
	// 		slideNum = 0;
	// 	}

	// 	slides.eq(slideNum).fadeIn(1000);

	// }, 3000);
//------------------- end homemade carousel --------------------//

function carousel() {
    var $active = $('#carousel .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#carousel img:first');
    $next.css('z-index', 2); //move the next image up the pile
    $active.fadeOut(1500, function() { //fade out the top image
        $active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active'); //make the next image the top one
    });
}

$(document).ready(function() {

setInterval('carousel()', 3000);


});