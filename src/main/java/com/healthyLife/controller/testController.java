package com.healthyLife.controller;


import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("testController")
public class testController {

    /*@Autowired
    private UserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public ResponseResult login(@RequestBody Map<String,String> map) {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        result.setResult(userService.testService(null));
        return result;
    }

    @RequestMapping("/test")
    @ResponseBody
    public ResponseResult test() {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        result.setResult(userService.testService(null));
        return result;
    }

    @RequestMapping("/testhttp")
    @ResponseBody
    public ResponseResult httptest(HttpServletRequest request) {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        System.out.println(request.getParameter("account")+"******"+request.getParameter("password"));
        result.setResult(userService.testService(null));
        return result;
    }*/

}
