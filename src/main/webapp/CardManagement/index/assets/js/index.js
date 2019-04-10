var nowPage = 1; //当前页
var nextPage = 1; //下一页
var lastPage = 1; //上一页
var totalPage = 1; //总页数
var totalData = 1; //数据总数
var dataTemp = []; //存储数据
var dataInPage = 1; //本页有几条数据
var index = {
    init:function () {
        var me = this;
        me.noticeShow();
    },
    noticeShow:function () {
        var me = this;
        //$(".notice").append(html1);

        Invoker.invokeRequest("noticeController/noticeShow",null,function login(data){
            var result = data.result;
            dataTemp = result;
            if(result == null){
                alert("暂无最新通知消息！")
            }else {
                var size = result.length;
                if(size>3){
                    size=3;
                }
                //行div
                var row = "<div class='row' id='notice_row'></div>";
                //分页插件
                var page = "<div class=\"pagination\" style='margin-left: 40%'>\n" +
                    "<a id='first' href=\"javascript:void(0)\" class=\"page\">首页</a>\n" +
                    "<a id='one' href=\"javascript:void(0)\" class=\"page\">1</a>\n" +
                    "<a id='two' href=\"javascript:void(0)\" class=\"page\">2</a>\n" +
                    "<a id='three' href=\"javascript:void(0)\" class=\"page\">3</a>\n" +
                    "<a id='last' href=\"javascript:void(0)\" class=\"page\">末页</a>\n" +
                    "<a id='jump' href=\"javascript:void(0)\" class=\"page\" >跳页</a>\n" +
                    "<input style=\"width: 30px\" type=\"text\" class=\"page\" value=\"1\" >\n" +
                    "</div>";
                $(".notice_show").append(row);
                for(var i = 0; i < size;i ++){
                    var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                        "<div class='panel-heading'>" + result[i].notice_title +"</div>" +
                        "<div class='panel-body'><p>" +result[i].notice_content+
                        "</p></div><div class='panel-footer'>"+"发布人："+result[i].admin_name+"</div></div></div></div>";
                    $("#notice_row").append(html);
                }
                $(".notice_show").append("<div><a id='more' href=\"javascript:void(0)\">查看更多>></a></div>");
                $("#more").bind("click", function () {
                    $("#more").hide();
                    $(".notice_show").append(page);
                    $("#two").hide();
                }),
                me.pageJump(dataTemp);
            }
            console.log(result);
        });
    },
    //消息通知分页显示
    pageJump:function (data) {
        totalData = data.length;
        totalPage = totalData/3;
    }
};
$(function () {
        index.init();
    }
);