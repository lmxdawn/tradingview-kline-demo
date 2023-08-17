import { getStorageSync, setStorageSync, removeStorageSync } from "./storage";

const tokenKey = "member_token";
const initKey = "member_init";

// 获取用户的本地token
export function getToken() {
    return getStorageSync(tokenKey);
}

// 设置用户的本地token
export function setToken(toekn) {
    return setStorageSync(tokenKey, toekn);
}

// 删除登录信息
export function delToken() {
    return removeStorageSync(tokenKey);
}

// 获取用户初始化信息(例如:头像和昵称)
export function getMemberInit() {
    const objStr = getStorageSync(initKey)
    return objStr ? JSON.parse(objStr) : {};
}

// 设置用户初始化信息(例如:头像和昵称)
export function setMemberInit(obj) {
    return setStorageSync(initKey, JSON.stringify(obj));
}

// 删除用户初始化信息(例如:头像和昵称)
export function delMemberInit() {
    return removeStorageSync(initKey);
}
