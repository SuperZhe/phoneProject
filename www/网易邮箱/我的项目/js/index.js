
    	$(function(){
        $('#container').fullpage({ 
            navigation: true,
            verticalCentered: false,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
      
            navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
afterRender:function(){  

        $(".img1-logo").animate({top:"5%"},500);
        $(".img1-logo").fadeIn();
        $(".img1-slogan").addClass('active');
        $(".img1-1bg").animate({bottom:"18%"},1500);
        $(".img1-2bg").animate({bottom:"15%"},1500);
        $(".img1-3bg").animate({bottom:"0"},850);
   },
afterLoad:function(anchorLink,index){
    if(index == 1){
        $(".img1-logo").animate({top:"5%"},500);
        $(".img1-slogan").addClass('active');
        $(".img1-1bg").animate({bottom:"18%"},1500);
        $(".img1-2bg").animate({bottom:"15%"},1500);
        $(".img1-3bg").animate({bottom:"0"},850);
    }
     if(index == 2){
        $(".img2-txt1").addClass('active');
        $(".img2-txt").addClass('active');
        $(".img2-left").animate({left:"86px"},1200);
        $(".img2-center").animate({bottom:"86px"},900);
        $(".img2-right").animate({right:"150px"},1150);
       
    }
    if(index == 3){
        $(".img3-txt1").addClass('active');
        $(".img3-txt").addClass('active');
        $(".img3-bg1").animate({bottom:"104px"},1000);
        $(".img3-bg2").animate({bottom:"88px"},1500);
        $(".img3-bg3").animate({bottom:"141px"},1400);
        $(".img3-p1").fadeIn(3000);
       
    }
    if(index == 4){
        
        $(".img4-txt").addClass('active');
        $(".img4-txt1").addClass('active');
        $(".s4-left1").animate({left:"148px"},1200);
        $(".s4-left2").fadeIn(2600);
        $(".s4-right1").animate({right:"148px"},1200);
        $(".s4-right2").fadeIn(2600);
    }
    if(index == 5){
        $(".img5-txt").addClass('active');
        $(".img5-txt1").addClass('active');
        $(".img5-p1").fadeIn(2000);
        $(".img5-p2").fadeIn(2000);
        $(".img5-xiaocao").slideDown(2000);
        $(".img5-yudi").fadeIn(2000);
        $(".img5-l").fadeIn(1000);
        $(".img5-m").fadeIn(3000);
        $(".img5-s").fadeIn(5000);

    }
    if(index == 6){
        $(".img6-txt").addClass('active');
        $(".img6-txt1").addClass('active');
        $(".img6-btn").animate({bottom:"191px"},1400);
    }
   
},
onLeave:function(index,direction){
    if(index == 1){
        $(".img1-logo").animate({top:"-5%"},300);
        $(".img1-slogan").removeClass('active');
        $(".img1-1bg").animate({bottom:"-70%"},300);
        $(".img1-2bg").animate({bottom:"-67%"},300);
        $(".img1-3bg").animate({bottom:"-60%"},300);

    }
    if(index == 2){
        $(".img2-txt1").removeClass('active');
        $(".img2-txt").removeClass('active');
        $(".img2-left").animate({left:"-186px"},300);
        $(".img2-center").animate({bottom:"-410px"},300);
        $(".img2-right").animate({right:"-250px"},300);

    }
   if(index == 3){
        $(".img3-txt1").removeClass('active');
        $(".img3-txt").removeClass('active');
        $(".img3-bg1").animate({bottom:"-500px"},300);
        $(".img3-bg2").animate({bottom:"-500px"},300);
        $(".img3-bg3").animate({bottom:"-500px"},300);
        $(".img3-bg3").animate({bottom:"-500px"},300);
        $(".img3-p1").fadeOut(300);
    }
      if(index == 4){
        
        $(".img4-txt").removeClass('active');
        $(".img4-txt1").removeClass('active');
        $(".s4-left1").animate({left:"-248px"},300);
        $(".s4-left2").fadeOut(300);
        $(".s4-right1").animate({right:"-248px"},300);
        $(".s4-right2").fadeOut(300);
    }
      if(index == 5){
        $(".img5-txt").removeClass('active');
        $(".img5-txt1").removeClass('active');
        $(".img5-p1").fadeOut(100);
        $(".img5-p2").fadeOut(100);
        $(".img5-yudi").fadeOut(100);
        $(".img5-xiaocao").slideUp(100);

        $(".img5-l").fadeOut(100);
        $(".img5-m").fadeOut(100);
        $(".img5-s").fadeOut(100);

        
    }
    if(index == 6){
        $(".img6-txt").removeClass('active');
        $(".img6-txt1").removeClass('active');
        $(".img6-btn").animate({bottom:"-290px"},100);
    }
} });
    // $(".s1 .img1-logo").animate({top:'300px'})
});
 