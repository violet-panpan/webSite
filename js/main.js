function setCookie(name,value,iDay){
  var oDate=new Date();
  oDate.setDate(oDate.getDate()+iDay);
  if(navigator.userAgent.indexOf('MSIE')>0){
    document.cookie=name+'='+value+';expires='+oDate.toGMTString()+";path=/";
  }else{
    document.cookie=name+'='+value+';expires='+oDate+";path=/";
  }
}
function getCookie(name){
  var arr=document.cookie.split("; ");
  for(var i=0;i<arr.length;i++){
    var arr2=arr[i].split("=");
    if(arr2[0]==name){
      return arr2[1]
    }
  }
  return '';
}
function deleteCookie(name){
  setCookie(name,1,-1)
}

function GetParams(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null) return unescape(r[2]); 
    return "";
}

function F(){};
var objFun=function(){};
F.prototype = objFun.prototype;
objFun.prototype = new F();
objFun.prototype.constructor = objFun;

objFun.prototype.alert=function(msg,callback){
	var alert=
	'<div id="alert-box">'+
		'<dov class="bg"></dov>'+
		'<div class="box">'+
			'<div class="title">提示 <div class="close fr"></div></div>'+
			'<div class="msg"><p>'+msg+'</p></div>'+
			'<div class="btn-group">'+
				'<div class="sure btn">确定</div>'+
			'</div>'+
		'</div>'+
	'</div>';
	$("body").append(alert);
	$("#alert-box").fadeIn(300);
	$("#alert-box .close").bind("click",function(){
		$("#alert-box").fadeOut(300);
		setTimeout(function(){
			$("#alert-box").remove();
		},300)
	})
	$("#alert-box .sure").bind("click",function(){
		$("#alert-box").remove();
		callback&&callback();
	})
}


objFun.prototype.swBanner=function(defaults){
	var defaults=defaults?defaults:{time:4000};
	var d=defaults.time;
	var oLi=$(".imgList li");
	var len=oLi.length;
	var oGroup=$(".btn-group")
	var oBtn=oGroup.find("span");
	var index=0;
	var timer=null;
	//图片轮换
	function showImg(n){
	 oLi.eq(n).addClass("active").siblings().removeClass("active");
	 oBtn.eq(n).addClass("current").siblings().removeClass("current");
	}
	//自动播放
	function player(){
		timer=setInterval(function(){
			index++;
			if(index>len-1){
				index=0;
			}
		   showImg(index);
		},d)
	}
	oBtn.click(function(){
		if(!(oLi.is(":animated"))){
			index=$(this).index();
			showImg(index);
		}
	});
	oGroup.hover(function(){
		clearInterval(timer);
	},function(){
		player();
	});
	player();
}
objFun.prototype.notice=function(){
	var scroll=$(".notice .list ul");
	var li=scroll.find("li");
	var len=scroll.find("li").length;
	var clone=li.clone().appendTo(scroll)
	var timer=null;
	var i=0;
	function autoScroll(){
		timer=setInterval(function(){
			if(i<len){
				i++;
			}else{
				scroll.css({
					marginTop:0
				})
				i=1;
			}
			scroll.animate({
				marginTop:-i*40
			})	
		},4000);
	}
	autoScroll();
	scroll.hover(function(){
		clearInterval(timer);
	},function(){
		autoScroll();
	})
}
objFun.prototype.numberScroll=function(){
	var group=$(".info-bar .num-group");
	var number=group.find(".number");
	number.each(function(){
		var num=$(this).attr("data-number")*1;
		$(this).css({
			backgroundPosition:"0 "+-40*num+'px'
		})
	})
}

objFun.prototype.friendlink=function(callback){
	$.fn.imgscroll = function(o){
	  var defaults = {
	    speed: 10,
	    step: 1
	  };
	  o = $.extend(defaults, o);
	  return this.each(function(){
	    var aLi = $("li", this);
	    var aWidth = 0;
	    for(var i=0; i<aLi.size(); i++){
	    	aWidth += aLi.eq(i).outerWidth(true);
	    }
	    //循环所需要的元素
	    aLi.parent().empty().append(aLi.clone()).append(aLi.clone()).append(aLi.clone());
	    aLi = $("li", this);
	    //滚动
	    var ascroll = 0;
		function autoPlay(){
			ascroll += o.step;
			if(ascroll > aWidth){
				ascroll = 0;
				aLi.parent().css({ left : -ascroll });
				ascroll += o.step;
			}
			aLi.parent().css({ 
				left : -ascroll 
			});
		}
	    //开始
	    var move = setInterval(function(){ 
	    	autoPlay(); 
	    }, o.speed);
	    aLi.parent().hover(function(){
	      clearInterval(move);
	    },function(){
	      clearInterval(move);
	      move = setInterval(function(){ 
	      	autoPlay(); 
	      }, o.speed);
	    });
	  });
	};
	callback&&callback();
}
objFun.prototype.slide=function(){
	var index=0;
	var slide=$(".side ul span");
	var oLi=$(".side ul li");
	oLi.hover(function(){
		index=$(this).index();
		slide.stop(true,true).animate({
			height:64,
			top:index*64
		},200)
	},function(){
		slide.stop(true,true).animate({
			height:0,
			top:index*64+32
		},200)
	})
}

//获取验证码;
objFun.prototype.getCode=function(obj,callback){
	var str="获取验证码";
	var baseNum=60;
	var timer=null;
	var oTime=new Date().getTime();
	var clickFlag=true;
	if(window.localStorage){
		if(window.localStorage.getItem("timeString")){
			var total=60-Math.ceil((oTime-localStorage.getItem("timeString"))/1000);
			if(total>baseNum*1000){
				window.localStorage.removeItem("timeString");
			}else{
				baseNum=total;
				autoPlay();
			}
		}
	}else{
		if(getCookie("timeString")){
			var total=60-Math.ceil((oTime-getCookie("timeString"))/1000);
			if(total>baseNum*1000){
				deleteCookie("timeString");
			}else{
				baseNum=total;
				autoPlay();
			}
		}
	}
	function autoPlay(){
		if(clickFlag){
			obj.addClass("disabled").text(baseNum+"s后重新发送");
			timer=setInterval(function(){
				if(baseNum>0){
					baseNum--;
					obj.addClass("disabled").text(baseNum+"s后重新发送");
				}else{
					baseNum=60;
					obj.removeClass("disabled").text(str);
					if(window.localStorage){
						window.localStorage.removeItem("timeString");
					}else{
						deleteCookie("timeString")
					}
					clearInterval(timer);
					clickFlag=true;
				}
			},1000);
			clickFlag=false;
			return clickFlag;
		}	
	}
	obj.bind("click",function(){
		if(clickFlag){
			var timeString=new Date().getTime();
			if(window.localStorage){
				window.localStorage.setItem("timeString",timeString);
			}else{
				setCookie("timeString",timeString,1)
			}
			autoPlay();
			//点击获取验证码按钮，执行回调;
			callback&&callback();
		}
	})
}