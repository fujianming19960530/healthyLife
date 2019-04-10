var index = {
    init:function () {
        var me = this;
        me.code_info();
        me.clik();
    },

    //前端验证码
    code_info:function () {
        //获取验证码的后端地址
        var getCodeUrl="http://localhost:8888/healthyLife/loginController/checkCode";
        //为了防止浏览器缓存上次的验证码
        $("#code_img").attr('src',getCodeUrl+'?t='+ new Date().getTime()).show();
        $("#code_img").click(function(){this.src=getCodeUrl+'?t='+ new Date().getTime();});
    },

    //初始化点击事件
    clik : function () {
        var me = this;
        $("#login").bind("click", function () {
          me.login();
        }),
        $("#login_click").bind("click", function () {
            $("#account").val("");
            $("#password").val("");
            $("#code").val("");
        })
    },

    //登录方法
    login:function () {
        //var regex = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$";
        var account = $("#account").val();
        var password = $("#password").val();
        var code = $("#code").val();
        if(account == "" || password == ""){
            alert("用户名或密码不能为空！");
            return false
        }
        if(code == ""){
            alert("验证码不能为空！");
            return false
        }
        var param = {};
        param.account = account;
        param.password = password;
        param.code = code;
        Invoker.invokeRequest("loginController/login",param,function login(data){
            console.log(data);
            if(data.res_code == "1000"){
                window.location.href="index/index.html";
            }
            if(data.res_code == "2000"){
                window.location.href="manage/index.html";
            }
            if(data.res_code == "3000"){
                window.location.href="manage/index.html";
            }
            if(data.res_code == "005"){
                alert("验证码错误");
            }if(data.res_code == "004"){
                alert("用户名或密码错误");
            }
        })
    }
};

$(function () {
        index.init();
    }
);