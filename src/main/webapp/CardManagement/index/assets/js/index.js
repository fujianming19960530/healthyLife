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
    init: function () {
        var me = this;
        me.noticeShow();
        me.clickShow();
    },
    clickShow: function () {
        $("#manage").bind("click", function () {
            window.location.href = "../manage/index.html";
        });
        var pa = {};
        pa.in = "";
        Invoker.invokeRequest("loginController/querylogtime", pa, function login(data) {
            var result = data.result;
            $("#logs").append("<p>您当前是第" + result.logtime + "位访客</p>");
            console.log(data);
        });
        $("#add_pick").bind("click",function () {
            $("#card_infos").empty();
            $("#card_infos").append("<p>新增拾卡信息</p>");
            var pick_card = "<div class=\"form-group\">\n" +
                "                                                <label class=\"col-sm-2 col-sm-2 control-label\">拾取的卡号</label>\n" +
                "                                                <div class=\"col-md-6 col-sm-6\">\n" +
                "                                                    <input class=\"form-control\" id=\"dt_pick_card\" type=\"text\"\n" +
                "                                                           placeholder=\"\">\n" +
                "                                                </div>\n" +
                "                                            </div>";
            var address = "<div class=\"form-group\">\n" +
                "                                                <label class=\"col-sm-2 col-sm-2 control-label\">拾卡地址</label>\n" +
                "                                                <div class=\"col-md-6 col-sm-6\">\n" +
                "                                                    <input class=\"form-control\" id=\"dt_address\" type=\"text\"\n" +
                "                                                           placeholder=\"\">\n" +
                "                                                </div>\n" +
                "                                            </div>";
            $("#home-pills").empty();
            $("#home-pills").append(pick_card);
            $("#home-pills").append(address);
            $("#sub_act_push").click(function () {
                var param = {};
                param.card_id = $("#dt_pick_card").val();
                param.address = $("#dt_address").val();
                Invoker.invokeRequest("pickUpCardController/insertPickCard", param, null);
                alert("新增成功！");
            });
        });
        $("#add_lose").bind("click",function () {
            $("#card_infos").empty();
            $("#card_infos").append("<p>新增失卡信息</p>");
            var lose_card = "<div class=\"form-group\">\n" +
                "                                                <label class=\"col-sm-2 col-sm-2 control-label\">丢失的卡号</label>\n" +
                "                                                <div class=\"col-md-6 col-sm-6\">\n" +
                "                                                    <input class=\"form-control\" id=\"dt_lose_card\" type=\"text\"\n" +
                "                                                           placeholder=\"\">\n" +
                "                                                </div>\n" +
                "                                            </div>";
            $("#home-pills").empty();
            $("#home-pills").append(lose_card);
            $("#sub_act_push").click(function () {
                var param = {};
                param.card_id = $("#dt_lose_card").val();
                Invoker.invokeRequest("loseCardController/insertLoseCard", param, null);
                alert("新增成功！");
            });
        });
    },
    noticeShow: function () {
        var me = this;
        Invoker.invokeRequest("noticeController/noticeShow", null, function login(data) {
            var result = data.result;
            dataTemp = result;
            if (result == null) {
                alert("暂无最新通知消息！")
            } else {
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
    pageJump: function (result) {
        var me = this;
        $(".notice_show").empty();
        totalData = result.length;
        if (totalData > 6) {
            totalPage = Math.ceil(totalData / 6);
            lastPageData = totalData - (totalPage - 1) * 6;
            var size = (nowPage - 1) * 6;
            var last = size + 6;
            if (last > totalData) {
                last = totalData;
            }
            if (last - size > 3) {
                $(".notice_show").append(row1);
                $(".notice_show").append(row2);
                for (var m = size; m < size + 3; m++) {
                    var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                        "<div class='panel-heading'>" + "发布人：" + result[m].admin_name + "</div>" +
                        "<div class='panel-body'><a onclick='commentDetail(" + result[m].notice_id + ")' href=\"javascript:void(0)\" data-toggle='modal' data-target='#comm' data-dismiss=\"modal\">" + result[m].notice_title +
                        "</a></div><div class='panel-footer'>" + "发布时间：" + result[m].notice_date +
                        "</div></div></div></div>";
                    $("#notice_row1").append(html);
                }
                for (var n = size + 3; n < last; n++) {
                    var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                        "<div class='panel-heading'>" + "发布人：" + result[n].admin_name + "</div>" +
                        "<div class='panel-body'><a onclick='commentDetail(" + result[n].notice_id + ")' href=\"javascript:void(0)\" data-toggle='modal' data-target='#comm' data-dismiss=\"modal\">" + result[n].notice_title +
                        "</a></div><div class='panel-footer'>" + "发布时间：" + result[n].notice_date +
                        "</div></div></div></div>";
                    $("#notice_row2").append(html);
                }
            } else {
                $(".notice_show").append(row1);
                for (var n = size; n < last; n++) {
                    var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                        "<div class='panel-heading'>" + "发布人：" + result[n].admin_name + "</div>" +
                        "<div class='panel-body'><a onclick='commentDetail(" + result[n].notice_id + ")' href=\"javascript:void(0)\" data-toggle='modal' data-target='#comm' data-dismiss=\"modal\">" + result[n].notice_title +
                        "</a></div><div class='panel-footer'>" + "发布时间：" + result[n].notice_date +
                        "</div></div></div></div>";
                    ;
                    $("#notice_row1").append(html);

                }
            }
            //分页插件
            var page = "<ul id=\"losepageUl\" class=\"pagination\">\n" +
                "<li><a id=\"uppage\" href=\"javascript:void(0)\">&laquo;</a></li>\n" +
                "<li><a id=\"first\" href=\"javascript:void(0)\">首页</a></li>\n" +
                "<li><a id=\"two\" href=\"javascript:void(0)\">2</a></li>\n" +
                "<li><a id=\"last\" href=\"javascript:void(0)\">尾页</a></li>\n" +
                "<li><a id=\"downpage\" href=\"javascript:void(0)\">&raquo;</a></li>\n" +
                "<li><a id=\"jump\" href=\"javascript:void(0)\">跳页</a></li>\n" +
                "<li><input id=\"jumppage\" style=\"width: 40px\" type=\"text\"></li>\n" +
                "</ul>";
            $(".notice_show").append(page);
            $("#two").html(nowPage);
        }
        me.queryClick();
    },
    //初次进入加载三条数据
    pageFist: function (result) {
        var me = this;
        var size = result.length;
        if (size > 3) {
            size = 3;
        }
        $(".notice_show").append(row1);
        for (var i = 0; i < size; i++) {
            var html = "<div class='col-md-4 col-sm-4'><div class='panel panel-default'>" +
                "<div class='panel-heading'>" + "发布人：" + result[i].admin_name + "</div>" +
                "<div class='panel-body'><a onclick='commentDetail(" + result[i].notice_id + ")' href=\"javascript:void(0)\" data-toggle='modal' data-target='#comm' data-dismiss=\"modal\">" + result[i].notice_title +
                "</a></div><div class='panel-footer'>" + "发布时间：" + result[i].notice_date +
                "</div></div></div></div>";
            $("#notice_row1").append(html);
        }
    },
    //分页展示
    //上一页，下一页，跳页点击事件
    queryClick: function () {
        var me = this;
        $("#first").bind("click", function () {
            nowPage = 1;
            me.pageJump(dataTemp);
        });
        $("#last").bind("click", function () {
            nowPage = totalPage;
            me.pageJump(dataTemp);
        });
        $("#uppage").bind("click", function () {
            if (nowPage > 1) {
                nowPage = nowPage - 1;
                me.pageJump(dataTemp);
            }
        });
        $("#downpage").bind("click", function () {
            if (nowPage < totalPage) {
                nowPage = nowPage + 1;
                me.pageJump(dataTemp);
            }
        });
        $("#jump").bind("click", function () {
            var now = parseInt($("#jumppage").val());
            if (Number.isInteger(now)) {
                if (now > 0 && now < totalPage + 1) {
                    nowPage = now;
                    me.pageJump(dataTemp);
                }
            }
        })
    }
};

function commentDetail(id) {
    var param = {};
    param.notice_id = id;
    Invoker.invokeRequest("noticeController/noticeShow", param, function login(data) {
        var result = data.result[0];
        var nt_name = "<div class=\"form-group\">\n" +
            "                                                <label class=\"col-sm-2 col-sm-2 control-label\">通知名称</label>\n" +
            "                                                <div class=\"col-md-6 col-sm-6\">\n" +
            "                                                    <input class=\"form-control\" id=\"dt_nt_name\" type=\"text\"\n" +
            "                                                           disabled placeholder=\"\">\n" +
            "                                                </div>\n" +
            "                                            </div>";
        var nt_detail = "<div class=\"form-group\">\n" +
            "                                                <label class=\"col-sm-2 col-sm-2 control-label\">通知详情</label>\n" +
            "                                                <div class=\"col-md-6 col-sm-6\">\n" +
            "                                                    <textarea class=\"form-control\" id=\"dt_nt_detail\" \n" +
            "                                                           disabled placeholder=\"\">\n" +
            "                                                </div>\n" +
            "                                            </div>";
        $("#home-pill").empty();
        $("#home-pill").append(nt_name);
        $("#home-pill").append(nt_detail);
        $("#dt_nt_name").val(result.notice_title);
        $("#dt_nt_detail").val(result.notice_content);
    });
}

$(function () {
        index.init();
    }
);