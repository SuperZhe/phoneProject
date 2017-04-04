$(".main").sliphover({
	target:".help a"
})

$(".helpfaq h5").click(function(){
	var index=$(this).index('h5');
	$(".helpfaq p").eq(index).slideToggle(500);
	$(".helpfaq h5 span").eq(index).toggleClass("icon1");
})
