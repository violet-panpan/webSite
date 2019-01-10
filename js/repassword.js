$(function(){
	var register=new objFun();
	var phone=$("#phone");
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
	submit.bind("click",function(){
		if(phone.val()==""){
			register.alert("请输入手机号码");
			return;
		}
		if(code.val()==""){
			register.alert("请输入验证码");
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
	})
})