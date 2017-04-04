define(function(require,exports,module) {
	var nav = require('../view/nav-left.html');
	$('.ccl-nav').html(nav);
	var navjs = require('../js/nav.js');
	function sign(event) {
		$('.sign_in_click').click(function() {
			$(this).addClass('active')
			$('.sign_out_click').removeClass('active')
			$('.sign_in').show();
			$('.sign_out').hide()
		});
		$('.sign_out_click').click(function() {
			$(this).addClass('active')
			$('.sign_in_click').removeClass('active')
			$('.sign_out').show()
			$('.sign_in').hide()
		})
	}
	sign();
})