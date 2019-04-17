var nowPage = 1; //当前页
var nextPage = 1; //下一页
var lastPage = 1; //上一页
var totalPage = 1; //总页数
var totalData = 1; //数据总数
var dataTemp = []; //存储数据
var lastPageData = 1; //最后一页有几条数据
var nowPageData = 1; //首页不足6条的数据
//行div
var row1 = "<div class='row' id='notice_row1'></div>";
var row2 = "<div class='row' id='notice_row2'></div>";
var index = {
    init:function () {
        var me = this;
        me.noticeShow();
        me.clickShow();
    },
    clickShow:function () {
      $("#manage").bind("click",function () {
          window.location.href="../manage/index.html";
      })  
    },
    noticeShow:function () {
        var me = this;
        Invoker.invokeRequest("noticeController/noticeShow",null,function login(data){
            var result = data.result;
            dataTemp = result;
            if(result == null){
                alert("暂无最新通知消息！")
            }else {
                me.pageFist(result);
                $(".notice_show").append("<div><a id='more' href=\"javascript:void(0)\">查看更多>></a></div>");
                $("#more").bind("click", function () {
                    $("#more").hide();
                    $("#two").hide();
                    me.pageJump(dataTemp);
                });
            }
        });
    },
    //消息通知分页显示
    pageJump:function (result) {
        var me = this;
        $(".notice_show").empty();
        totalData = result.length;
        if(totalData > 6){
            totalPage = Math.ceil(totalData/6);
            lastPageData = totalData - (totalPage-1)*6;
            var size = (nowPage-1)*6;
            var last = size+6;
            if(last>totalData){
                last = totalData;
            }
                if(last-size>3){
                    $(".notice_show").append(row1);
                    $(".notice_show").append(row2);
                    for(var m = size;m<size+3;m++){
                        var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                            "<div class='panel-heading'>" + result[m].notice_title +"</div>" +
                            "<div class='panel-body'><p>" + result[m].notice_content+
                            "</p></div><div class='panel-footer'>"+"发布人："+result[m].admin_name+
                            '&nbsp;&nbsp;&nbsp;'+result[m].notice_date+
                            "</div></div></div></div>";
                        $("#notice_row1").append(html);
                    }
                    for(var n=size+3;n<last;n++){
                        var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                            "<div class='panel-heading'>" + result[n].notice_title +"</div>" +
                            "<div class='panel-body'><p>" +result[n].notice_content+
                            "</p></div><div class='panel-footer'>"+"发布人："+result[n].admin_name+
                            '&nbsp;&nbsp;&nbsp;'+result[n].notice_date+
                            "</div></div></div></div>";
                        $("#notice_row2").append(html);
                    }
                }else {
                    $(".notice_show").append(row1);
                    for(var n=size;n<last;n++){
                        var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                            "<div class='panel-heading'>" + result[n].notice_title +"</div>" +
                            "<div class='panel-body'><p>" +result[n].notice_content+
                            "</p></div><div class='panel-footer'>"+"发布人："+result[n].admin_name+
                            '&nbsp;&nbsp;&nbsp;'+result[n].notice_date+
                            "</div></div></div></div>";;
                        $("#notice_row1").append(html);

                }
            }
            //分页插件
            var page = "<ul id=\"losepageUl\" class=\"pagination\">\n" +
                "<li><a id=\"uppage\" href=\"javascript:void(0)\">&laquo;</a></li>\n" +
                "<li><a id=\"first\" href=\"javascript:void(0)\">首页</a></li>\n" +
                /*"<li><a id=\"loseOne\" href=\"javascript:void(0)\">1</a></li>\n" +*/
                "<li><a id=\"two\" href=\"javascript:void(0)\">2</a></li>\n" +
                /*"<li><a id=\"loseThree\" href=\"javascript:void(0)\">3</a></li>\n" +*/
                "<li><a id=\"last\" href=\"javascript:void(0)\">尾页</a></li>\n" +
                "<li><a id=\"downpage\" href=\"javascript:void(0)\">&raquo;</a></li>\n" +
                "<li><a id=\"jump\" href=\"javascript:void(0)\">跳页</a></li>\n" +
                "<li><input id=\"jumppage\" style=\"width: 40px\" type=\"text\"></li>\n" +
                "</ul>";

            /*var page = "<div class=\"pagination\" style='margin-left: 30%'>\n" +
                "<a id='first' href=\"javascript:void(0)\" class=\"page\">首页</a>\n" +
                "<a id='uppage' href=\"javascript:void(0)\" class=\"page\">上一页</a>\n" +
                "<a id='two' href=\"javascript:void(0)\" class=\"page\">1</a>\n" +
                "<a id='downpage' href=\"javascript:void(0)\" class=\"page\">下一页</a>\n" +
                "<a id='last' href=\"javascript:void(0)\" class=\"page\">末页</a>\n" +
                "<a id='jump' href=\"javascript:void(0)\" class=\"page\" >跳页</a>\n" +
                "<input style=\"width: 30px\" type=\"text\" class=\"page\" id='jumppage' value=\"1\" >\n" +
                "</div>";*/
            $(".notice_show").append(page);
            $("#two").html(nowPage);
        }
        me.queryClick();
    },
    //初次进入加载三条数据
    pageFist:function (result) {
        var me = this;
        var size = result.length;
        if(size>3){
            size=3;
        }
        $(".notice_show").append(row1);
        for(var i = 0; i < size;i ++){
            var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                "<div class='panel-heading'>" + result[i].notice_title +"</div>" +
                "<div class='panel-body'><p>" +result[i].notice_content+
                "</p></div><div class='panel-footer'>"+"发布人："+result[i].admin_name+"" +
                '&nbsp;&nbsp;&nbsp;'+result[i].notice_date+
                "</div></div></div></div>";
            $("#notice_row1").append(html);
        }
    },
    //分页展示
    //上一页，下一页，跳页点击事件
    queryClick:function () {
        var me = this;
        $("#first").bind("click", function () {
            nowPage = 1;
            me.pageJump(dataTemp);
        });
        $("#last").bind("click", function () {
            nowPage = totalPage;
            me.pageJump(dataTemp);
        });
        $("#uppage").bind("click",function () {
            if(nowPage>1){
                nowPage = nowPage -1;
                me.pageJump(dataTemp);
            }
        });
        $("#downpage").bind("click",function () {
            if(nowPage<totalPage){
                nowPage = nowPage + 1;
                me.pageJump(dataTemp);
            }
        });
        $("#jump").bind("click",function (){
            var now = parseInt($("#jumppage").val());
            if(Number.isInteger(now)){
                if(now > 0 && now < totalPage+1){
                    nowPage = now;
                    me.pageJump(dataTemp);
                }
            }
        })
    }
};
$(function () {
        index.init();
    }
);