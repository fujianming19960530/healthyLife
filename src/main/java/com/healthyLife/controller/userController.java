package com.healthyLife.controller;

import com.healthyLife.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class userController {

    @Autowired
    private UserService userService;

    /*@RequestMapping("/oneUser")
    public @ResponseBody List<Map> oneUser(@RequestBody Map map){
        return userService.selectByCondition(map);
    }*/




}
