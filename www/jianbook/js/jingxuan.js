define(function(require,exports,module){
	var article = require('../view/article-list.html');
	var _html = _.template(article);
	var download = require('../view/app-download-guide.html');
	var nav = require('../view/nav.html');
	$('#nav').html(nav);
	var navjs = require('../js/nav.js');


	$.ajax({
		url:'../jianshu.json',
		type:'get',
		success:function(res){
			console.log(res);
			console.log(res.article);
			resFn(res);
		$('.article-list').html(_html({data:res.article}));
		$('.article-list .have-img').eq(3).before(download);
		$('.qrcode').hover(function(){
			$('.btn-part .img').css("display","block");
		},function(){
			$('.btn-part .img').css("display","none");
		});
		
		}

	})
	function resFn(res){
		    var unstyled = $('.unstyled');
		    var li = $();
		    for(var i = 0;i < res.array.length;i++){
		    	unstyled.append('<li><a href="#">'+res.array[i]+'</a></li>')
		    }
		    unstyled.find('li').eq(0).addClass('active');
	}
})
