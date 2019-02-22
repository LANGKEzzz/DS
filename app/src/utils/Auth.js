import JSCookie from "js-cookie";


const TokenKey = "X-Token";

export const setCookie = (TokenKey="X-Token")=>{
    //如果说客户端种cookie的时候需要用到setCookie
    //JSCookie.set(TokenKey,store.state.Token)
}

export const getCookie = (TokenKey="X-Token")=>{
    return JSCookie.get(TokenKey);
}

export const removeCookie = (TokenKey="X-Token")=>{
    JSCookie.remove(TokenKey);
}