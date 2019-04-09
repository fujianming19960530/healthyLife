
/* 封装好的ajax，传参：
* URL：地址
* objects：参数对象
* callback:调用的函数，调用的时候直接callback（data）即可取到数据
* */
console.log($("#account").val());
function getResult(url,objects,callback) {
    $.ajax({
        type : 'post',
        url : url,
        contentType : 'application/json;charset=utf-8',
        //contentType:'application/x-www-form-urlencoded;charset=utf-8',
        withCredentials: true,
        data : JSON.stringify(objects),
        //data:objects,
        success : callback
    });
}
(function($){
    window.Invoker = {
        invokeRequest:function (url,objects,callback){
            //本地测试地址就用这个，线上的自己设置
            var root = "http://localhost:8888/healthyLife/";
            //防止$不能使用就这样调用ajax
            getResult(root+url,objects,callback);
        }
    };
})();

function invoker(url,objects,callback) {
    var me = this;
    me.invokeRequest(url,objects,callback);
}



