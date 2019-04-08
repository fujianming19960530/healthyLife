/*
工具类js：
    包含cookie方法，时间处理等
*/
(function($){
    /**
     * 前台工具
     */
    window.Utils = {
        setCookie:function(name,value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";Path="+escape("/");
    },
        getCookie:function (name) {
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        delCookie:function(name){
            setCookie(name,'',-1);
        },
        /**
         * 提示信息
         * options：{title: "标题", time: "自动关闭时间"}
         * 前台传参例如：Utils.alert_message("登录信息",'登录失败！',2000);
         */
        alert_message: function (title,message,option){
            var time = 9999;
            var btn_close = 1;
            if(title == null || title == ""){
                title = "温馨提示";
            }
            var title_all = "<span style='margin-left: -140px'>"+title+"</span>";
            if(message == null || message == ""){
                message = "服务器异常"
            }
            if(option != null){
                time = option;
            }
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.open({
                    type: 0,    //0是弹出信息，2是弹出浏览器信息，3是旋转加载
                    time:time,
                    title:title_all,
                    content:message,
                    closeBtn: btn_close,    //右上角关闭按钮默认为1，隐藏是0
                    area: ['20%', '20%'],
                    //area: '300px',
                    offset: '250px',
                    //btn: ['确认', '取消'],
                    btn:false,
                    yes: function(index, layero){
                        //alert("0.0");
                        //按钮【按钮一】的回调
                    }
                    ,btn2: function(index, layero){
                        //按钮【按钮二】的回调
                        //return false //开启该代码可禁止点击该按钮关闭
                    }
                    ,cancel: function(){
                        //右上角关闭回调
                        //return false //开启该代码可禁止点击该按钮关闭
                    }
                });
            });
        },
        alert_err:function (message) {
            //layer.msg(message);
            layui.use('layer', function(){
                var layer = layui.layer;

                //layer.alert('酷毙了', {icon: 5});
                //layer.load(1,{time:2000});                  //加载旋转按钮
            });
        },
        getContextPath: function(){
            var pathname = document.location.pathname;
            var index = pathname.substr(1).indexOf("/");
            var context_path = "";

            if(index !== -1){
                context_path = pathname.substr(0, index + 1);
            }

            if(context_path && context_path.substr(0, 1) != "/"){
                context_path = "/" + context_path;
            }

            return context_path;
        },
    };






    $(document).keydown(function(e){
        try{
            if(e.which === 8){//退格
                var doPrevent = true;
                if(e.target.nodeName.toLowerCase() === "input" || e.target.nodeName.toLowerCase() === "textarea"){
                    if(!$(e.target).prop("readonly") && !$(e.target).prop("disabled")){
                        doPrevent = false;
                    }
                }
                if(doPrevent){
                    e.preventDefault();
                }
            }
        }
        catch(exception){
        }
    });
})(jQuery);