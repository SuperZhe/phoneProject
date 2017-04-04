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
    scrollnumber("#bigphone",'fadeInDown1 animated',0);  
    scrollnumber(".n",'fadeInUp1 animated',0);  
    scrollnumber(".show1-box h2",'fadeInRight animated',0);  
    scrollnumber(".show1-list li",'pulse animated',0);  
    scrollnumber(".show2-box",'fadeInUp1 animated',0);  
    scrollnumber(".show3 ul li",'flipInX animated',0);  
    scrollnumber(".txt1 h3",'fadeInDown animated',0);  
    scrollnumber(".txt a",'fadeInUp animated',0);  
    scrollnumber(".show5 .main h2",'rotateIn animated',0);  
    

}  
      
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  

   