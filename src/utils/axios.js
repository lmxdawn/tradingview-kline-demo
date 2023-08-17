import axios from "axios";
import { API_HOST } from "../config";
import { Message } from "element-ui";
import {getLanguage} from "./language";
import router from "../router/index";
import store from "../store/index";
import {getToken} from "./userAuth";

// 创建axios实例
const service = axios.create({
    baseURL: API_HOST, // api的base_url
    timeout: 10000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.headers = {
            ...config.headers,
            'Accept-Language': getLanguage(),
            'x-token': getToken()
        }
        return config;
    },
    error => {
        // Do something with request error
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        const data = response.data;
        if (data.code) {
            if (data.code === 10001) {
                store.dispatch("logout").then(() => {
                    Message.error("验证失败,请重新登录");
                    router.push({
                        path: "/login",
                        query: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转过来
                    });
                });
            }
        }
        return data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
