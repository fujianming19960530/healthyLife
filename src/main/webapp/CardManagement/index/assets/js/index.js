var index = {
    init:function () {
        var me = this;
        me.noticeShow();
    },
    noticeShow:function () {
        var html = "<div class='row'><div class='col-md-4 col-sm-4'><div class='panel panel-default'><div class='panel-heading'>" +
            "Default Panel"+"</div></div></div></div>";
        $(".notice").append(html);
    }
}
$(function () {
        index.init();
    }
);