package com.healthyLife.core;

import org.apache.commons.lang.StringUtils;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;


/**
 * 核心代码，封装的前台返回参数
 *
 * 注意：不允许修改，要修改写个类继承他去重写方法
 *
 * @author jianming.fu
 */
@SuppressWarnings("serial")
public class ResponseCode implements Serializable {
    //private static Logger log = LoggerFactory.getLogger(ResponseCode.class);

    protected String res_code;
    protected String res_message;

    public ResponseCode(){

    }

    public ResponseCode(String res_code, String res_message){
        this.res_code = res_code;
        this.res_message = res_message;
    }

    public ResponseCode(CodeInfo codeInfo){
        if(codeInfo != null){
            res_code = codeInfo.getCode();
            res_message = codeInfo.getMessage();
        }
    }

    public void setCodeInfo(CodeInfo codeInfo){
        this.res_code = codeInfo.getCode();
        this.res_message = codeInfo.getMessage();
    }

    public void setException(Throwable e){
        if(e instanceof CodeException){
            CodeException codeException = (CodeException)e;
            this.res_code = codeException.getCode();
            this.res_message = codeException.getMessage();
        }
        else{
            String message = e.getMessage();
            if(StringUtils.isBlank(message)){
                if(e instanceof NullPointerException){
                    message = "NullPointerException";
                }
                else if(e instanceof InvocationTargetException){
                    InvocationTargetException targetException = (InvocationTargetException)e;
                    if(targetException.getCause() != null){
                        message = targetException.getCause().getMessage();
                    }
                    else if(targetException.getTargetException() != null){
                        message = targetException.getTargetException().getMessage();
                    }
                }
            }
            message = message == null ? "null" : message;

            CodeInfo codeInfo = null;
            try{
                codeInfo = Const.CODE_INFO.CODE_20001.replaceMessage("message", message);
            }
            catch(Exception ex){
                //log.error(ex);
                codeInfo = Const.CODE_INFO.CODE_30001;
            }

            setCodeInfo(codeInfo);
        }
    }

    public String getRes_code(){
        return res_code;
    }

    public void setRes_code(String res_code){
        this.res_code = res_code;
    }

    public String getRes_message(){
        return res_message;
    }

    public void setRes_message(String res_message){
        this.res_message = res_message;
    }
}
