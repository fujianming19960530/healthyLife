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
      })
    },

    //登录方法
    login:function () {
        var account = $("#account").val();
        var password = $("#password").val();
        var code = $("#code").val();
        var param = {};
        param.account = account;
        param.password = password;
        param.code = code;
        console.log(param);
        Invoker.invokeRequest("loginController/login",param,function login(data){
            window.location.href="index/index.html";
            console.log(data);
        }),

        console.log(param)
    }

};

$(function () {
        index.init();
    }
);