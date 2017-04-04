function scrollnumber(element,cssname,offset){  
    var a,b,c,d;  
    d=$(element).offset().top;  
    a=eval(d + offset);  
    b=$(window).scrollTop();   
    c=$(window).height();  
    if(b+c>a){  
        $((element)).addClass((cssname));  
    }  
}  
  
function scrollfun(){  
    scrollnumber("#a-txt,#a-txt1,#a-txt2,#a-txt3",'fadeInUp1 animated',0);  
    scrollnumber(".a-show",'swing animated',0);  
    scrollnumber(".a-img",'pulse animated',0);  
    scrollnumber(".at-img",'fadeIn animated',0);  
    scrollnumber(".honor-img",'flip animated',0);  
    scrollnumber(".t3-img",'zoomInDown animated',0);  
     
    

}  
      
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  


$(".tab-nav a").click(function(){
    var count=$(this).parent("td").index();
   $(this).addClass("active").parent("td").siblings().find("a").removeClass("active");
      $(".a-container .about-page").eq(count).show().siblings().hide();
})

   