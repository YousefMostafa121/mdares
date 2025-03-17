$(document).ready(function(){
	// Menu 
	$(".header-menu-btn").click(function(){
		$(this).toggleClass("active");
		$(".header-menu").toggleClass("active");
		$("body").toggleClass("active");
	});

	// Location
	$(".selected a").click(function(){
		$(this).parents(".location-dropdown").find(".country-select").slideToggle();
		return false;
	});
	$(".header-location-list a").click(function(){
		var location = $(this).html();
		$(".location-dropdown .selected a").html(location);
		$(".country-select").slideUp();
		return false;
	});

	// Detail
	$(".detail-tabs a").click(function(){
		var detail = $(this).attr("href");
		$(".detail-information").removeClass("active");
		$(detail).addClass("active");
		$(".detail-tabs a").removeClass("active");
		$(this).addClass("active");
		return false;
	});

	// Faq 
	$(".faq-title").click(function(){
		$(this).next(".faq-info").slideToggle();
		$(".faq-title").not(this).next().slideUp();
		$(this).toggleClass("active");
		$(".faq-title").not(this).removeClass("active");
	});

	// Phone Dropdown
	$(".select-code a").click(function(){
		$(".phone-code-list").slideToggle();
		return false;
	});
	$(".phone-code-list a").click(function(){
		var phone = $(this).html();
		$(".select-code a").html(phone);
		$(".phone-code-list").slideUp();
		return false;
	});

	$(".select-location").click(function(){
		$(this).next(".location-list").slideToggle();
		return false;
	});
	$(".location-list a").click(function(){
		var location1 = $(this).html();
		$(this).parents(".location-dropdown").find(".select-location a").html(location1);
		$(".location-list").slideUp();
		return false;
	});

	$(".filter-dropdown p").click(function(){
		$(this).next(".location-list").slideToggle();
		return false;
	});

	// Filters Funtion
	$(".view-all").click(function(){
		$(".more-filters").slideToggle();
		return false;
	});
	$(".filters-list a").click(function(){
		$(this).toggleClass("active");
		return false;
	});
	$(".filters-list a.all").click(function(){
		$(this).parent(".filters-list").find("a").addClass("active");
	});

	// Showing Page Dropdown
	$(".select-page a").click(function(){
		$(".page-list").slideToggle();
		return false;
	});
	$(".page-list a").click(function(){
		var page = $(this).html();
		$(".select-page a").html(page);
		$(".page-list").slideUp();
		return false;
	});

	// Map Function
	$(".select-school a").click(function(){
		$(".schools-list").toggleClass("active");
		return false;
	});
	$(".schools-list a").click(function(){
		$(".schools-list a").removeClass("active");
		$(this).addClass("active");
		var location = $(this).attr("href");
		var placename = $(this).text();

		$(".select-school a").text(placename);
		$(".schools-list").removeClass("active");

		$(".number-of-public").removeClass("active");
		$(location).addClass("active");

		$(".location").removeClass("active");
  		$(location + '-location').addClass("active");

		return false;
	});
	$(".location").click(function(){
		var idget = $(this).attr("id");
		var removeLocation = idget.replace(/-location/g, "");
		$('.schools-list a[href="#'+removeLocation+'"]').trigger("click");
	});

	// Inquirie Function
	$(".inquirie-head").click(function(){
		$(this).toggleClass("active");
		$(".inquirie-head").not(this).removeClass("active");
		$(this).next(".inquirie-info").slideToggle();
		$(".inquirie-head").not(this).next(".inquirie-info").slideUp();
		$(this).parents(".inquirie-box").toggleClass("active");
		$(".inquirie-head").not(this).next().parents(".inquirie-box").removeClass("active");
	});

	// map Slider
	if($('.map-slider .owl-carousel').length){
		$('.map-slider .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			rtl: true,
			nav:true,
			dots:false,
			responsive:{
				0:{
			        items:1,
			        stagePadding:0,
			    }
			}
		});
	}

	// Range Slider
	if($("#slider-range").length){
	   	$("#slider-range").slider({
      		range: true,
      		min: 0,
      		max: 200,
      		values: [ 0, 200 ],
      		slide: function( event, ui ) {
	    		$("#amount-low").val(ui.values[0]);
	    		$("#amount-high").val(ui.values[1]);
	    	}
    	});
	}
});