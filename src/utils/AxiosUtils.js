import axios from 'axios';

/**
 * 设置全局的 axios 默认值
 */
const axiosInstance = axios.create({
    baseURL:"http://10.0.2.2:8099/MySSM",   //设置访问URL前缀
    timeout: 2000,  //`timeout` 指定请求超时的毫秒数(0 表示无超时时间)
});

export default axiosInstance;