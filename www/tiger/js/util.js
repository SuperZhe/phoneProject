define(function(require, exports, module) {

    var content = require('../view/content.html');
    var _html = _.template(content);

    var Util = {
        nav: function() {
            // $(".nav-txt a").hover(function(){
            //  $(this).css({color:"#ffe100"},1000);
            // },function(){
            //  $(this).css({color:"#fff"},1000);
            // })
            // $(".nav-two").hover(function(){
            //  $(".nav-two").animate({
            //  background:"#000",color:"#ffe100"},1000)
            // },function(){
            //  $(this).css({
            //  background:"#ffe100",color:"#000"})
            // });
            $(".nav-txt a").click(function(){
                // alert("hef");
                 $(".nav-txt a").eq($(this).index()).addClass("active").siblings().removeClass("active");
            });
            $(".nav-three").hover(function() {
                $(".others").slideDown(300)
                $(this).css({ color: "#ffe100" })
                $(".sanjiao").css({ borderTopColor: "#ffe100" })

            }, function() {

                $(this).css({ color: "#fff" })
                $(".sanjiao").css({ borderTopColor: "#fff" })

            });
            $(".nav-three").hover(function() {
                $(".others").show();

            }, function() {
                $(".others").slideUp(300)
            })
            $(".others span").hover(function() {

                $(this).css({ color: "#ffe100" })
            }, function() {
                $(this).css({ color: "#fff" })

            })

        },
        showSlide: function(arr) {
            $("#showContent").html(_html({
                imgurl: arr
            }));
            this.interval();
        },
        slideImage: function() {
            var count = 0;
            var timer = setInterval(function() {
                count++;
                if (count == 3) {
                    count = 0;
                }
                $(".abc").eq(count).fadeIn().siblings().hide();
                $(".sh").css({ display: "block" });
            }, 2500)
        },
        slide: function() {
            $(".next").click(function() {
                $(".ul").animate({ "left": "-320px" }, 400)
            })
            $(".prev").click(function() {
                $(".ul").animate({ "left": "0px" }, 400)
            })
            $(".kefu span").hover(function() {
                $(this).animate({ backgroundPositionY: "-22px" }, 500)
            }, function() {
                $(this).animate({ backgroundPositionY: "0px" }, 500)

            })
        },
        interval: function() {
            var timer = setInterval(runloop, 3000);
            var count = 0;

            function runloop() {
                count++;
                if (count == 4) {
                    count = 0;
                }
                $(".banner img").eq(count - 1).fadeIn().siblings().fadeOut();
                $(".icon span ").eq(count).addClass("active").siblings().removeClass("active");
                // $(".banner-txt").eq(count-1).hide();
                $(".banner-txt").eq(count).css({ display: "block" }).find('h2').addClass('animated fadeInDown').siblings('a').addClass('animated fadeInUp');
                $('.banner-txt').eq(count).siblings('.banner-txt').hide()

                // $(".banner-txt a").hide();
            }
            $(".icon span").hover(function() {
                clearInterval(timer);
                var i = $(this).index();
                $(".banner img").eq(i - 1).show().siblings().hide();
                $(".icon span").eq(i).addClass("active").siblings().removeClass("active");
                $(".banner-txt").eq(count).css({ display: "block" }).find('h2').addClass('animated fadeInDown').siblings('a').addClass('animated fadeInUp');
                $('.banner-txt').eq(count).show().siblings('.banner-txt').hide()


            }, function(e) {
                timer = setInterval(runloop, 3000);
                count = $(this).index();
            })
        }

    }
    module.exports = Util;
})
