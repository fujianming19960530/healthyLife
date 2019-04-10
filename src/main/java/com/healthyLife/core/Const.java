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

        /**登录成功
        1000是普通用户，2000是管理员,3000是超级管理员*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_1000 = new CodeInfo("1000","成功","登录成功");
        public static final CodeInfo LOGIN_MESSAGE_CODE_2000 = new CodeInfo("2000","成功","登录成功");
        public static final CodeInfo LOGIN_MESSAGE_CODE_3000 = new CodeInfo("3000","成功","登录成功");
        /**登录失败
         *密码错误*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_004 = new CodeInfo("004","失败","登录失败，用户名或密码错误");
        /**账户异常*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_001 = new CodeInfo("001","失败","登录失败，账号存在异常");
        /**验证码校验失败*/
        public static final CodeInfo LOGIN_MESSAGE_CODE_005 = new CodeInfo("005","失败","登录失败，验证码校验失败");
        /**登录超时*/
        public static final CodeInfo LOGIN_TIMEOUT_CODE_001 = new CodeInfo("0004","超时","登录超时");
    }

    /** 应用编码规范 */
    public static class CODE_INFO {
        /**系统内部错误*/
        public static final CodeInfo CODE_20001 = new CodeInfo("20001", "系统内部错误:${message}", "Server Error:${message}");
        /**定位请求，设备定位请求数据不存在*/
        public static final CodeInfo CODE_30001 = new CodeInfo("30001", "设备定位请求数据不存在！", "设备定位请求数据不存在！");
        }




}
