package com.healthyLife.controller;


import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.service.HomeServiceInterface;
import com.healthyLife.util.CacheManagerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/adminController")
public class adminController {

    @Autowired
    private HomeServiceInterface homeService;

    @RequestMapping("/queryFinance")
    @ResponseBody
    public ResponseResult queryFinance(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result = homeService.queryFinance(request);
        return result;
    }

    @RequestMapping("/queryAccess")
    @ResponseBody
    public ResponseResult queryAccess(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result = homeService.queryAccess(request);
        return result;
    }

    @RequestMapping("/checkUserRole")
    @ResponseBody
    public ResponseResult checkUserRole(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
        result.setResult(((HashMap) userInfo).get("role_level").toString());
        return result;
    }

    @RequestMapping("/adminInfo")
    @ResponseBody
    public ResponseResult adminInfo(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
        result.setResult(userInfo);
        return result;
    }

    @RequestMapping("/updateNotices")
    @ResponseBody
    public ResponseResult updateNotices(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result = homeService.updateNotice(request);
        return result;
    }

    @RequestMapping("/delNotices")
    @ResponseBody
    public ResponseResult delNotices(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        homeService.delNotices(request);
        return result;
    }

    @RequestMapping(value="/queryuserInfo")
    @ResponseBody
    public ResponseResult queryuserInfo(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result = homeService.queryUserInfo(request);
        return result;
    }

    @RequestMapping(value="/updateUser")
    @ResponseBody
    public ResponseResult updateUser(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        homeService.updateUser(request);
        return result;
    }

    @RequestMapping(value="/delUser")
    @ResponseBody
    public ResponseResult delUser(@RequestBody Map<String,String> request){
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        homeService.delUser(request);
        return result;
    }


}
