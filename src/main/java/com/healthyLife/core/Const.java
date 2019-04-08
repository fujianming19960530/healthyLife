package com.healthyLife.core;





/**
 * 核心代码，封装的前台返回参数
 *
 * 注意：系统常量，系统编码
 *      可以添加编码，但是不允许删除
 *
 * @author jianming.fu
 */
public class Const {
    /**
     * 登录信息返回信息
     */
    public static class login{
        public static final int LOGIN_FAILE_CODE = 0;
        public static final int LOGIN_SUCCESS_CODE = 1;

        /**登录成功*/
        /**1000是普通用户，2000是管理员*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_1000 = new CodeInfo("1000","成功","登录成功");
        public static final CodeInfo LOGIN_MESSAGE_CODE_2000 = new CodeInfo("2000","成功","登录成功");
        /**密码错误*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_004 = new CodeInfo("004","失败","登录失败，用户名或密码错误");
        /**账户异常*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_001 = new CodeInfo("001","失败","登录失败，账号存在异常");
        /**账户封停*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_003 = new CodeInfo("003","失败","登录失败，账户封停");


        public static final String LOGIN_CHECK_CODE_000 = "密码有效期已经过了365天，请重置密码";
        public static final String LOGIN_CHECK_CODE_001 = "账号存在安全隐患，请及时修改密码";
    }

    /** 应用编码规范 */
    public static class CODE_INFO {

        /**服务调用成功*/
        public static final CodeInfo CODE_00000 = new CodeInfo("00000", "Success", "服务调用成功");
        /** 该请求必须用GET方法 */
        public static final CodeInfo CODE_11001 = new CodeInfo("11001", "该请求必须用GET方法", "request method must be get");
        /** 该请求必须用POST方法 */
        public static final CodeInfo CODE_11002 = new CodeInfo("11002", "该请求必须用POST方法", "request method must be post");
        /** 通用警告，内容自定义 **/
        public static final CodeInfo CODE_14000 = new CodeInfo("14000", "${message}", "message:${message}");
        /**系统内部错误*/
        public static final CodeInfo CODE_20001 = new CodeInfo("20001", "系统内部错误:${message}", "Server Error:${message}");
        /**非法的参数*/
        public static final CodeInfo CODE_20102 = new CodeInfo("20102", "非法的参数", "Invalid Arguments");
        /** 参数不能为空 */
        public static final CodeInfo CODE_30004 = new CodeInfo("30004", "参数不能为空", "Param can not be null");
        /** 请求返回失败 **/
        public static final CodeInfo CODE_40000 = new CodeInfo("40000", "请求返回失败", "Response fail");
        /** 登录超时或未登录 **/
        public static final CodeInfo CODE_40001 = new CodeInfo("40001", "登录超时或未登录", "Login timeout");
        /** 验证码错误 **/
        public static final CodeInfo CODE_40002 = new CodeInfo("40002", "验证码错误", "Error code");
        /** 保存用户失败 **/
        public static final CodeInfo CODE_40003 = new CodeInfo("40003", "保存用户失败", "Save user fail");
        /** 密码校验失败，请重新输入密码 */
        public static final CodeInfo CODE_40008 = new CodeInfo("40008", "密码校验失败，请重新输入密码",
                "Valid password fail please enter the right password");
        /** 脚本编译出错 */
        public static final CodeInfo CODE_40009 = new CodeInfo("40009", "脚本编译出错:${message}", "Compile field error:${message}");
        /** 校验码不能为空 */
        public static final CodeInfo CODE_40011 = new CodeInfo("40011", "校验码不能为空", "Verification code can not be null");
        /** 请输入正确的校验码 */
        public static final CodeInfo CODE_40012 = new CodeInfo("40012", "请输入正确的校验码",
                "Please entry the right verification code");
        /** 用户名或手机号码不能为空 */
        public static final CodeInfo CODE_40013 = new CodeInfo("40013", "用户名或手机号码不能为空", "User name can not be null");
        /**用户名不存在*/
        public static final CodeInfo CODE_40014 = new CodeInfo("40014", "用户名不存在", "User name is not exist");
        /**密码错误*/
        public static final CodeInfo CODE_40016 = new CodeInfo("40016", "密码错误", "Wrong Password");
        /**校验失败,自定义文字提示*/
        public static final CodeInfo CODE_40018 = new CodeInfo("40018", "校验失败:${message}", "Valid fail:${message}");
        /** 校验码已失效，请重新点击获取 */
        public static final CodeInfo CODE_40020 = new CodeInfo("40020", "短信验证码已失效，请重新点击获取",
                "Verification code haved expired, please try to get again");
        /** 请点击获取短信验证码 */
        public static final CodeInfo CODE_40021 = new CodeInfo("40021", "请点击获取短信验证码",
                "Please try to get verification code");
        /** 手机号码登录次数超过设定值 */
        public static final CodeInfo CODE_40022 = new CodeInfo("40022", "抱歉，您最近1小时内尝试登录已经达到10次，请您于约5分钟后再试",
                "Sorry, you tried to log in max times in the last hour. Please try again in about 5 minutes.");
        /** IP登录次数超过设定值 */
        public static final CodeInfo CODE_40023 = new CodeInfo("40023", "抱歉，您的ip最近1小时内尝试登录已经超过设定值次数，请您于约5分钟后再试",
                "Sorry, you tried to log in max times in the last hour. Please try again in about 5 minutes.");
        /** 登录失败次数超过5次 */
        public static final CodeInfo CODE_40024 = new CodeInfo("40024", "您已经失败登录超过5次，用户已锁定！请您约5分钟后重试！",
                "Your  has failed to log in more than 5 times and the user is locked.Please try again in about 5 minutes.");
        /** 管理应用客户IP不是白名单 */
        public static final CodeInfo CODE_40025 = new CodeInfo("40025", "您所在的IP没有权限登录物联网业务管理平台，请联系管理员配置！",
                "Your client IP address has not privilege to login,please contact administrator.");
        /**定位请求，设备定位请求数据不存在*/
        public static final CodeInfo CODE_30001 = new CodeInfo("30001", "设备定位请求数据不存在！", "设备定位请求数据不存在！");
        /**响应超时*/
        public static final CodeInfo CODE_30005 = new CodeInfo("30005", "响应超时", "Response timeout");
        /**用户余额查询，先判断msisdn卡存不存在*/
        public static final CodeInfo CODE_40004 = new CodeInfo("40004", "Msisdn卡号不存在！", "卡号不存在！");
        /**用户余额查询，msisdn卡需要为物联网卡*/
        public static final CodeInfo CODE_40005 = new CodeInfo("40005", "请输入物联网卡号！", "请输入物联网卡号！");
        /** 流程出错 */
        public static final CodeInfo CODE_40010 = new CodeInfo("40010", "流程处理出错:${message}", "Flow Deal error:${message}");
        /**集团客户修改对应门户用户登录信息（密码和手机号码），先判断他的门户用户存不存在*/
        public static final CodeInfo CODE_40044 = new CodeInfo("40044", "该集团客户的门户登录用户不存在,请联系管理员！", "该集团客户的门户登录用户不存在,请联系管理员！");
        /**成员群组下存在有效成员，不允许删除！*/
        public static final CodeInfo CODE_60001 = new CodeInfo("60001", "成员群组下存在有效成员，不允许删除", "成员群组下存在有效成员，不允许删除！");
        /** 重置密钥失败*/
        public static final CodeInfo CODE_80001 = new CodeInfo("80001", "重置密钥失败！", "Fail to reset AppSecret");
        /** 新建应用失败*/
        public static final CodeInfo CODE_80002 = new CodeInfo("80002", "新建应用失败！", "Fail to add AppSecret");
    }

    /** API编码规范 */
    public static class API_CODE_INFO {
        /**成功*/
        public static final CodeInfo CODE_00000 = new CodeInfo("00000", "成功", "Success");
        /**该请求必须用GET方法*/
        public static final CodeInfo CODE_11001 = new CodeInfo("11001", "该请求必须用GET方法", "request method must be get");
        /**该请求必须用POST方法*/
        public static final CodeInfo CODE_11002 = new CodeInfo("11002", "该请求必须用POST方法", "request method must be post");
        /**协议类型必须是 json **/
        public static final CodeInfo CODE_11003 = new CodeInfo("11003", "协议类型必须是 json", "request protocol method must be json");
        /**请求内容类型必须是 application/json;charset=UTF-8 **/
        public static final CodeInfo CODE_11004 = new CodeInfo("11004", "请求内容类型必须是 application/json;charset=UTF-8",
                "request content_code must be application/json;charset=UTF-8");
        /**api请求参数不能为空**/
        public static final CodeInfo CODE_12000 = new CodeInfo("12000", "请求参数不能为空", "request parmas is empty");
        /**appid不能为空*/
        public static final CodeInfo CODE_12001 = new CodeInfo("12001", "appid不能为空", "appid is empty");
        /**ability不能为空*/
        public static final CodeInfo CODE_12002 = new CodeInfo("12002", "ability不能为空", "ability is empty");
        /**transationid不能为空*/
        public static final CodeInfo CODE_12003 = new CodeInfo("12003", "transationid不能为空", "transationid is empty");
        /**timestamp不能为空*/
        public static final CodeInfo CODE_12004 = new CodeInfo("12004", "timestamp不能为空", "timestamp is empty");
        /**randomstr不能为空*/
        public static final CodeInfo CODE_12005 = new CodeInfo("12003", "randomstr不能为空", "randomstr is empty");
        /**sign不能为空*/
        public static final CodeInfo CODE_12006 = new CodeInfo("12006", "sign不能为空", "sign is empty");
        /**body不能为空*/
        public static final CodeInfo CODE_12007 = new CodeInfo("12007", "body不能为空", "body is empty");
        /**系统内部错误*/
        public static final CodeInfo CODE_20001 = new CodeInfo("20001", "系统内部错误:${message}", "Server Error:${message}");
        /**地址格式错误*/
        public static final CodeInfo CODE_30033 = new CodeInfo("30033", "地址格式错误，应为：/{contextPath}/api/{version}/{method}",
                "Error Address, should be:/{contextPath}/api/{version}/{method}");
        /**签名错误*/
        public static final CodeInfo CODE_30034 = new CodeInfo("30034", "签名错误", "Error Signature");
        /**API校验失败,自定义文字提示*/
        public static final CodeInfo CODE_30035 = new CodeInfo("30035", "API校验失败:${message}", "Valid fail:${message}");
        /**未知错误*/
        public static final CodeInfo CODE_40000 = new CodeInfo("40000", "未知错误", "Unknown error");
        /**内部调用错误*/
        public static final CodeInfo CODE_40001 = new CodeInfo("40001", "内部调用错误", "Server Internal Error");
        /**body内参数${param}不能为空*/
        public static final CodeInfo CODE_40002 = new CodeInfo("40002", "body内参数${param}不能为空", "body: ${param} can not be empty");
        /**${message}有误*/
        public static final CodeInfo CODE_40003 = new CodeInfo("40003", "${message}有误", "param msisdn is error");
        /**内部调用错误*/
        public static final CodeInfo CODE_40004 = new CodeInfo("40004", "内部调用错误:${message}", "Server Internal Error:${message}");
        /**白名单校验错误**/
        public static final CodeInfo CODE_50000 = new CodeInfo("50000", "API白名单校验失败：${message}", "Valid whitelist is error");
    }
}
