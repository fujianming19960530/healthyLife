package com.healthyLife.controller;


import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.service.HomeServiceInterface;
import com.healthyLife.util.CacheManagerImpl;
import com.healthyLife.util.RandomValidateCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * 登录方法
 *
 */
@Controller
@RequestMapping("/loginController")
public class userLoginController {

    @Autowired
    private HomeServiceInterface homeServiceInterface;

    //用户登录信息
    @RequestMapping("/login")
    @ResponseBody
    public ResponseResult login(@RequestBody Map<String,String> request) {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        Map<String,String> requestMap = new HashMap<>();
        requestMap.put("account",request.get("account"));
        requestMap.put("password",request.get("password"));
        requestMap.put("code",request.get("code"));
        result = homeServiceInterface.userLogin(requestMap);
        return result;
    }

    //登录验证码获取
    @RequestMapping(value="/checkCode")
    public void checkCode(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //设置相应类型,告诉浏览器输出的内容为图片
        response.setContentType("image/jpeg");
        //设置响应头信息，告诉浏览器不要缓存此内容
        response.setHeader("pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expire", 0);
        RandomValidateCode randomValidateCode = new RandomValidateCode();
        try {
            randomValidateCode.getRandcode(request, response);//输出图片方法
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
