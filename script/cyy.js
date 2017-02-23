$(".share .pic").cycle(
	{
		"fx":"blindX",
		speed:500,
		timeout:2000,
		pause:true,
		"before":function(){
			var index = $(this).index();
			$(".share .listpic li").eq(index).addClass("active-shadow").siblings().removeClass("active-shadow");
		}
	});
$(".share .list .listpic li").click(function(){
	var index = $(this).index();
	$(".share .pic").cycle(index);
	$(this).addClass("active-shadow").siblings().removeClass("active-shadow");
});

$(".share .pre img").click(function(){
	$(".share .pic").cycle("prev");
});

$(".share .next img").click(function(){
	$(".share .pic").cycle("next");
});


$(".share .commit img").click(function(){
	var src=$(this).attr("src");
	var result=(src=="images/share-commit.png")
	if(result){
		$(this).attr("src","images/share-commit-blue.png");
		$(".share .commit span").text("已收藏")
	}else{
		$(this).attr("src","images/share-commit.png")
		$(".share .commit span").text("收藏")
	}
})


$("#city").click(function (e) {
	SelCity(this,e);
});
$(".main-top-right .jbtn").click(function(){
	var n=$(this).next().val();
	var n=n-1;
	$(this).next().val(n);
	if(n<0){
		$(this).next().val(0);
}

})
$(".main-top-right .abtn").click(function(){
	var n=$(this).prev().val();
	var n=n+1;
	$(this).prev().val(n);
})
$(".share .num .sign-p").click(function(){
	var sign = $(this).text();
	var val = Number($("#pnum").val());
	if(sign=="-"){
		if(Number($("#pnum").val())>=1){
			$("#pnum").val(val-1);
		}else{
			$("#pnum").val(0);
		}
	}else if(sign=="+"){
		$("#pnum").val(val+1);
	}	
	
})
$(".share .num .sign-c").click(function(){
	var sign = $(this).text();
	var val = Number($("#cnum").val());
	if(sign=="-"){
		if(Number($("#cnum").val())>=1){
			$("#cnum").val(val-1);
		}else{
			$("#cnum").val(0);
		}
	}else if(sign=="+"){
		$("#cnum").val(val+1);
	}
})
$(window).scroll(function(){
	var totop=$(this).scrollTop();
	var navtop=$(".main_bottom .posbox").offset().top;
	// var daytop=$(".daysintro_left").offset().top;
	if(totop>navtop){
		$(".main_bottom #pos").addClass("posifix");
	}else{
		$(".main_bottom #pos").removeClass("posifix");
	}
	// if(top>daytop){
	// 	$("daysintro_left").addClass("posifix2");
	// }else{
	// 	$("daysintro_left").removeClass("posifix2");
	// }
})
$(".main_bottom #pos a").click(function(){
	var href = $(this).attr("href");
	var ht = $(href).offset().top;
	$("html,body").animate({scrollTop:ht},500)

	return false;//取消元素的默认行为
})

