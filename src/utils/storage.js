/**
 * 存储localStorage
 */
export const setStorageSync = (key, val) => {
    if (!key) return;
    localStorage.setItem(key, val)
    return true;
};

/**
 * 获取localStorage
 */
export const getStorageSync = key => {
    if (!key) return;
    return localStorage.getItem(key);
};

/**
 * 删除localStorage
 */
export const removeStorageSync = key => {
    if (!key) {
        return false;
    }
    return localStorage.removeItem(key)
};
