package com.healthyLife.core;


/**
 * 核心代码，封装的前台返回参数
 *
 * 注意：返回值用setResult()方法传出去;
 *
 * @author jianming.fu
 */
public class ResponseResult extends ResponseCode {
    protected Object result;

    public ResponseResult() {
        super();
    }

    public ResponseResult(String res_code, String res_message) {
        super(res_code, res_message);
    }

    public ResponseResult(CodeInfo codeInfo) {
        super(codeInfo);
    }

    @SuppressWarnings("unchecked")
    public <T extends Object> T getResult() {
        return (T) result;
    }

    public void setResult(Object result) {
        this.result = result;
    }
}
