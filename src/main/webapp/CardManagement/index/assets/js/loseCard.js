var losedataTemp = [];
var loserows = 10;
var losenowPage = 1;
var lose = {
    init:function () {
        var me = this;
        me.loseShowFirst();
        me.losepageClick();
    },
    //首次进入加载数据
    loseShowFirst:function () {
        var me= this;
        Invoker.invokeRequest("loseCardController/loseCard",null,function lose(data){
            losedataTemp = data.result.result;
            console.log(data);
            me.losepageJump(1,loserows,losedataTemp);
            me.losemodifyPage(1);
        });
    },
    //分页点击事件
    losepageClick:function () {
        var me= this;
        $("#loseFist").bind("click", function () {
            var code = parseInt($("#loseOne").html());
            me.losemodifyPage(code);
            me.losepageJump(code,loserows,losedataTemp);
        });
        $("#loseLast").bind("click", function () {
            var code = parseInt(Math.ceil(losedataTemp.length/loserows));
            me.losemodifyPage(code);
            me.losepageJump(code,loserows,losedataTemp)
        });
        $("#loseUppage").bind("click",function () {
            var code = losenowPage;
            if(code>1){
                me.losemodifyPage(code-1);
                me.losepageJump(code-1,loserows,losedataTemp)
            }
        });
        $("#loseNextpage").bind("click",function () {
            var code = losenowPage;
            if(code < Math.ceil(losedataTemp.length/loserows) && code > 0){
                me.losemodifyPage(code+1);
                me.losepageJump(code+1,loserows,losedataTemp)
            }
        });
        $("#loseJumpPage").bind("click",function () {
            var code = parseInt($("#losejump_text").val());
            if(code< Math.ceil(losedataTemp.length/loserows)+1){
                me.losemodifyPage(code);
                me.losepageJump(code,loserows,losedataTemp);
            }
        });
        $("#loseSearch").bind("click",function () {
            var code = $("#loseSearch_text").val();
            var params = {};
            params.code = code;
            Invoker.invokeRequest("loseCardController/loseCard",params,function lose(data){
                losedataTemp = data.result.result;
                me.losepageJump(1,loserows,losedataTemp);
                me.losemodifyPage(1);
            });
        });
    },
    losemodifyPage:function (nowPage) {
        $("#loseTwo").show();
        $("#loseThree").show();
        $("#loseOne").show();
        if(Math.ceil(losedataTemp.length/loserows) < 3){
            if(Math.ceil(losedataTemp.length/loserows) == 1){
                $("#loseTwo").hide();
                $("#loseThree").hide();
            }
            if(Math.ceil(losedataTemp.length/loserows) == 2){
                $("#loseThree").hide();
            }
        }else {
            $("#loseTwo").html(nowPage);
            $("#loseOne").html(nowPage-1);
            $("#loseThree").html(nowPage+1);
        }
    },
    /**
     *
     * @param nowPage 当前页
     * @param rows 显示几条数据
     * @param data 要显示的数据（数组或map）
     */
    losepageJump:function (nowPage,rows,data){
        losenowPage = nowPage;
        $("#lose_tbody").empty();
        if(data.length != 0){
            $("#losepageUl").show();
            var losePagetotalPage = Math.ceil(data.length/rows); //总页数
            if(Number.isInteger(nowPage)){
                if(nowPage < losePagetotalPage+1 && nowPage > 0){
                    var result = data;
                    var tr = "";
                    var size = nowPage*rows;
                    if(result.length < size){
                        size = result.length;
                    }
                    for(var i =(nowPage-1)*rows;i<size;i++){
                        if(i%2 == 0){
                            tr = "<tr class=\"odd gradeX\">\n" +
                                "<td>"+result[i].user_name+"</td>\n" +
                                "<td>"+result[i].account+"</td>\n" +
                                "<td>"+result[i].card_id+"</td>\n" +
                                "<td class=\"center\">"+result[i].telphone+"</td>\n" +
                                "<td class=\"center\">"+result[i].address+"</td>\n" +
                                "</tr>";
                        }else if(i%2 == 1){
                            tr = "<tr class=\"even gradeC\">\n" +
                                "<td>"+result[i].user_name+"</td>\n" +
                                "<td>"+result[i].account+"</td>\n" +
                                "<td>"+result[i].card_id+"</td>\n" +
                                "<td class=\"center\">"+result[i].telphone+"</td>\n" +
                                "<td class=\"center\">"+result[i].address+"</td>\n" +
                                "</tr>";
                        }
                        $("#lose_tbody").append(tr)
                    }
                }
            }
        }else {
            var error_tr = '<tr><td colspan="3" align="center"><font color="red">暂无数据</font></td></tr>';
            $("#lose_tbody").empty();
            $("#losepageUl").hide();
            $("#lose_tbody").append(error_tr);
        }
    }
};

$(function () {
    lose.init();
    }
);