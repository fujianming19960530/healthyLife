var pickUp = {
    init:function () {
        var me = this;
        me.pickUpShowFirst();
    },
    //首次进入加载数据
    pickUpShowFirst:function () {
        var me= this;
        Invoker.invokeRequest("pickUpCardController/pickUpCard",null,function pickUp(data){
            console.log(data);
            me.pickUppageJump(data);
        });
    },
    pickUppageJump:function (data){
        var trClass1 = "<tr class=\"odd gradeX\">\n" +
            "<td>Trident</td>\n" +
            "<td>Internet Explorer 4.0</td>\n" +
            "<td>Win 95+</td>\n" +
            "<td class=\"center\">4</td>\n" +
            "<td class=\"center\">X</td>\n" +
            "<td class=\"center\">X</td>\n" +
            "<td class=\"center\">X</td>\n" +
            "</tr>";
        var trClass2 = "<tr class=\"even gradeC\">\n" +
            "<td>Trident</td>\n" +
            "<td>Internet Explorer 5.0</td>\n" +
            "<td>Win 95+</td>\n" +
            "<td class=\"center\">5</td>\n" +
            "<td class=\"center\">C</td>\n" +
            "</tr>";
        var result = data.result.result;
        for(var i =0;i<result.length;i++){
            console.log(result);
            var tr = "<tr class=\"odd gradeX\">\n" +
                "<td>"+result[i].card_pickup_name+"</td>\n" +
                "<td>"+result[i].card_pickup_account+"</td>\n" +
                "<td>"+result[i].card_id+"</td>\n" +
                "<td class=\"center\">"+result[i].card_pickup_phone+"</td>\n" +
                "<td class=\"center\">"+result[i].card_pickup_addr+"</td>\n" +
                "<td class=\"center\">"+result[i].account+"</td>\n" +
                "<td class=\"center\">"+result[i].user_name+"</td>\n" +
                "</tr>";
            $("#pickUp_tbody").append(tr)
        }
    }
};

$(function () {
        pickUp.init();
    }
);