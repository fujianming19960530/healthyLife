package com.healthyLife.controller;

import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * 登录方法
 *
 */
@Controller
@RequestMapping("/loginController")
public class loginController{

    @Autowired
    private UserService userService;

    //用户登录信息
    @RequestMapping("/login")
    @ResponseBody
    public ResponseResult login(HttpServletRequest request) {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        Map<String,String> map = new HashMap<>();
        map.put("account",request.getParameter("account"));
        map.put("password",request.getParameter("password"));
        //调用用户登录service,保存登录信息，loginResult是结果，message是信息
        Map<String,String> loginInfo = userService.user_login(map);
        if("0".equals(loginInfo.get("loginResult"))){
            result.setCodeInfo(Const.login.LOGIN_MESSAGE_CODE_004);
        }if("1".equals(loginInfo.get("loginResult"))){
            result.setCodeInfo(Const.login.LOGIN_MESSAGE_CODE_1000);
        }if("2".equals(loginInfo.get("loginResult"))){
            result.setCodeInfo(Const.login.LOGIN_MESSAGE_CODE_2000);
        }if("3".equals(loginInfo.get("loginResult"))){
            result.setCodeInfo(Const.login.LOGIN_MESSAGE_CODE_003);
        }
        result.setResult(loginInfo);
        result.setRes_message(loginInfo.get("message"));
        return result;
    }
}
