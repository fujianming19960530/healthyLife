package com.healthyLife.serviceImpl;
import com.healthyLife.mapper.UserMapper;
import com.healthyLife.service.UserService;
import com.healthyLife.util.Base64Code;
import com.healthyLife.util.DateConverter;
import com.healthyLife.util.GetStringByDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service("userService")
public class UserServiceImpl implements UserService {
    /*@Autowired
    private UserMapper userMapper;

    @Override
    public List<Map<String,Object>> testService(Map<String, String> map) {
        return userMapper.queryUserByCondition(null);
    }

    @Override
    public Map<String,String> user_login(Map<String,String> map) {
        Map<String,String> result = new HashMap<>();
        Base64Code base = new Base64Code();
        String mem_user_id = map.get("account");
        //这个是传入的加密密码
        String key = map.get("password");
        String password = base.decoder(key);
        Map<String,String> login_userInfo = new HashMap<>();
        //传入用户id，查询用户信息
        login_userInfo.put("mem_user_id",mem_user_id);
        List<Map<String,Object>> userInfo= userMapper.queryUserByCondition(login_userInfo);
        //对传入的密码解密与数据库密码对比
        if (userInfo.size() == 0){
            //如果用户结果为空就是管理员，查询管理员表
            List<Map<String,Object>> adminInfo = userMapper.queryAdminByCondition(login_userInfo);
            if(adminInfo.size() == 0){
                //用户不存在
                result.put("loginResult","0");
                result.put("message","用户不存在");
                return result;
            }else{
                String admin_password = adminInfo.get(0).get("password").toString();
                if(password.equals(base.decoder(admin_password))){
                    //管理员
                    //检查用户是否封号
                    Map<String,Object> suspend = userMapper.queryUserSuspend(login_userInfo);
                    //没有封号
                    if (suspend == null){
                        result.put("loginResult","2");
                        result.put("message","没有封号,是管理员");
                        return result;
                    }else{
                        //处理封号问题，得到封号截止时间，如果封号截止时间小于当前时间就解封
                        String endSuspendTime = suspend.get("suspend_end_time").toString();
                        DateConverter dateConverter = new DateConverter();
                        Date endSuspend =dateConverter.convert(endSuspendTime);
                        Date now = new Date();
                        if(endSuspend.getTime()<now.getTime()){
                            //解封
                            userMapper.unblockUser(mem_user_id);
                            result.put("loginResult","2");
                            result.put("message","没有封号,是管理员");
                            return result;
                        }else {
                            //封号时间，大于当前时间继续封号返回封号截止时间
                            result.put("loginResult","3");
                            result.put("message","账户异常，封号时间至"+endSuspend);
                            return result;
                        }
                    }
                }else {
                    //管理员密码错误
                    result.put("loginResult","0");
                    result.put("message","管理员密码错误");
                    return result;
                }
            }
        }else {
            //数据不为空，走普通用户逻辑
            String user_password = userInfo.get(0).get("password").toString();
            //String user_key = base.decoder(user_password);
            if(password.equals(base.decoder(user_password))){
                //普通用户
                //检查用户是否封号
                Map<String,Object> suspend = userMapper.queryUserSuspend(login_userInfo);
                if (suspend == null){
                    result.put("loginResult","1");
                    result.put("message","没有封号,是普通用户");
                    return result;
                }else{
                    //处理封号问题，得到封号截止时间，如果封号截止时间小于当前时间就解封
                    String endSuspendTime = suspend.get("suspend_end_time").toString();
                    DateConverter dateConverter = new DateConverter();
                    Date endSuspend =dateConverter.convert(endSuspendTime);
                    GetStringByDate getStringByDate = new GetStringByDate();
                    String endtime = getStringByDate.getTime(endSuspend);
                    Date now = new Date();
                    if(endSuspend.getTime()<now.getTime()){
                        //解封
                        userMapper.unblockUser(mem_user_id);
                        result.put("loginResult","1");
                        result.put("message","没有封号,是普通用户");
                        return result;
                    }else {
                        //封号时间，大于当前时间继续封号返回封号截止时间
                        result.put("loginResult","3");
                        result.put("message","账户异常，封号时间至"+endtime);
                        return result;
                    }
                }
            }else{
                //普通用户密码错误
                result.put("loginResult","0");
                result.put("message","普通用户密码错误");
                return result;
            }
        }
    }*/
}
