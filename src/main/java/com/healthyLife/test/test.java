package com.healthyLife.test;


import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.*;
import org.junit.Test;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:applicationContext.xml")
public class test {

    /*@Autowired
    private UserService userService;*/

    @Test
    public void demo0702(){
        /*Map<String,Object> map = new HashMap<String, Object>();
        DateConverter dateConverter = new DateConverter();
        Date endSuspend =dateConverter.convert("2019-02-03 20:20:33");
        Date now = new Date();
        System.out.println(endSuspend+"/n"+now);*/
        //map.put("username","哈哈哈哈哈");
        //System.out.println(userService.selectByCondition(null));
        /*Logger logger = Logger.getLogger("cacheLog");
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        cacheManagerImpl.putCache("test", "test", 10 * 1000L);
        cacheManagerImpl.putCache("myTest", "myTest", 15 * 1000L);
        CacheListener cacheListener = new CacheListener(cacheManagerImpl);
        cacheListener.startListen();
        System.out.println("test:" + cacheManagerImpl.getCacheByKey("test").getDatas());
        System.out.println("myTest:" + cacheManagerImpl.getCacheByKey("myTest").getDatas());
        try {
            TimeUnit.SECONDS.sleep(20);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("test:" + cacheManagerImpl.getCacheByKey("test"));
        System.out.println("myTest:" + cacheManagerImpl.getCacheByKey("myTest"));*/
    }
}
