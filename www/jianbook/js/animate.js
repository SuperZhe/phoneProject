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
    scrollnumber("#h-logo",'flipInY animated',0);  
    scrollnumber(".h-phone",'fadeInUp1 animated',0);  
    scrollnumber(".h-title",'zoomInDown animated',0);  
    scrollnumber(".h-p",'pulse animated',0);  
    scrollnumber(".h-four",'swing animated',0);  
      
    

}  
      
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  

   