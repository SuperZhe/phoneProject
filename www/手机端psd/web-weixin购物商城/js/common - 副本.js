
function BtHide(id) {
    var Div = document.getElementById(id);
    if (Div) {
        Div.style.display = "none";
    }
}

function BtShow(id) {
    var Div = document.getElementById(id);
    if (Div) {
        Div.style.display = "block";
    }
}

function BtPopload(showId ,topId) { //蒙版生成div
    var h = Math.max(document.documentElement.offsetHeight, document.documentElement.clientHeight) - document.getElementById(topId).offsetHeight + 'px';
    var h1= Math.max(document.documentElement.offsetHeight, document.documentElement.clientHeight) - document.getElementById(topId).offsetHeight-4+ 'px';
    var w = document.documentElement.scrollWidth + 'px';
    var t=document.getElementById(topId).offsetHeight + 'px';
    var popCss = "background:#000;opacity:0.6;filter:alpha(opacity=60);position:absolute;left:0;overflow:hidden;"

    //生成遮罩层
    var exsit = document.getElementById("popBox");
    if (!exsit) {
        pop_Box = document.createElement("div");
        pop_Box.id = "popBox";
        document.getElementsByTagName("body")[0].appendChild(pop_Box);
        pop_Box.style.cssText = popCss;
        pop_Box.style.zIndex = "10";
        pop_Box.style.height = h;
        pop_Box.style.width = w;
        pop_Box.style.top=t;
    }

    //生成箭头
    var icoArrow=document.getElementById("iconArrow");
    if (!icoArrow) {
        icon_Arrow = document.createElement("span");
        icon_Arrow.id = "iconArrow";
        document.getElementById(topId).appendChild(icon_Arrow);
     }

    //显示隐藏的图层
    BtShow("popBox");
    BtShow(showId);
    BtShow("iconArrow");
    pop_Win = document.getElementById(showId);
    pop_Win.style.zIndex = "11";
    pop_Win.style.top = t;
    pop_Win.style.height=h1;
}

function fnNav(Bid, Did ,topId) {
    var UploadBtn = document.getElementById(Bid);
    var navDiv= document.getElementById(Did);

    if (UploadBtn) {
        UploadBtn.onclick = function() {
            if(navDiv.style.display=='block'){
                BtHide(Did);
                BtHide("iconArrow");
                BtHide("popBox");
            }else{
                BtPopload(Did ,topId);
            }
            return false;
        }
    }
}


/*购物车结算*/
function fnCounts(){

    $('.bs_wapper .checkBox').click(function(){
        $this=$(this);
        //选中当前
        $this.toggleClass('checked');

        //判断当前店铺的全选按钮是否选中
        var b=true;
        $this.parentsUntil('.bs_carts').parent().find('.bs_wapper').each(function(){
            b = $(this).find('.checkBox').attr('class')=='checkBox' ? false : true;
            if(!b){ return false;}
        });
        if(b){
            $this.parentsUntil('.bs_carts').parent().find('.bs_name .checkBox').addClass('checked');
        }else{
            $this.parentsUntil('.bs_carts').parent().find('.bs_name .checkBox').removeClass('checked');
        }

        fnAllSelect();
        fnTotal();

    });

    //选中当前店铺下的全部商品
    $('.bs_name .checkBox').click(function(){
        $this=$(this);
        if($this.attr('class')=='checkBox'){
            $this.parentsUntil('.bs_carts').parent().find('.checkBox').addClass('checked');
        }else{
            $this.parentsUntil('.bs_carts').parent().find('.checkBox').removeClass('checked');
        }

        fnAllSelect();
        fnTotal();

    });

    //全选
    $('.billing .checkBox').click(function(){
        $this=$(this);
        if($this.attr('class')=='checkBox'){
            $('.checkBox').addClass('checked');
        }else{
            $('.checkBox').removeClass('checked');
        }
        fnTotal();

    });

}

//判断是否全选
function fnAllSelect(){
    var s=true;
    $('.bs_name .checkBox').each(function(){
        s=$(this).attr('class')=='checkBox' ? false: true;
        if(!s){ return false;}
    });
    if(s) {
        $('.billing .checkBox').addClass('checked');
    }else{
        $('.billing .checkBox').removeClass('checked');
    }
}

function fnTotal(){
    var sum=0;  //总金额

    $('.bs_carts').each(function(){
        var sum1=0; //每家店铺的应付金额
        $this=$(this);

        $this.find('.bs_wapper .checked').each(function(){
            var sum2=0; //每种商品的应付金额
            var nPrice=parseFloat($(this).parent().find('.price span').text());  //单价
            var nNum=parseInt($(this).parent().find('.num').text());  //数量
            sum2=parseFloat(nPrice*nNum);
            sum1+=sum2;
        });

        sum+=sum1;
        $this.find('.cont .red span').text(sum1.toFixed(2));

    });

    $('.billing .price').text(sum.toFixed(2));

}


//数量加减
function fnCountNum(){
    $('.btn_num').each(function() {
        $this=$(this);
        var num=parseInt($this.find('.num').text());

        if(num==1){
            $this.find('.less').addClass('failed');
            $this.find('.less img').remove();
        }

        //减
        $this.find('.less').click(function(){
            if(num==1) return false;
            num=num-1;
            $(this).parent().find('.num').text(num);
            if(num==1){
                $(this).addClass('failed');
                $(this).find('img').remove();
                fnTotal();
                return false;
            }
            fnTotal();
        });

        //加
        $this.find('.add').click(function() {
            num=num+1;
            $(this).parent().find('.num').text(num);
            if($(this).parent().find('.less').html()==''){
                $(this).parent().find('.less').removeClass('failed');
                $(this).parent().find('.less').append('<img src="images/btn_less.jpg">');
            }
            fnTotal();
        });

    });
}

//选择商品属性
function fnGetSelected(){
    $('.options').each(function() {
        var $this=$(this);
        $this.click(function(){
            if(!!$(this).hasClass("cur")){
                $(this).removeClass('cur');
                $(this).find('.selected').remove();
            }else{
                $(this).siblings(".options").removeClass('cur');
                $(this).siblings(".options").find('.selected').remove();
                $(this).addClass("cur");
                $(this).append('<span class="selected"><img src="images/icon_select.png"></span>');
            }
        });

    });
}
