var header=
	'<div class="header">'+
		'<div class="top">'+
			'<div class="w-1170">'+
				'<div class="fl"><span class="tel"><i></i>服务热线：4000-000-308</span><span class="wb">关注微博：<a href=""><i></i></a></span></div>'+
				'<div class="fr">'+
					'<ul>'+
						'<li class="lg-res"><a href="./login.html" class="login">登录</a>/<a href="./register.html" class="register">注册</a></li>'+
						'<li class="user"><a href="./accout.html" class="tel">159****2479</a><a href="javascript:outlogin()" class="login">退出</a></li>'+
						'<li><a href="./mobile.html" class="app"><i></i>APP移动客户端</a></li>'+
						'<li><a href="./help.html">帮助中心</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="nav">'+
			'<div class="w-1170">'+
				'<div class="logo fl">'+
					'<a href="./index.html"><img src="./images/logo.png" alt=""></a>'+
				'</div>'+
				'<ul class="nav-list fr">'+
					'<li data-nav="index"><a href="./index.html">首页</a></li>'+
					'<li data-nav="manager"><a href="./manager.html">我要理财</a></li>'+
					'<li data-nav="borrow"><a href="./borrow.html">我要借款</a></li>'+
					'<li data-nav="about"><a href="./about.html">关于我们</a></li>'+
					'<li data-nav="account"><a href="./account.html">我的账户</a></li>'+
				'</ul>'+
			'</div>'+
		'</div>'+
	'</div>';
var footer=
	'<div class="footer">'+
		'<div class="w-1170">'+
			'<dl>'+
				'<dt>关于我们</dt>'+
				'<dd><a href="">丫丫介绍</a></dd>'+
				'<dd><a href="">团队介绍</a></dd>'+
				'<dd><a href="">发展历程</a></dd>'+
				'<dd><a href="">联系我们</a></dd>'+
			'</dl>'+
			'<dl>'+
				'<dt>帮助中心</dt>'+
				'<dd><a href="">注册登录</a></dd>'+
				'<dd><a href="">法律保障</a></dd>'+
				'<dd><a href="">新手引导</a></dd>'+
				'<dd><a href="">投资者帮助</a></dd>'+
			'</dl>'+
			'<dl>'+
				'<dt>安全保障</dt>'+
				'<dd><a href="">风险管理</a></dd>'+
			'</dl>'+
			'<div class="ewm-g">'+
				'<ul>'+
					'<li>'+
						'<div class="img">'+
							'<img src="http://www.51duoduo.com/images/app_ewm.png" alt="">'+
						'</div>'+
						'<p>丫丫理财服务号</p>'+
					'</li>'+
					'<li>'+
						'<div class="img">'+
							'<img src="http://www.51duoduo.com/images/app_ewm.png" alt="">'+
						'</div>'+
						'<p>丫丫理财公众号</p>'+
					'</li>'+
				'</ul>'+
			'</div>'+
			'<div class="contact">'+
				'<div class="text">客服热线</div>'+
				'<div class="tel">4000-000-308</div>'+
				'<div class="work-day">周一至周日 9:30-21:00</div>'+
				'<div class="text">客服邮箱</div>'+
				'<div class="email">ddlc@51duoduo.com</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'<div class="copyright">'+
		'<span>Copyright ©浙ICP证 B2-20160069 浙江丫丫投资信息服务有限公司</span>'+
		'<span>'+
			'<img src="./images/police_icon.png" alt="">浙公安网备<a href="">33010402002777</a>号'+
		'</span>'+
	'</div>';
$(function(){
	$("#header").append(header);
	$("#footer").append(footer);
})			
