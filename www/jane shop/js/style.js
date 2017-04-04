
$(function(){
  // 轮播图
  var timer = setInterval(show,1500);
  var count = 0;
  function show(){
  $('div .banner img').eq(count).fadeIn().siblings().fadeOut();
  $('div .banner-txt ul li').eq(count).css({"backgroundColor":"blue"}).siblings().css({"backgroundColor":""});
        count++;
  		if(count>=5){
  			count = 0;}
  }
  // 鼠标hover高亮
  $('div .banner-txt ul li').hover(function(){
  	clearInterval(timer);
  	var $index1=$(this).index();
  	$('div .banner img').eq($index1).show().siblings().hide();
  $('div .banner-txt ul li').eq($index1).css({"backgroundColor":"blue"}).siblings().css({"backgroundColor":""});
  },function(){
  	count=$(this).index();
  	timer = setInterval(show,1500);
  })



 // 导航
  $('.nav ul li').hover(function(){ 	   
     $(this).children('div').show();              
  },function(){
  	$(this).children('div').hide();
  }); });

// 左侧字变颜色
  $('.b ul li a').hover(function(){ 	   
     $(this).css({"color":"blue"});              
  },function(){
  	$(this).css({"color":""});
  }); 

// 右侧hover字体显示
 $('.txt a').hover(function(){ 	   
     $(this).css({"color":"blue"});              
  },function(){
  	$(this).css({"color":""});
  }); 
$('.txt a').mousemove(function(e){
     var texts=$(this).html();    	
     $('.showtxt').html(texts).show().css({'left':e.pageX + 5 + 'px','top':e.pageY + 5 + 'px'});
     }).mouseout(function(){
     	$('.showtxt').hide();
     });

// 换肤
var color=['#5579c4','#b9d832','#fba70e','#45c8d5','#e11355','#ba39d8']
$('.theme li').click(function(){
      var index=$(this).index();
      $(this).css({"background-positionY":"-15px"}).siblings().css({"background-positionY":"0px"});
      $('.nav').css({"background-color":color[index]});
      $('.body-left-top').css({"background-color":color[index]});
});


// 换鞋
$('.astyle>li').click(function(){
	   var index = $(this).index();
	   $('.show-box').animate({"left":-index*775+"px"},1500);
	   $(this).addClass('txtcolor').siblings().removeClass('txtcolor');
});



// 换尺寸
$(".iconsize li").click(function(){
  var txt = $(this).text();
  $(".sizetxt").text(txt);
  $(this).css({"background-color":"red"}).siblings()
  .css({"background-color":""});
});

//选衣服
$(".smallcloth img").click(function(){
  var index = $(this).index();
  var array=['蓝白','天蓝白','黄白'];
  $(".sizetxt2").text(array[index]);
  $(this).css({"border-color":"red"}).siblings()
  .css({"border-color":""});
});

// 换介绍

$(".sizetxt3 li").click(function(){
  var index = $(this).index();
  $(".introuducetxt li").eq(index).show().siblings().hide();
  $(this).css({"background-color":"skyblue"}).siblings()
  .css({"background-color":""});
});

// 点小图换大图
$('.small1').click(function(){

  $('.hide2').show().siblings().hide();
 $(".big-img3").attr({"src":"images/pro_img/blue_one_small.jpg"})
 $(".big-img3").attr({"rel":"images/pro_img/blue_one_big.jpg"})

  
})
$('.small2').click(function(){
  $('.hide1').show().siblings().hide();
  $(".big-img3").attr({"src":"images/pro_img/green_one_small.jpg"})
 $(".big-img3").attr({"rel":"images/pro_img/blue_one_big.jpg"})
  
})
$('.small3').click(function(){
  $('.show1').show().siblings().hide();
  $(".big-img3").attr({"src":"images/pro_img/yellow_one_small.jpg"})
 $(".big-img3").attr({"rel":"images/pro_img/yellow_one_big.jpg"})
 
})




$('.hide2-1').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/blue_one_small.jpg",
"rel":"images/pro_img/blue_one_big.jpg"});
});
$('.hide2-2').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/blue_three_small.jpg",
"rel":"images/pro_img/blue_three_big.jpg"});
});
$('.hide2-3').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/blue_two_small.jpg",
"rel":"images/pro_img/blue_two_big.jpg"});
});

$('.hide1-1').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/green_one_small.jpg",
"rel":"images/pro_img/green_one_big.jpg"});
});
$('.hide1-2').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/green_two_small.jpg",
"rel":"images/pro_img/green_two_big.jpg"});
});

$('.show1-1').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/yellow_one_small.jpg",
    "rel":"images/pro_img/yellow_one_big.jpg"});
});
$('.show1-2').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/yellow_two_small.jpg"
    ,"rel":"images/pro_img/yellow_two_big.jpg"});
});
$('.show1-3').click(function(){
  $('.big-img3').attr({"src":"images/pro_img/yellow_three_small.jpg",
    "rel":"images/pro_img/yellow_three_big.jpg"});
});


//星星评分
$(function(){
      $(".box li").mousemove(function(){
        var _index = $(this).index();
        $('.star-img').addClass('hover' + _index)
      }).mouseout(function(event) {
        /* Act on the event */
        var _index = $(this).index();
        $('.star-img').removeClass('hover' + _index);
      }).click(function(){
        var _index = $(this).index();
        $('.star-img').attr("class","star-img").addClass('click' + _index);
        alert("评分为"+(2*_index +2)+"分");
      });
    })


// 放大镜
$(".showing img").imagezoom({
      xzoom: 310,
      yzoom: 310,
      offset: 15
    }); 


// 蒙版放大效果
$(".img2").click(function(){
var imagesrc=$(".showing img").attr("src");
$(".big-big-img img").attr("src",imagesrc);
$(".big-big-img ").show();

});

$(".big-big-img").click(function(){
  $(".big-big-img ").hide();
  // $(".showing").removeClass("t");
});
