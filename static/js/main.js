jQuery(function($) {'use strict',
	
	//Countdown js
	 $("#countdown").countdown({
			date: "2 februar 2018 18:30:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
});