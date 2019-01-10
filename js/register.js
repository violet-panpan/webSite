$(function(){
	var register=new objFun();
	var phone=$("#phone");
	var tjPhone=$("#tj-phone");
	var password=$("#password");
	var rptPassword=$("#rpt-password");
	var code=$("#code");
	var getBtn=$("#get-code");
	var submit=$("#submit");
	var str="获取验证码";
	var baseNum=60;
	var timer=null;
	var oTime=new Date().getTime();
	var clickFlag=true;
	var agree=true;
	var checkBox=$(".form p .check");
	var agreementBtn=$(".form p span");
	var agreement=$("#agreement .agree-box");
	var close=$("#agreement .close");
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
			getBtn.addClass("disabled").text(baseNum+"s后重新发送");
			timer=setInterval(function(){
				if(baseNum>0){
					baseNum--;
					getBtn.addClass("disabled").text(baseNum+"s后重新发送");
				}else{
					baseNum=60;
					getBtn.removeClass("disabled").text(str);
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
	getBtn.bind("click",function(){
		if(clickFlag){
			if(phone.val()==""){
				register.alert("请输入手机号码");
				return;
			}
			var timeString=new Date().getTime();
			if(window.localStorage){
				window.localStorage.setItem("timeString",timeString);
			}else{
				setCookie("timeString",timeString,1)
			}
			autoPlay();
		}
	})
	checkBox.bind("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			agree=false;
		}else{
			$(this).addClass("active");
			agree=true;
		}
		return agree;
	})
	agreementBtn.bind("click",function(){
		
	})
	submit.bind("click",function(){
		if(phone.val()==""){
			register.alert("请输入手机号码");
			return;
		}
		if(password.val()==""){
			register.alert("请设置登录密码");
			return;
		}
		if(rptPassword.val()==""){
			register.alert("请设置确认密码");
			return;
		}
		if(code.val()==""){
			register.alert("请输入验证码");
			return;
		}
		if(agree==false){
			register.alert("同意网站服务协议才能注册");
			return;
		}
	})
	$(window).bind("resize",function(){
		scrollBar();
	})
	$("#agreement").css({
		display:"block",
		top:-10000
	});
	setTimeout(function(){
		$("#agreement").css({
			display:"none",
			top:0
		});
	}, 1);
	function scrollBar(){
		var top=0;
		var scrollBl=0;
		var scrollBox=$("#agreement .scroll-box");
		var scrollCnt=$("#agreement .scroll");
		var scrollBar=$("#agreement .scroll-bar");
		var bar=scrollBar.find(".bar");
		var barBl=scrollBox.height()/scrollCnt.height();
		var wH=$(window).height();
		agreement.css({
			top:(wH-agreement.height())/2
		})
		bar.css({
			height:barBl*scrollBar.height()
		})
		$(".agree-cnt").bind("mousewheel DOMMouseScroll",function(e){
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
			if(delta<0){
				top+=100;
				if(top>(scrollCnt.height()-$(".scroll-box").height())){
					top=scrollCnt.height()-$(".scroll-box").height();
				}
			}else{
				top-=100;
				if(top<0){
					top=0;
				}
			}
			scrollBl=top/(scrollCnt.height()-scrollBox.height());
			scrollCnt.css({
				marginTop:-top
			})
			bar.css({
				top:scrollBl*(scrollBar.height()-bar.height())
			})
			return false;
		})

		agreementBtn.bind("click",function(){
			$("#agreement").fadeIn();
		})
		close.bind("click",function(){
			$("#agreement").hide();
		})
	}
	scrollBar();
})