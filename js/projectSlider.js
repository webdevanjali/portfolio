
	// $(document).ready(function() {
	// 	$("#css3dimagePager li").click(function(){
	// 		var rotateY = ($(this).index() * -90); 
	// 		$("#css3dimageslider ul").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
	// 		$("#css3dimagePager li").removeClass("active");
	// 		$(this).addClass("active");
	// 	});
	// 	$("#css3dtransparency").click(function() {
	// 		$("#css3dimageslider").toggleClass("transparency");
	// 		$(this).toggleClass("active");
	// 	});
	// });

	$(document).ready(function() {
		// Combined 3D Slider and Tab Active State Handler
		$("#css3dimagePager .nav-link").click(function(e) {
			// Find the parent <li> index relative to its siblings
			var $li = $(this).closest('li');
			var rotateY = ($li.index() * -90); 
			
			// Apply 3D rotation transform
			$("#css3dimageslider ul").css({
				"-webkit-transform": "rotateY(" + rotateY + "deg)", 
				"-moz-transform": "rotateY(" + rotateY + "deg)", 
				"-ms-transform": "rotateY(" + rotateY + "deg)", 
				"transform": "rotateY(" + rotateY + "deg)"
			});
			
			// Remove active class from all nav-links and list items in this pager
			$("#css3dimagePager .nav-link").removeClass("active");
			$("#css3dimagePager li").removeClass("active");
			
			// Add active class to the clicked link and its parent li
			$(this).addClass("active");
			$li.addClass("active");
		});
	
		// Transparency toggle remains independent
		$("#css3dtransparency").click(function() {
			$("#css3dimageslider").toggleClass("transparency");
			$(this).toggleClass("active");
		});
	});