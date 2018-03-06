$(function(){
	/*logo加载start*/
	$('.logo').on('mouseover',function(){
		$(this).addClass('active')
		var _this = this;
		setTimeout(function(){
			$(_this).removeClass('active');
		},1000)
	})
	/*logo加载end*/
	
	/*设置球体的高宽start*/
	var width = 515/1920 * document.body.clientWidth;
	var _width = 358/1920 *  document.body.clientWidth;
	var bubble = 288/1920 *document.body.clientWidth;
	var bub_con = 1760/1920 * document.body.clientWidth;
	$('#bigBall').css({
		"width":width+"px",
		"height":width+"px"
	});
	$('#smallBall').css({
		"width":_width+"px",
		"height":_width+"px"
	});
	$('#bubble').css({
		"width":bubble+"px",
		"height":bubble+"px"
	});
	$('.bub_con').css({
		"width":bub_con+"px"
	});
	$(window).resize(function(){
		var width =515/1920 * document.body.clientWidth;
		var _width = 358/1920 *  document.body.clientWidth;
		var bubble = 288/1920 *document.body.clientWidth;
		$('#bigBall').css({
			"width":width+"px",
			"height":width+"px"
		});
		$('#smallBall').css({
			"width":_width+"px",
			"height":_width+"px"
		});
		$('#bubble').css({
			"width":bubble+"px",
			"height":bubble+"px"
		});
	})
	/*设置球体的高宽end*/
	
	/*点击more向下滚动start*/
	$('.more').on('click',function(){
		$('html,body').animate({
			scrollTop:"1050px"
		},1000)
	});
	$('#nav1').on('click',function(){
		$('html,body').animate({
			scrollTop:"1050px"
		},1000)
	});
	/*点击more向下滚动end*/
	
	/*控制section1的透明度start*/
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var opacity = 1 - scrollTop/1050;
		console.log(opacity)
		$('.section1').css({
			"opacity":opacity
		})
	})
	/*控制section1的透明度end*/
	
	/*设置流星雨的宽度start*/
	$('.meteor1').css({
		"width":161/1920 * document.body.clientWidth +"px",
		"top":190/1920 * document.body.clientWidth +"px",
		"left":380/1920 * document.body.clientWidth +"px"
	});
	$('.meteor2').css({
		"width":158/1920 * document.body.clientWidth +"px",
		"top":210/1920 * document.body.clientWidth +"px",
		"left":1480/1920 * document.body.clientWidth +"px"
	});
	$('.meteor3').css({
		"width":247/1920 * document.body.clientWidth +"px",
		"top":790/1920 * document.body.clientWidth +"px",
		"left":260/1920 * document.body.clientWidth +"px"
	});
	$('.meteor4').css({
		"width":118/1920 * document.body.clientWidth +"px",
		"top":720/1920 * document.body.clientWidth +"px",
		"left":1390/1920 * document.body.clientWidth +"px"
	});
	$('.meteor5').css({
		"width":161/1920 * document.body.clientWidth +"px",
		"top":649/1920 * document.body.clientWidth +"px",
		"left":380/1920 * document.body.clientWidth +"px"
	});
	$('.meteor6').css({
		"width":118/1920 * document.body.clientWidth +"px",
		"top":1690/1920 * document.body.clientWidth +"px",
		"left":220/1920 * document.body.clientWidth +"px"
	});
	$('.meteor7').css({
		"width":161/1920 * document.body.clientWidth +"px",
		"top":1750/1920 * document.body.clientWidth +"px",
		"left":190/1920 * document.body.clientWidth +"px"
	});
	$('.stellar1').css({
		"width":80/1920 * document.body.clientWidth +"px",
		"top":"49px",
		"left":1350/1920 * document.body.clientWidth +"px"
	});
	$('.stellar2').css({
		"width":70/1920 * document.body.clientWidth +"px",
		"top":"160px",
		"left":40/1920 * document.body.clientWidth +"px"
	});
	$('.stellar3').css({
		"width":90/1920 * document.body.clientWidth +"px",
		"top":"500px",
		"left":380/1920 * document.body.clientWidth +"px"
	});
	$('.stellar4').css({
		"width":120/1920 * document.body.clientWidth +"px",
		"top":"600px",
		"left":1370/1920 * document.body.clientWidth +"px"
	});
	$(window).resize(function(){
		$('.meteor1').css({
			"width":161/1920 * document.body.clientWidth +"px",
			"top":190/1920 * document.body.clientWidth +"px",
			"left":380/1920 * document.body.clientWidth +"px"
		});
		$('.meteor2').css({
			"width":158/1920 * document.body.clientWidth +"px",
			"top":210/1920 * document.body.clientWidth +"px",
			"left":1480/1920 * document.body.clientWidth +"px"
		});
		$('.meteor3').css({
			"width":247/1920 * document.body.clientWidth +"px",
			"top":790/1920 * document.body.clientWidth +"px",
			"left":260/1920 * document.body.clientWidth +"px"
		});
		$('.meteor4').css({
			"width":118/1920 * document.body.clientWidth +"px",
			"top":720/1920 * document.body.clientWidth +"px",
			"left":1390/1920 * document.body.clientWidth +"px"
		});
		$('.meteor5').css({
			"width":161/1920 * document.body.clientWidth +"px",
			"top":649/1920 * document.body.clientWidth +"px",
			"left":380/1920 * document.body.clientWidth +"px"
		});
		$('.meteor6').css({
			"width":118/1920 * document.body.clientWidth +"px",
			"top":1690/1920 * document.body.clientWidth +"px",
			"left":220/1920 * document.body.clientWidth +"px"
		});
		$('.meteor7').css({
			"width":161/1920 * document.body.clientWidth +"px",
			"top":1750/1920 * document.body.clientWidth +"px",
			"left":190/1920 * document.body.clientWidth +"px"
		});
		$('.stellar1').css({
			"width":80/1920 * document.body.clientWidth +"px",
			"top":"49px",
			"left":1350/1920 * document.body.clientWidth +"px"
		});
		$('.stellar2').css({
			"width":70/1920 * document.body.clientWidth +"px",
			"top":"160px",
			"left":40/1920 * document.body.clientWidth +"px"
		});
		$('.stellar3').css({
			"width":90/1920 * document.body.clientWidth +"px",
			"top":"500px",
			"left":380/1920 * document.body.clientWidth +"px"
		});
		$('.stellar4').css({
			"width":120/1920 * document.body.clientWidth +"px",
			"top":"600px",
			"left":1370/1920 * document.body.clientWidth +"px"
		});
	});
	/*设置流星雨的宽度end*/
}());
