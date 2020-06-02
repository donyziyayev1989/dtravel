$(function () {

    // Show password
	$('.show-password').on('click', function(event) {
		event.preventDefault();
		var $parent = $(this).parent('.password');
		var $input = $parent.find('.form-control');
		var icon = $(this).find('i');
		
		$parent.toggleClass('show');

		if ($parent.hasClass('show')) {
		    $input.attr('type', 'text')
		    icon.removeClass('fa-eye')
		    	.addClass('fa-low-vision')
		  } else {
		    $input.attr('type', 'password');
		     icon.removeClass('fa-low-vision')
		    	.addClass('fa-eye')
		}
	});
	

	// Toggle side menu
	$('.navbar-toggler').click(function(event) {
		event.preventDefault();
		$('.header__navbar').addClass('header__navbar--open');
		$('body').addClass('navbar--open');
	});

	$('.header__navbar__close, .backdrop').click(function(event) {
		event.preventDefault();
		$('.header__navbar').removeClass('header__navbar--open');
		$('body').removeClass('navbar--open');
	});
	

	// Scroll to top 
	var e = $("#scrollToTop");
	if (e.length > 0) {
		$(window).on("scroll", function() {
	        $(this).scrollTop() > 200 ? e.addClass("visible") : e.removeClass("visible")
	    });
	    e.on("click", function(b) {
	        b.preventDefault();
	        $('html,body').animate({scrollTop:0},700);
	    })
	}


	// Select 2
	if ($('.select2').length > 0) {
		$('.select2').select2();
	}


	// Initialize tooltip
	$('[data-toggle="tooltip"]').tooltip();


	// Add selected class on check input 
	$('.table--selectable-row .checkbox>input').on('change', function(event) {
		var $this = $(this);
		if ($this.prop("checked") === true) {
			$this.closest('tr').addClass('selected-row')
		} else {
			$this.closest('tr').removeClass('selected-row')
		}
	});

	
	// Datatimepicker
     // input group demo
 	if ($('#kt_datetimepicker_2, #kt_datetimepicker_1_validate, #kt_datetimepicker_2_validate, #kt_datetimepicker_3_validate').length) {
	 	$('#kt_datetimepicker_2, #kt_datetimepicker_1_validate, #kt_datetimepicker_2_validate, #kt_datetimepicker_3_validate').datetimepicker({
	        todayHighlight: true,
	        autoclose: true,
	        pickerPosition: 'bottom-left',
	        format: 'yyyy/mm/dd hh:ii'
	    });
 	}
    
	

	// Toggle sidebar
	$('.toggle-sidebar').on('click', function(event) {
		event.preventDefault();
		$('.sidebar-collapse').toggleClass('sidebar-collapse--show');
	});


	// Table sorting
	$('.table').on('click', ".sorting", function(event) {
		event.preventDefault();
		$(this).removeClass('sorting').addClass('sorting_asc')
	});

	$('.table').on('click', '.sorting_asc, .sorting_desc', function(event) {
		event.preventDefault();
		$(this).toggleClass('sorting_asc sorting_desc')
	});







});

	// toggle sub table rows

function toggle_sub_products() {
	document.querySelectorAll('.parent-row').forEach((item) => {
	  item.addEventListener('click', (e) => {
	  	var el = e.target.closest('.parent-row');
	  	var childs = getNextSibling(el, '.child-row');

	  	el.classList.toggle('show');

		if (childs.length > 0) {
			childs.forEach((item) => {
			  item.classList.toggle('show')
			})
		}
	  });
	});
}

// Getting next element siblings
var getNextSibling = function (elem, selector) {
	var temp = [];
	// Get the next sibling element
	var sibling = elem.nextElementSibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)){
			temp.push(sibling);
			sibling = sibling.nextElementSibling
		} else {
			break
		}
	}
	return temp;
};
toggle_sub_products()