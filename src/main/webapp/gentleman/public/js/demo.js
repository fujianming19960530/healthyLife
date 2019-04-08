/*function haha(){
    window.open()
}*/

/*$("#heima").click = function () { alert("1003") }*/
/*$(function(){
    $("#heima").click(function () {
        alert(5987);
    })
})*/

/*$("#heima").click(function () {
    alert("ooo");
});

function  nihaoa() {
    var x = $("#heima").val();
    alert(x)
}*/

$("#ajaxdemo").click(function(){
        requestAjax("/user/oneUser",null,getres);
        function getres(data){
            console.log(data);
        }
}
);

$("#kk").click(function () {
    requestAjax("/user/oneUser",null,getAjaxResult);
    function getAjaxResult(data) {
        $("#aap").empty();
        $("#aap").append("<table id='+'tabledemo'+'><tr><th>用户名</th></tr><tr id='trdemo'></tr></table>");
        for (var i = 0;i<=data.length;i++) {
            $("#trdemo").append("<tr></tr><td>"+data[i]["username"]+ "</td></tr>");
        }
    }
   /* $("#aap").append("<a href="+'http://www.baidu.com'+">百xiao度</a>");*/
});

$("#qc").click(function () {
    $("#aap").empty();
});




