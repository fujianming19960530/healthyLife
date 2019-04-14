var pickUpdataTemp = [];
var pickUprows = 10;
var pickUp = {
    init:function () {
        var me = this;
        me.pickUpShowFirst();
        me.pageClick();
        console.log($("#pickUpFist"));
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
            var now = parseInt($("#pickUpOne").html());
            me.modifyPage(now);
            me.pickUppageJump(now,pickUprows,pickUpdataTemp);
        });
        $("#pickUpLast").bind("click", function () {
            var last = parseInt(Math.ceil(pickUpdataTemp.length/pickUprows));
            me.modifyPage(last);
            me.pickUppageJump(last,pickUprows,pickUpdataTemp)
        });
    },
    modifyPage:function (nowPage) {
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
        $("#pickUp_tbody").empty();
        var pickUpPagetotalPage = Math.ceil(data.length/rows); //总页数
        if(Number.isInteger(nowPage)){
            if(nowPage < pickUpPagetotalPage+1 && nowPage > 0){
                var result = data;
                var tr = "";
                var size = nowPage*rows;
                if(nowPage*rows > size){
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

    }
};

$(function () {
        pickUp.init();
    }
);