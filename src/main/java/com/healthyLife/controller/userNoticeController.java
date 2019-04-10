package com.healthyLife.controller;


import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.service.HomeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * 通知消息
 */
@Controller
@RequestMapping("/noticeController")
public class userNoticeController {

    @Autowired
    private HomeServiceInterface homeServiceInterface;

    /**
     * 查询全部的通知消息
     * @return
     */
    @RequestMapping("/noticeShow")
    @ResponseBody
    public ResponseResult userNotice(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        result = homeServiceInterface.userNoticeShow(request);
        return result;
    }
}
