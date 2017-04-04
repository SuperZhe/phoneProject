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
    scrollnumber("#download",'fadeInDown2 animated',0);  
    scrollnumber("#d-phone",'fadeInUp1 animated',0);  
    scrollnumber(".d-n",'zoomIn animated',0);  
      
    

}  
      
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  

   