var pickUpdataTemp = [];
var pickUprows = 10;
var pickUpnowPage = 1;
var pickUp = {
    init:function () {
        var me = this;
        me.pickUpShowFirst();
        me.pageClick();
    },
    //首次进入加载数据
    pickUpShowFirst:function () {
        var me= this;
        Invoker.invokeRequest("pickUpCardController/pickUpCard",null,function pickUp(data){
            pickUpdataTemp = data.result.result;
            me.pickUppageJump(1,pickUprows,pickUpdataTemp);
            me.modifyPage(1);
        });
    },
    //分页点击事件
    pageClick:function () {
        var me= this;
        $("#pickUpFist").bind("click", function () {
            var code = parseInt($("#pickUpOne").html());
            me.modifyPage(code);
            me.pickUppageJump(code,pickUprows,pickUpdataTemp);
        });
        $("#pickUpLast").bind("click", function () {
            var code = parseInt(Math.ceil(pickUpdataTemp.length/pickUprows));
            me.modifyPage(code);
            me.pickUppageJump(code,pickUprows,pickUpdataTemp)
        });
        $("#pickUpUppage").bind("click",function () {
            var code = pickUpnowPage;
            if(code>1){
                me.modifyPage(code-1);
                me.pickUppageJump(code-1,pickUprows,pickUpdataTemp)
            }
        });
        $("#pickUpNextpage").bind("click",function () {
            var code = pickUpnowPage;
            debugger;
            if(code < Math.ceil(pickUpdataTemp.length/pickUprows) && code > 0){
                me.modifyPage(code+1);
                me.pickUppageJump(code+1,pickUprows,pickUpdataTemp)
            }
        });
        $("#pickUpJumpPage").bind("click",function () {
            var code = parseInt($("#pickUpjump_text").val());
            if(code< Math.ceil(pickUpdataTemp.length/pickUprows)+1){
                me.modifyPage(code);
                me.pickUppageJump(code,pickUprows,pickUpdataTemp);
            }
        });
        $("#pickUpSearch").bind("click",function () {
            var code = $("#pickUpSearch_text").val();
            var params = {};
            params.code = code;
            Invoker.invokeRequest("pickUpCardController/pickUpCard",params,function pickUp(data){
                pickUpdataTemp = data.result.result;
                me.pickUppageJump(1,pickUprows,pickUpdataTemp);
                me.modifyPage(1);
            });
        });
    },
    modifyPage:function (nowPage) {
        $("#pickUpOne").show();
        $("#pickUpTwo").show();
        $("#pickUpThree").show();
        if(Math.ceil(pickUpdataTemp.length/pickUprows) < 3){
            if(Math.ceil(pickUpdataTemp.length/pickUprows) == 1){
                $("#pickUpTwo").hide();
                $("#pickUpThree").hide();
            }
            if(Math.ceil(pickUpdataTemp.length/pickUprows) == 2){
                $("#pickUpThree").hide();
            }
        }else {
            $("#pickUpTwo").html(nowPage);
            $("#pickUpOne").html(nowPage-1);
            $("#pickUpThree").html(nowPage+1);
        }
    },
    /**
     *
     * @param nowPage 当前页
     * @param rows 显示几条数据
     * @param data 要显示的数据（数组或map）
     */
    pickUppageJump:function (nowPage,rows,data){
        pickUpnowPage = nowPage;
        $("#pickUp_tbody").empty();
        if(data.length != 0){
            $("#pickUppageUl").show();
            var pickUpPagetotalPage = Math.ceil(data.length/rows); //总页数
            if(Number.isInteger(nowPage)){
                if(nowPage < pickUpPagetotalPage+1 && nowPage > 0){
                    var result = data;
                    var tr = "";
                    var size = nowPage*rows;
                    if(result.length < size){
                        size = result.length;
                    }
                    for(var i =(nowPage-1)*rows;i<size;i++){
                        if(i%2 == 0){
                            tr = "<tr class=\"odd gradeX\">\n" +
                                "<td>"+result[i].card_pickup_name+"</td>\n" +
                                "<td>"+result[i].card_pickup_account+"</td>\n" +
                                "<td>"+result[i].card_id+"</td>\n" +
                                "<td class=\"center\">"+result[i].card_pickup_phone+"</td>\n" +
                                "<td class=\"center\">"+result[i].card_pickup_addr+"</td>\n" +
                                "<td class=\"center\">"+result[i].account+"</td>\n" +
                                "<td class=\"center\">"+result[i].user_name+"</td>\n" +
                                "</tr>";
                        }else if(i%2 == 1){
                            tr = "<tr class=\"even gradeC\">\n" +
                                "<td>"+result[i].card_pickup_name+"</td>\n" +
                                "<td>"+result[i].card_pickup_account+"</td>\n" +
                                "<td>"+result[i].card_id+"</td>\n" +
                                "<td class=\"center\">"+result[i].card_pickup_phone+"</td>\n" +
                                "<td class=\"center\">"+result[i].card_pickup_addr+"</td>\n" +
                                "<td class=\"center\">"+result[i].account+"</td>\n" +
                                "<td class=\"center\">"+result[i].user_name+"</td>\n" +
                                "</tr>";
                        }
                        $("#pickUp_tbody").append(tr)
                    }
                }
            }
        }else {
            var error_tr = '<tr><td colspan="3" align="center"><font color="red">暂无数据</font></td></tr>';
            $("#pickUp_tbody").empty();
            $("#pickUppageUl").hide();
            $("#pickUp_tbody").append(error_tr);
        }


    }
};

$(function () {
        pickUp.init();
    }
);