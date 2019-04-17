var reg = {
    init:function () {
        var me = this;
        me.regClick();
    },
    regClick:function () {
        var me = this;
        $("#regs").bind("click",function () {
            me.regShow();
        })
    },

    //用户注册
    regShow:function () {
        var user_name = $("#user_name").val();
        var account = $("#account").val();
        var password = $("#password").val();
        var re_password = $("#re_password").val();
        var telphone = $("#phone").val();
        var card_id = $("#card_id").val();
        var address = $("#address").val();

        var regAccount = /^\d{10}$/;
        var regPassword = /^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/;

        if(user_name == "" || user_name == null){
            alert("姓名不可以为空");
            return false;
        }

        if (!regAccount.test(account)) {
            alert("学号为10位数字");
            return false;
        }
        if (!regPassword.test(password)) {
            alert("密码必须是8-16位英文字母、数字、字符组合");
            return false;
        }

        if(password != re_password){
            alert("两次输入的密码不一致");
            return false;
        }

        if(card_id == "" || card_id == null){
            alert("卡号不可以为空");
            return false;
        }

        var params = {};
        params.user_name = user_name;
        params.account = account;
        params.password = password;
        params.telphone = telphone;
        params.card_id = card_id;
        params.address = address;
        params.user_class = "";
        params.profession = "";
        params.birthday = "";
        Invoker.invokeRequest("loginController/userReistertion",params,function login(data){
            if(data.result.res_code == "0004"){
                alert("注册失败，账号已被占用");
                return false;
            }else {
                alert("注册成功,去登陆吧");
                window.location.href="index.html";
            }
        });

        console.log(params);
    }
};
$(function () {
        reg.init();
    }
);