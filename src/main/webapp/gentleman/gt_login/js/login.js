var login = {
	init:function(){
		var me = this;
		me.login();
	},

    /**
    用户登录
    **/
	login:function (){
		$("#login").click(function () {
            //window.location.href="gt_portal/home/index.html";
            var number = $("#number").val();
            //获取传入的参数并对密码加密
            $("#password").val($.base64.encode($("#password").val()));
            var password = $("#password").val();
            var params = {};
            params.account = number;
            params.password = password;
            console.log(params);
            if(number == null || number == "" || password == null || password == ""){
                Utils.alert_message("登录信息","账户名或密码不允许为空！");
            }else {
                //请求后台
                Invoker.invokeRequest("loginController/login",params,function login(data){
                    if(data.res_code == "004"){
                        Utils.alert_message("登录信息","用户名或密码错误");
                        $("#password").val("");
                    }
                    if(data.res_code == "1000"){
                        //进入用户页面
                        window.location.href="gt_portal/home/index.html";
                    }if(data.res_code == "2000"){
                        //管理员页面
                        window.location.href="gt_manage/home/index.html";
                    }if(data.res_code == "003"){
                        //封号提示
                        Utils.alert_message("登录信息",data.res_message);
                    }/*else {
                        Utils.alert_message("登录信息","登录失败！");
                    }*/
                    console.log(data);
                });
            }
        });

		$("#visiter").click(function () {
            window.location.href="gt_portal/home/index.html";
        });

		$(".login_way_left").mouseover(function () {
            $(".login_way_left").css('background','#8B8682');
        });
        $(".login_way_left").mouseleave(function () {
            $(".login_way_left").css('background','#CDC5BF');
        });
        $(".login_way_right").mouseover(function () {
            $(".login_way_right").css('background','#8B8682');
        });
        $(".login_way_right").mouseleave(function () {
            $(".login_way_right").css('background','#CDC5BF');
        });
	}
};

$(function (){
	login.init();
});