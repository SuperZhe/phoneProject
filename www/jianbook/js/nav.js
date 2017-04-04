define(function(require,exports,module){
	var nav_left = require('../view/nav-left.html');
	$('.ccl-nav-left').html(nav_left);
	$('.ccl-nav-left a .icon-mulu').hover(function(){
		$('.ccl-nav-left a .mulu').css({display:'block'});
	},function(){
		$('.ccl-nav-left a .mulu').css({display:'none'});
	});


	$('.ccl-nav-left a .icon-shouji').hover(function(){
		$('.shouji').css({display:'block'});
	},function(){
		$('.shouji').css({display:'none'});
		$(function(){
			$('.shouji').hover(function(){
				$('.shouji').css({display:'block'})
			},
			function(){
				$('.shouji').css({display:'none'})
			});
		});
	});

	// lunbotu
	var timer = setInterval(runloop,4000);
	var count=0;
	function runloop(){
		count++
		if (count==3){
			count=0
		}
		$('.ccl-nav-img .img').eq(count).show().siblings('.img').hide();
	}

});

