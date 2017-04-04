define(function(require, exports, module){
	var  hanxu={	
		initPage:function(){
			var util = require('./util');
			util.showSlide([
					     'view/images/index/bg1.jpg',
					     'view/images/index/bg3.jpg',
					     'view/images/index/bg2.jpg',
					     'view/images/index/bg4.jpg',
					]);
			util.nav();
			util.slideImage();
			util.slide();
		}
	}
	module.exports = hanxu;
    
})
