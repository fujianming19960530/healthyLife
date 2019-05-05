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

@Controller
@RequestMapping("loseCardController")
public class loseCardController {

    @Autowired
    private HomeServiceInterface homeServiceInterface;

    @RequestMapping("/loseCard")
    @ResponseBody
    public ResponseResult loseCard(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result.setResult(homeServiceInterface.queryLoseCardUserInfoByCondition(request));
        return result;
    }

    @RequestMapping("/insertLoseCard")
    @ResponseBody
    public ResponseResult insertLoseCard(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        homeServiceInterface.insertLoseCard(request);
        return result;
    }
}
