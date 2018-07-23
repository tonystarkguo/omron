import {fetch} from'../getserver/fetch'

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
}