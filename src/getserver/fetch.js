let baseUrl="";
import { Loading } from 'element-ui';
function getRootPath() {
        var pathName = window.location.pathname.substring(1);
        var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
        return window.location.protocol + '//' + window.location.host + '/' + webName
} 
if (process.env.NODE_ENV == 'development'){
    baseUrl ="/apis/extend/"
} else if (process.env.NODE_ENV == 'production'){
    baseUrl = getRootPath();
}
export{
    baseUrl
}
import axios from 'axios'

const downloadUrl = url => {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
        document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
}
let loadingInstance ="";
axios.defaults.timeout = 100000;            //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';      //配置请求头
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';      //配置请求头
axios.defaults.baseURL = baseUrl;  //配置接口地址
// console.log(axios.defaults)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
     loadingInstance = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
    if (config.method === 'post') {
        if (typeof config.data=="object"){
            config.data = JSON.stringify(config.data);
        }else{
            config.data = config.data;
        }
       
    }
    return config;
}, (error) => {
    console.log("错误的传参", 'fail');
    loadingInstance.close();
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    /* 下载 */
    //对响应数据做些事
    if (!!res.data.erro) {
        // _.toast(res.data.msg);
        loadingInstance.close();
        return Promise.reject(res.data);
    }
    console.log("成功")
    loadingInstance.close();
    return res;
}, (error) => {
    console.log("网络异常", 'fail');
    loadingInstance.close();
    return Promise.reject(error);
});
//返回一个Promise(发送post请求)
export function fetch(url, params,method="") {
    console.log(method)
    // url = baseUrl+url;
    if (method == "" || method==="get"){
        return new Promise((resolve, reject) => {
            axios.get(url, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }else{
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    
}