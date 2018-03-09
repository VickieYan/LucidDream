$(function(){
	var game = new Game();
	var blood = new Blood();
	var wolf = new Wolf();
	var timer;
	/*开启游戏*/
	$('.start').on('click',function(){
		$(this).hide();
		game.init();//界面初始化
		/*多次产生狼类*/
		timer = setInterval(function(){
			if($('.wolf>img').length == 0){
				wolf.creatWolf();
			}
		},100)
	})
	
	/*计算分数*/
	var score = 0
	$('.score').html(score);
	
	
	
	/*主函数*/
	function Game(){
		this.init = function(){
			blood.init();//初始化血块
			wolf.init();//初始化狼类
		}
	}
	/*--------------------------------------------------*/
	/*血条类*/
	function Blood(){
		var _this = this;
		_this._width = 180;
		this.init = function(){
			$('.blood').width(_this._width+"px");
			_this.timer = setInterval(_this.run,1000);//打开定时器
		}
		this.run = function(){
			if(_this._width<=0){
				clearInterval(_this.timer);
				$('.end').show();
				clearInterval(timer);
				clearInterval(wolf.timer1);
				clearInterval(wolf.timer2);
				clearInterval(wolf.timer3);
			}
			_this._width -= 10;
			$('.blood').width(_this._width+"px");
		}
		
	}
	/*血条类------------------------------------------------*/
	/*狼类*/
	function Wolf(){
		var _this = this;
		this.type = null;//0h灰太狼1x小灰灰
		this.arrPos = [
			{left:"98px",top:"115px"},
			{left:"17px",top:"160px"},
			{left:"15px",top:"220px"},
			{left:"30px",top:"293px"},
			{left:"122px",top:"273px"},
			{left:"207px",top:"295px"},
			{left:"200px",top:"211px"},
			{left:"187px",top:"141px"},
			{left:"100px",top:"185px"}
		];
		this.init = function(){
			_this.creatWolf();
		}
		/*生成一个会动能挨打的狼(好坏随机)*/
		this.creatWolf = function(){
			//随机位置
			var r = parseInt(Math.random()*9);
			var pos = _this.arrPos[r];
			$('.wolf').css(pos);
			//随机好坏
			var r2 = parseInt(Math.random()*11);//0~10
			if(r2 <=8 ){
				_this.type = "h";//灰太狼
			}else{
				_this.type = "x";//小灰灰
			}
			var n = 0;
			//上升过程
			var $img = $('<img>').appendTo('.wolf');
			_this.timer1 = setInterval(function(){
				if(n>5){
					n--;//n=5
					//下降过程
					_this.timer2 = setInterval(function(){
						n--;
						if(n<0){
							$('.wolf').html('');
							$img.remove();
							clearInterval(_this.timer2);
							return;
						}
						$img.prop('src','img/'+_this.type+''+n+'.png');
					},100)
					clearInterval(_this.timer1);
					return;
				}
				//下降过程----
				$img.prop('src','img/'+_this.type+''+n+'.png');
				$img.attr('type',_this.type)
				n++;
			},100)
			//上升过程----
			
			/*判断敲打*/
			$img.on('click',function(){
				$img.unbind('click');
				if(_this.timer3){
					clearInterval(_this.timer3);
				}
				//判断好坏
				var a = $img.attr('type')
				if(a == "h"){
					score +=10;
					$('.score').html(score);
				}else{
					score -=10;
					$('.score').html(score);
				}
				//清楚所有定时器
				if(_this.timer1){
					clearInterval(_this.timer1);
				}
				if(_this.timer2){
					clearInterval(_this.timer2);
				}
				n=6;
				_this.timer3 = setInterval(function(){
					//TODO
					if(n>9){
						$img.remove();
						clearInterval(_this.timer3);
						return;
					}
					$img.prop('src','img/'+_this.type+''+n+'.png');
					n++;
				},100);
			})
			
		}
	}
	
})
