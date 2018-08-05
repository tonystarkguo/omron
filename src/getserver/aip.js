import {fetch} from'../getserver/fetch'
import $ from 'jquery'
export default {
    /**
     * 成品追溯
     */
    postContentTest(params) {
        return fetch('/productInfo/productInfo.view', params,"post")
    },
    /**
     * 部品追溯
     */
    postMinistry(params) {
        return fetch('/componenteEmployInfo/componenteEmployInfo.view', params, "post")
    },
    /* 测试 */
    TestGet(params) {
        return fetch('/v2/book/1220562', params,)
    },
     /* 导出 */
    exportFile_F_p(params){
        return fetch('/exportFile/exportFile.do', params,"post")
    },
    /**
     * 成品追溯-查看详情
     */
    showModuleDetailForFin(params){
        return fetch('/productInfo/productInfo_detail.do', params,"post")
    },
    /**
     * bu品追溯-查看详情
     */
    showModuleDetailForMin(params){
        return fetch('/componenteEmployInfo/componenteEmployInfo_detail.do', params,"post")
    },
    exportFile_F_p_Ajax(params){
        function getRootPath() {
            var pathName = window.location.pathname.substring(1);
            var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
            return window.location.protocol + '//' + window.location.host + '/' + webName
        } 
        // console.log(params,$)
        let iframe = document.createElement("iframe");
        iframe.style.display = "none";
        let dataStr = ''; //数据拼接字符串
        Object.keys(params).forEach(key => {
            let obj = params[key];
            if (typeof obj !== 'object') {

            } else {
                obj = JSON.stringify(obj);
            }
            dataStr += key + '=' + obj + '&';
        });
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        iframe.setAttribute("src", getRootPath() + "/exportFile/downLoad.do?" + dataStr);
        document.getElementById("app").appendChild(iframe);
        // $.ajax({
        //     type: "post",
        //     url: getRootPath()+"/exportFile/exportFile.do",
        //     data: params,
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     success: function (result) {
        //         if (result) {
        //             // successd(result)
        //             console.log(result)
        //         } else {
        //             // alert(JSON.stringify(result))
        //             // errorf(result.error_msg);
        //         }
        //     },
        //     error: function (err) {
        //         console.log(err)
        //     }
        // });
    },
    /**
     * 
     * 2018-08-05 修改
     * 成品追溯和部品追朔
     */
    postContentAndFin(params) {
        return fetch('/productInfo/productInfo.view', params,"post")
    },
}