var queryFinance = [];
var fin00 = []; //消费
var fin01 = []; //充值
var size = 1;
var xftype = "all";
var indexdataTemp = [];
var dataTemp = [];
var studataTemp = [];
var mondataTemp = [];
var indexrows = 10;
var indexnowPage = 1;
var role = "user";
var index = {
    init: function () {
        var me = this;
        //先判断用户权限
        me.checkUserRole();

    },
    checkUserRole: function () {
        var me = this;
        var param = {};
        param.index = "index";
        Invoker.invokeRequest("adminController/checkUserRole", param, function login(data) {
            var result = data.result;
            //普通用户进入后台
            if ("00" == result) {
                $("#stu").hide();
                $("#money").hide();
                $("#admin_account").hide();
                $("#adm").hide();
                me.queryUserInfo();
                me.tab_click();
                me.accessShow("index");
                me.noticeShows();
            } else {
                //管理员
                $("#demo_mon").hide();
                $("#admin_hide").hide();
                role = "admin";
                me.queryAdminInfo();
            }
        });
    },
    //查询admin信息
    queryAdminInfo: function () {
        var me = this;
        var param = {};
        param.index = "";
        Invoker.invokeRequest("adminController/adminInfo", param, function login(data) {
            var result = data.result;
            $("#user_name").val(result.sys_name);
            $("#admin_account").val(result.account);
            me.adminClick();
        })
    },
    //admin各项点击事件
    adminClick: function () {
        var me = this;
        me.admin_tab_click();
        //加载admin全部页面信息
        //出入记录信息查询
        me.accessShow("admin");
        //通知信息查询
        me.noticeShows();
        var new_nt = "<button id=\"xz_nt\" class=\"btn btn-primary\" type=\"button\">新增通知</button>";
        $("#nt_msg").append(new_nt);
        //学生信息
    },
    admin_tab_click: function () {
        $("#page-inner").show();
        $("#outer_in").hide();
        $("#comment").hide();
        $("#student").hide();
        $("#admin_cw").hide();
        $("#user_info").bind("click", function () {
            $("#page-inner").show();
            $("#outer_in").hide();
            $("#comment").hide();
            $("#student").hide();
            $("#admin_cw").hide();
        });
        $("#out").bind("click", function () {
            $("#page-inner").hide();
            $("#outer_in").show();
            $("#comment").hide();
            $("#student").hide();
            $("#admin_cw").hide();
        });
        $("#com").bind("click", function () {
            $("#page-inner").hide();
            $("#outer_in").hide();
            $("#comment").show();
            $("#student").hide();
            $("#admin_cw").hide();
        });
        $("#stu").bind("click", function () {
            $("#page-inner").hide();
            $("#outer_in").hide();
            $("#comment").hide();
            $("#student").show();
            $("#admin_cw").hide();
        });
        $("#money").bind("click", function () {
            $("#page-inner").hide();
            $("#outer_in").hide();
            $("#comment").hide();
            $("#student").hide();
            $("#admin_cw").show();
        });
    },
    queryUserInfo: function () {
        var me = this;
        var param = {};
        param.index = "index";
        Invoker.invokeRequest("adminController/queryFinance", param, function login(data) {
            var result = data.result;
            var userInfo = result.userInfo;
            queryFinance = result.totalFinance;
            fin01 = [];
            fin00 = [];
            for (var i = 0; i < queryFinance.length; i++) {
                if (queryFinance[i].transaction_type == "00") {
                    fin00.push(queryFinance[i]);
                } else if (queryFinance[i].transaction_type == "01") {
                    fin01.push(queryFinance[i]);
                }
            }
            //00是普通用户，01是管理员
            if (userInfo.role_level == "00") {
                $("#user_name").val(userInfo.user_name);
                $("#card_id").val(userInfo.card_id);
                $("#account").val(userInfo.account);
                $("#user_class").val(userInfo.user_class);
                $("#card_type").val(userInfo.card_type);
                $("#profession").val(userInfo.profession);
                $("#card_balance").val(userInfo.card_balance);
                $("#out_role").val(userInfo.out_role);
                $("#queryFinanceIn").html("￥" + result.queryFinanceIn);
                $("#queryFinanceOut").html("￥" + result.queryFinanceOut);
                me.usertransactionInfo(queryFinance, "no");
                $("#more").bind("click", function () {
                    if (xftype == "all") {
                        size += 1;
                        me.usertransactionInfo(queryFinance, "no");
                    }
                    if (xftype == "01") {
                        size += 1;
                        me.usertransactionInfo(fin01, "no");
                    }
                    if (xftype == "00") {
                        size += 1;
                        me.usertransactionInfo(fin00, "no");
                    }
                });
                $("#xf_all").bind("click", function () {
                    size = 1;
                    xftype = "all";
                    me.usertransactionInfo(queryFinance, "change");
                });
                $("#xf_00").bind("click", function () {
                    size = 1;
                    xftype = "00";
                    me.usertransactionInfo(fin00, "change");
                });
                $("#xf_01").bind("click", function () {
                    size = 1;
                    xftype = "01";
                    me.usertransactionInfo(fin01, "change");
                });
            }
        });
    },
    usertransactionInfo: function (data, type) {
        //检查是否需要清空div
        if (type == "change") {
            $("#financeTbody").html("");
        }
        var max = size * 6;
        var min = (size - 1) * 6;
        if (max > data.length) {
            max = data.length;
        }
        for (var i = min; i < max; i++) {
            var type = "";
            if (data[i].transaction_type == '01') {
                type = "充值"
            } else if (data[i].transaction_type == '00') {
                type = "消费"
            }
            var html = "<tr>" +
                "<td>" + type + "</td>" +
                "<td>" + data[i].transaction_number + "</td>" +
                "<td>" + data[i].transaction_cardId + "</td>" +
                "<td>" + data[i].transaction_date + "</td>" +
                "</tr>";
            $("#financeTbody").append(html);
        }
    },
    //用户菜单栏点击事件
    tab_click: function () {
        $("#page-inner").show();
        $("#outer_in").hide();
        $("#comment").hide();
        $("#student").hide();
        $("#admin_cw").hide();
        $("#user_info").bind("click", function () {
            $("#page-inner").show();
            $("#outer_in").hide();
            $("#comment").hide();
        });
        $("#out").bind("click", function () {
            $("#page-inner").hide();
            $("#outer_in").show();
            $("#comment").hide();
        });
        $("#com").bind("click", function () {
            $("#page-inner").hide();
            $("#outer_in").hide();
            $("#comment").show();
        });
    },
    //用户出入信息
    accessShow: function (data) {
        var me = this;
        var param = {};
        param.index = data;
        Invoker.invokeRequest("adminController/queryAccess", param, function pp(data) {
            var result = data.result;
            indexdataTemp = result;
            me.indexpageJump(1, 10, result);
            me.indexmodifyPage(1);
            me.indexpageClick();
            $(".dataTables_empty").hide();
            $("#dynamic-table_info").hide();
            $("#dynamic-table_length").hide();
            $("#dynamic-table_filter").hide();
        });
    },


    //出入信息分页点击事件
    indexpageClick: function () {
        var me = this;
        $("#indexFist").bind("click", function () {
            var code = parseInt($("#indexOne").html());
            me.indexmodifyPage(code);
            me.indexpageJump(code, indexrows, indexdataTemp);
        });
        $("#indexLast").bind("click", function () {
            var code = parseInt(Math.ceil(indexdataTemp.length / indexrows));
            me.indexmodifyPage(code);
            me.indexpageJump(code, indexrows, indexdataTemp)
        });
        $("#indexUppage").bind("click", function () {
            var code = indexnowPage;
            if (code > 1) {
                me.indexmodifyPage(code - 1);
                me.indexpageJump(code - 1, indexrows, indexdataTemp)
            }
        });
        $("#indexNextpage").bind("click", function () {
            var code = indexnowPage;
            if (code < Math.ceil(indexdataTemp.length / indexrows) && code > 0) {
                me.indexmodifyPage(code + 1);
                me.indexpageJump(code + 1, indexrows, indexdataTemp)
            }
        });
        $("#indexJumpPage").bind("click", function () {
            var code = parseInt($("#indexjump_text").val());
            if (code < Math.ceil(indexdataTemp.length / indexrows) + 1) {
                me.indexmodifyPage(code);
                me.indexpageJump(code, indexrows, indexdataTemp);
            }
        });
    },
    //出入信息分页控件信息
    indexmodifyPage: function (nowPage) {
        $("#indexTwo").show();
        $("#indexThree").show();
        $("#indexOne").show();
        if (Math.ceil(indexdataTemp.length / indexrows) < 3) {
            if (Math.ceil(indexdataTemp.length / indexrows) == 1) {
                $("#indexTwo").hide();
                $("#indexThree").hide();
            }
            if (Math.ceil(indexdataTemp.length / indexrows) == 2) {
                $("#indexThree").hide();
            }
        } else {
            $("#indexTwo").html(nowPage);
            $("#indexOne").html(nowPage - 1);
            $("#indexThree").html(nowPage + 1);
        }
    },
    /**
     *
     * @param nowPage 当前页
     * @param rows 显示几条数据
     * @param data 要显示的数据（数组或map）
     */
    indexpageJump: function (nowPage, rows, data) {
        indexnowPage = nowPage;
        $("#tbody_out").empty();
        if (data.length != 0) {
            $("#indexpageUl").show();
            var indexPagetotalPage = Math.ceil(data.length / rows); //总页数
            if (Number.isInteger(nowPage)) {
                if (nowPage < indexPagetotalPage + 1 && nowPage > 0) {
                    var result = data;
                    var size = nowPage * rows;
                    if (result.length < size) {
                        size = result.length;
                    }

                    for (var i = (nowPage - 1) * rows; i < size; i++) {
                        var type = "外出";
                        //01是出，00是回
                        if (result[i].access_type == "00") {
                            type = "返回";
                        }
                        var td = "<td>无操作权限</td>";
                        if (role == "admin") {
                            td = "<td>无操作</td>";
                        }
                        var html = "<tr>" +
                            "<td>" + result[i].access_card + "</td>\n" +
                            "<td>" + type + "</td>" +
                            "<td>" + result[i].access_date + "</td>" +
                            "<td>" + result[i].access_level + "</td>" +
                            td +
                            "</tr>";
                        $("#tbody_out").append(html);
                    }
                }
            }
        } else {
            var error_tr = '<tr><td colspan="3" align="center"><font color="red">暂无数据</font></td></tr>';
            $("#index_tbody").empty();
            $("#indexpageUl").hide();
            $("#index_tbody").append(error_tr);
        }
    },

    //通知信息查询事件
    noticeShows: function () {
        var me = this;
        var param = {};
        param.index = "";
        Invoker.invokeRequest("noticeController/noticeShow", param, function pp(data) {
            //console.log(data);
            dataTemp = data.result;
            me.pageClick();
            me.modifyPage(1);
            me.nt_pageJump(1, 10, dataTemp);

            $(".dataTables_empty").hide();
            $("#dynamic-table_info").hide();
            $("#dynamic-table_length").hide();
            $("#dynamic-table_filter").hide();
        });
    },

    //通知信息分页点击事件
    pageClick: function () {
        var me = this;
        $("#Fist").bind("click", function () {
            var code = parseInt($("#One").html());
            me.modifyPage(code);
            me.nt_pageJump(code, indexrows, dataTemp);
        });
        $("#Last").bind("click", function () {
            var code = parseInt(Math.ceil(dataTemp.length / indexrows));
            me.modifyPage(code);
            me.nt_pageJump(code, indexrows, dataTemp)
        });
        $("#Uppage").bind("click", function () {
            var code = indexnowPage;
            if (code > 1) {
                me.modifyPage(code - 1);
                me.nt_pageJump(code - 1, indexrows, dataTemp)
            }
        });
        $("#Nextpage").bind("click", function () {
            var code = indexnowPage;
            if (code < Math.ceil(dataTemp.length / indexrows) && code > 0) {
                me.modifyPage(code + 1);
                me.nt_pageJump(code + 1, indexrows, dataTemp)
            }
        });
        $("#JumpPage").bind("click", function () {
            var code = parseInt($("#jump_text").val());
            if (code < Math.ceil(dataTemp.length / indexrows) + 1) {
                me.modifyPage(code);
                me.nt_pageJump(code, indexrows, dataTemp);
            }
        });
    },
    //通知信息分页控件信息
    modifyPage: function (nowPage) {
        $("#Two").show();
        $("#Three").show();
        $("#One").show();
        if (Math.ceil(dataTemp.length / indexrows) < 3) {
            if (Math.ceil(dataTemp.length / indexrows) == 1) {
                $("#Two").hide();
                $("#Three").hide();
            }
            if (Math.ceil(dataTemp.length / indexrows) == 2) {
                $("#Three").hide();
            }
        } else {
            $("#Two").html(nowPage);
            $("#One").html(nowPage - 1);
            $("#Three").html(nowPage + 1);
        }
    },
    /**
     *
     * @param nowPage 当前页
     * @param rows 显示几条数据
     * @param data 要显示的数据（数组或map）
     */
    nt_pageJump: function (nowPage, rows, data) {
        indexnowPage = nowPage;
        $("#tbody_notice").empty();
        if (data.length != 0) {
            $("#pageUl").show();
            var indexPagetotalPage = Math.ceil(data.length / rows); //总页数
            if (Number.isInteger(nowPage)) {
                if (nowPage < indexPagetotalPage + 1 && nowPage > 0) {
                    var result = data;
                    var size = nowPage * rows;
                    if (result.length < size) {
                        size = result.length;
                    }
                    console.log(result);
                    for (var i = (nowPage - 1) * rows; i < size; i++) {
                        var detail = "<a data-toggle=\"modal\" onclick='getNoticeId(" + result[i].notice_id + ")' data-target=\"#mode_notice\" href=\"#\" class=\"tm-tours-box-1-link-right\" style=\"width: 40%\">查询详情</a>";
                        if (role == "admin") {
                            detail = "<a data-toggle=\"modal\" onclick='getNoticeId(" + result[i].notice_id + ")' data-target=\"#mode_notice\" href=\"#\" class=\"tm-tours-box-1-link-right\" style=\"width: 40%\">查询详情</a>&nbsp;&nbsp;" +
                                "<a data-toggle=\"modal\" onclick='updateNotice(" + result[i].notice_id + ")' data-target=\"#mode_notice\" href=\"#\" class=\"tm-tours-box-1-link-right\" style=\"width: 40%\">修改</a>&nbsp;&nbsp;" +
                                "<a data-toggle=\"modal\" onclick='delNt(" + result[i].notice_id + ")' href=\"#\" style=\"width: 40%\">删除</a>";
                        }
                        var html = "<tr>" +
                            "<td>" + result[i].notice_title + "</td>\n" +
                            "<td>" + result[i].notice_date + "</td>" +
                            "<td>" + result[i].admin_name + "</td>" +
                            "<td>" +
                            detail
                            + "</td>" +
                            "</tr>";
                        $("#tbody_notice").append(html);
                    }
                }
            }
        } else {
            var error_tr = '<tr><td colspan="3" align="center"><font color="red">暂无数据</font></td></tr>';
            $("#tbody_notice").empty();
            $("#pageUl").hide();
            $("#tbody_notice").append(error_tr);
        }
    },

};

//通知信息获取id
function getNoticeId(data) {
    $("#notice_detail").empty();
    var param = {};
    param.notice_id = data;
    Invoker.invokeRequest("noticeController/noticeShow", param, function ss(data) {
        var result = data.result[0];
        var html = "<p>" + result.notice_content + "</p>";
        $("#notice_detail").empty();
        $("#notice_detail").append(html);
    });
}

//修改通知信息
function updateNotice(data) {
    $("#notice_detail").empty();
    var param = {};
    param.notice_id = data;
    Invoker.invokeRequest("noticeController/noticeShow", param, function ss(data) {
        var result = data.result[0];
        var title = "<input class=\"form-control\" id=\"nt_title\" type=\"text\" placeholder=\"\"\n" +
            "                                                   >";
        var html = "<textarea id='nt_detail' class='form-control' aria-label='输入通知详情'></textarea>";
        $("#notice_detail").append(title);
        $("#notice_detail").append(html);
        $("#nt_title").val(result.notice_title);
        $("#nt_detail").val(result.notice_content);
        var bt = "<button id='sub_nt' type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">提交\n" +
            "                        </button>";
        var close ="<button id='close' type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭\n" +
            "                        </button>";
        $("#nt").empty();
        $("#nt").append(bt);
        $("#nt").append(close);
        $("#close").bind("click",function () {
            $("#nt").empty();
            $("#nt").append(close);
            $("#close").click();
        });
        $("#sub_nt").bind("click",function () {
            var title = $("#nt_title").val();
            var detail = $("#nt_detail").val();
            var params = {};
            params.title = title;
            params.notice_id = data.result[0].notice_id;
            params.detail = detail;
            debugger;
            setNt(params);
        });
    });
}

function setNt(data) {
    Invoker.invokeRequest("adminController/updateNotices", data, function xx(ss) {
        alert("修改成功，刷新页面测试吧！")
    });
}

function delNt(data) {
    var notice_id = data;
    var param = {};
    param.notice_id = notice_id;
    debugger;
    Invoker.invokeRequest("adminController/delNotices", param, function xx(ss) {
        window.location.href="../manage/index.html";
    });
}

function getCardId(data) {
    var param = {};
    param.notice_id = data;
    console.log(data);
    Invoker.invokeRequest("noticeController/noticeShow", param, function ss(data) {
        var result = data.result[0];
        var html = "<p>" + result.notice_content + "</p>";
        $("#notice_detail").append(html);
    });
}


$(function () {
        index.init();
    }
);