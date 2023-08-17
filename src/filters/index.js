import BigNumber from "bignumber.js";
import {STATIC_URL} from "../config";

export function strHidden(str, frontLen, endLen, len) {
    if (!str) {
        return ""
    }
    //str：要进行隐藏的变量  frontLen: 前面需要保留几位    endLen: 后面需要保留几位
    len = !len ? str.length - frontLen - endLen : len;
    let asterisk = "";
    for (let i = 0; i < len; i++) {
        asterisk += "*";
    }
    return (
        str.substring(0, frontLen) + asterisk + str.substring(str.length - endLen)
    );
}

export function stringToDecimals(str, decimals) {
    return new BigNumber(str).div(new BigNumber(decimals)).decimalPlaces(4).toString(10)
}

export function stringToDecimalsWeight(str, decimals, grade) {
    return new BigNumber(str).times(new BigNumber(grade)).div(new BigNumber(decimals)).decimalPlaces(4).toString(10)
}

/**
 * 时间格式化
 */
export function parseTime(time, cFormat, xArr, aArr) {
    if (!time) {
        return "-"
    }

    xArr = xArr && xArr.length === 2 ? xArr : ['AM', 'PM']
    aArr = aArr && aArr.length === 7 ? aArr : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else if (/^\d+$/.test(time)){
        time = (time + "").length === 10 ? +time * 1000 : +time
        date = new Date(time);
    } else {
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const timeStr = format.replace(/{(y|m|d|h|i|s|a|x)+}/g, (result, key) => {
        let value = formatObj[key];
        if (key === "x") {
            let h = formatObj['h']
            return h <= 12 ? xArr[0] : xArr[1]
        }
        if (key === "a")
            return aArr[value - 1];
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return timeStr;
}

/**
 * 格式化文件大小
 * @param value
 * @returns {*}
 */
export function renderSize(value) {
    if (!value || value === null || value === "") {
        return "";
    }
    let unitArr = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let srcsize = parseFloat(value);
    let index = Math.floor(Math.log(srcsize) / Math.log(1024));
    let size = srcsize / Math.pow(1024, index);
    size = size.toFixed(0); // 保留的小数位数
    return size + unitArr[index];
}


/**
 * @return {string}
 */
export function formatPathToUrl(path) {
    if (path.indexOf("http") !== -1) {
        return path;
    }
    return STATIC_URL + "/" + path
}
