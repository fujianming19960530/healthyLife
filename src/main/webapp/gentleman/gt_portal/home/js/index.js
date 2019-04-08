    var home = {
    	init:function () {
    			var me = this;
    			me.setWindowWidth();	
                me.client_detail();
            console.log(Utils.getCookie("username"));
    		},
        userinfo:function(){
            $(".user_avater").mouseover;
    	    $(".user_avater").style.borderColor = "FF0000";
        },

    	/*setWindowWidth:function (){
            var nav=$(".title"); //得到导航对象
            var content=$(".content");
            var win=$(window); //得到窗口对象
            var sc=$(document);//得到document文档对象。
            win.scroll(function(){
            var temp = 290-sc.scrollTop();
            if(sc.scrollTop()>=220){
                nav.css('top','0');
                nav.css('position','fixed');
                nav.css('z-index','10000');
                if(sc.scrollTop()>=220&&sc.scrollTop()<=290){
                    content.css('margin-top',temp+"px");
                }if(sc.scrollTop()>290){
                    content.css('margin-top',0);
                }
            }else if(sc.scrollTop()<220){
                nav.css('top',(220-sc.scrollTop())+"px");
                nav.css("position",'');
                content.css('margin-top',0);
            }
        })
        },*/

        client_detail:function(){
            var detail = $("#p_client_detail").html();
            var new_detail = detail.substring(0,42);
            $("#p_client_detail").html(new_detail+"...");
        },
}


$(function(){
	home.init();
});