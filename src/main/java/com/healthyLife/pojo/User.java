package com.healthyLife.pojo;

import java.util.Date;

public class User {
    private Integer userid;

    private String username;

    private String avatar;

    private String password;

    private String phone;

    private Integer age;

    private Date birthday;

    private String sex;

    private String address;

    private Integer integral;

    private String onlinestatus;

    private String userstatus;

    private Integer lasttechnicianid;

    private Integer levelid;

    private Integer areaid;

    private String usernumber;

    private String demo1;

    private String demo2;

    private String demo3;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar == null ? null : avatar.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getIntegral() {
        return integral;
    }

    public void setIntegral(Integer integral) {
        this.integral = integral;
    }

    public String getOnlinestatus() {
        return onlinestatus;
    }

    public void setOnlinestatus(String onlinestatus) {
        this.onlinestatus = onlinestatus == null ? null : onlinestatus.trim();
    }

    public String getUserstatus() {
        return userstatus;
    }

    public void setUserstatus(String userstatus) {
        this.userstatus = userstatus == null ? null : userstatus.trim();
    }

    public Integer getLasttechnicianid() {
        return lasttechnicianid;
    }

    public void setLasttechnicianid(Integer lasttechnicianid) {
        this.lasttechnicianid = lasttechnicianid;
    }

    public Integer getLevelid() {
        return levelid;
    }

    public void setLevelid(Integer levelid) {
        this.levelid = levelid;
    }

    public Integer getAreaid() {
        return areaid;
    }

    public void setAreaid(Integer areaid) {
        this.areaid = areaid;
    }

    public String getUsernumber() {
        return usernumber;
    }

    public void setUsernumber(String usernumber) {
        this.usernumber = usernumber == null ? null : usernumber.trim();
    }

    public String getDemo1() {
        return demo1;
    }

    public void setDemo1(String demo1) {
        this.demo1 = demo1 == null ? null : demo1.trim();
    }

    public String getDemo2() {
        return demo2;
    }

    public void setDemo2(String demo2) {
        this.demo2 = demo2 == null ? null : demo2.trim();
    }

    public String getDemo3() {
        return demo3;
    }

    public void setDemo3(String demo3) {
        this.demo3 = demo3 == null ? null : demo3.trim();
    }
}