var head = {
    init:function () {
        var me = this;
        me.loadIndex();
    },
    loadIndex:function () {
        //$("#totalPage").load('index.html');
        /*$("#indexPage").unbind("click",function () {
            debugger;
            $("#totalPage").empty();
            $("#totalPage").open('index.html');
        });
        $("#losePage").unbind("click",function () {
            $("#totalPage").empty();
            $("#totalPage").open('losePage.html');
        });
        $("#getPage").unbind("click",function () {
            $("#totalPage").empty();
            $("#totalPage").load('getPage.html');
        });
        $("#aboutPage").unbind("click",function () {
            $("#totalPage").empty();
            $("#totalPage").load('aboutPage.html');
        });*/
    }
}
$(function () {
    head.init();
    }
);