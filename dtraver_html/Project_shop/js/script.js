function toggle_sidebar(el) {
	var el = document.querySelector('.sidebar-toggle');
	var sidebar = document.querySelector('.sidebar--right');
	if (el) {
		el.onclick = function() {
		  sidebar.classList.toggle('opened');
		}
	}
	
}
function toggle_collapse() {
	// Handler that uses various data-* attributes to trigger
	// specific actions, mimicing bootstraps attributes
	const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

	document.querySelectorAll('.toggle span').forEach((item) => {
	  item.addEventListener('click', (e) => {
	  	var parent = e.target.parentNode;
	    const selector = parent.getAttribute('data-target');
		collapse(selector, 'toggle');
		parent.classList.toggle('show')
	  });
	})
	


	const fnmap = {
	  'toggle': 'toggle',
	  'show': 'add',
	  'hide': 'remove'
	};
	const collapse = (selector, cmd) => {
	  const targets = Array.from(document.querySelectorAll(selector));
	  targets.forEach(target => {
	    target.classList[fnmap[cmd]]('show');
	  });
	}
}

function close_search_result() {
	var backdrop = document.getElementById("backdrop");
	[...document.querySelectorAll(".backdrop, .close-query-results")].forEach((item) => {
	  item.addEventListener("click", closeResults);
	})

	

	function closeResults() {
		document.querySelector('.main-content__top').classList.remove('show-results');
	}


}

function modal_toggle() {
	// For browsers that do not support Element.closest(), but carry support for element.matches() (or a prefixed equivalent, meaning IE9+), a polyfill exists:
	var getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
		return null;

	};

	const openEls = document.querySelectorAll("[data-open]");
	const closeEls = document.querySelectorAll("[data-close]");
	const isVisible = "is-visible";

	for (const el of openEls) {
	  el.addEventListener("click", function() {
	    const modalId = this.dataset.open;
	    if (document.getElementById(modalId) != null) {
	    	document.getElementById(modalId).classList.add(isVisible);
	    }
	  });
	}

	for (const el of closeEls) {
	  el.addEventListener("click", function(event) {
	  	var parent = getClosest(event.target, '.modal')
	    parent.classList.remove(isVisible);
	  });
	}

	document.addEventListener("click", e => {
	  if (e.target == document.querySelector(".modal.is-visible")) {
	    document.querySelector(".modal.is-visible").classList.remove(isVisible);
	  }
	});

	document.addEventListener("keyup", e => {
	  // if we press the ESC
	  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
	    document.querySelector(".modal.is-visible").classList.remove(isVisible);
	  }
	});
}


// datepicker
const elem = document.getElementById('range');
if (elem) {const datepicker = new DateRangePicker(elem, {
});}



toggle_collapse();
toggle_sidebar();
close_search_result();
modal_toggle();