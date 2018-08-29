<!-- 部品批号追溯 -->
<!--  -->
<template>
  <div class="minSt">
      <el-card class="box-card">
          <div slot="header" class="clearfix" style="min-height:30px;">
                <el-button  size="mini" style="float: left;clear: both;" v-if="!searchedProcuct" @click="backUppag">返回</el-button>
              <el-button size="mini" style="float: left;" @click="exportFile">导出</el-button>
               <el-button v-if="showSearchList" size="mini" style="float: right;"  @click="clearSearchValue">清除</el-button>
                <el-button v-if="showSearchList" size="mini" style="float: right;" @click="searchList(0)">搜索</el-button>
                 <!-- <div v-if="searchedProcuct" class="tital-search"><span>合计:</span><span>{{totalAll}}</span></div> -->
            <span style="clear: both;"></span>
            </div>
            <div class="search-list" v-if="showSearchList">
                <el-form ref="form" :model="sizeForm" :rules="rules" label-width="90px" size="small" label-position="left">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="机种名">
                                <el-input v-model="valput"  :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="6" :offset="3">
                            <el-form-item label="部品品番">
                                <el-input v-model="sizeForm.minsPro"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" :offset="3">
                            <el-form-item label="部品批号">
                                <el-input v-model="sizeForm.ph"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                         <el-col :span="6">
                            <el-form-item label="生产期间">
                                <el-form-item prop="date1">
                                        <el-date-picker type="date" placeholder="请选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" :offset="3">
                            <el-form-item label="">
                                <el-form-item prop="date1" style="margin-left:-90px">
                                        <el-date-picker type="date" placeholder="请选择日期" v-model="sizeForm.date2" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" :push="3">
                            <!-- <el-form-item label="">
                                <el-input v-model="sizeForm.name"></el-input>
                            </el-form-item> -->
                                <!-- <el-form-item label="合计">
                                    <el-input v-model="totalAll"  :disabled="true"></el-input>
                                </el-form-item> -->
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-radio-group v-model="radio2" @change="radioChange" style="width:100%;">
                                 <el-col :span="4" :pull="1">
                                        <el-radio :label="1" >已生成成品</el-radio>
                                 </el-col>
                                 <el-col :span="4">
                                         <el-radio :label="2">未生成成品</el-radio>
                                 </el-col>
                                 <el-col :span="6">
                         
                                </el-col>
                            </el-radio-group>
                    </el-row>
            </el-form>
            </div>
            <div class="text-item">
              <el-table  v-if="searchedProcuct" :cell-style="{'padding':'3px 0'}" :border='true' ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" :min-height="200" :max-height="elTableBodyWrapperMaxHeight"  @selection-change="handleSelectionChange" @sort-change="sortChange">
                <el-table-column  type="selection" width="55" align="center" fixed> </el-table-column>
                <el-table-column prop="item" align="left" label="机种名" min-width="120" sortable></el-table-column>

                <!-- <el-table-column prop="date_time_T" align="left" label="生产时间" min-width="100" sortable></el-table-column> -->
                <!-- <el-table-column prop="work_order_no" align="left" label="工单号" min-width="100" sortable show-overflow-tooltip></el-table-column>                                    -->
                <el-table-column prop="pim_id" align="left" label="PIM品番" min-width="100" sortable></el-table-column>
                <el-table-column prop="product_batch_no" align="left" label="成品批号" min-width="100" sortable></el-table-column>                            
                <el-table-column prop="component_no" align="left" label="部品品番" min-width="120" sortable></el-table-column>
                <el-table-column prop="component_batch_no" align="left" label="部品批号" min-width="120" sortable></el-table-column>
                
                <!-- <el-table-column prop="cb_id" align="left" label="CB_ID" min-width="100" sortable></el-table-column> -->
                <!-- <el-table-column prop="trace_no" align="left" label="TRACE NO" min-width="120" sortable></el-table-column> -->
                <!-- <el-table-column prop="product_serial_no" align="left" label="成品序列号" min-width="120" sortable></el-table-column> -->
                 <!-- <el-table-column fixed="right" label="操作" width="100"><template slot-scope="scope"><el-button @click="handleClick(scope.row)" type="text" size="small">展开详情</el-button></template></el-table-column> -->
                 </el-table>
              </el-table>

                <!-- 标签切换 -->
                <el-tabs v-if="!searchedProcuct" v-model="activeName2" type="card" @tab-click="handleClickCard">
                        <el-tab-pane label="CB" name="CB"></el-tab-pane>
                        <el-tab-pane label="PM" name="PM"></el-tab-pane>
                        <el-tab-pane label="FAT组装" name="COVER"></el-tab-pane>
                        <el-tab-pane label="工序检查履历" name="CHECKED"></el-tab-pane>
                </el-tabs>

              <el-table v-if="!searchedProcuct" :border='true' ref="multipleTableFishPrduct" :data="tableData4" tooltip-effect="dark" style="width: 100%" :min-height="200"  :max-height="elTableBodyWrapperMaxHeight"  @selection-change="handleSelectionChangeFishedProduct" @sort-change="sortChangeT">
                    <el-table-column  prop="date" type="selection" width="55" align="center" fixed> </el-table-column>
                    <el-table-column v-if="activeName2!='CHECKED' " prop="process_name" align="left" label="生产工序" min-width="120" sortable></el-table-column>
                    <el-table-column v-if="activeName2!='CHECKED' " prop="component_no" align="left" label="部品品番" min-width="120" sortable></el-table-column>
                    <el-table-column v-if="activeName2!='CHECKED' " prop="component_location" align="left" label="部品位置" min-width="120" sortable></el-table-column>
                    <el-table-column v-if="activeName2!='CHECKED' " prop="component_batch_no" align="left" label="部品批号" min-width="120" sortable></el-table-column>
                    
                    <el-table-column v-if="activeName2=='CHECKED' " prop="production_process" align="left" label="生产工序" min-width="120" sortable></el-table-column>        
                    <el-table-column v-if="activeName2=='CHECKED' " prop="is_pass" align="left" label="检查结果" min-width="120" sortable></el-table-column>        
                    <el-table-column v-if="activeName2=='CHECKED' " prop="start_time" align="left" label="开始时间" min-width="120" sortable></el-table-column>        
                    <el-table-column v-if="activeName2=='CHECKED' " prop="date_time" align="left" label="结束时间" min-width="120" sortable></el-table-column>        
                    <el-table-column v-if="activeName2=='CHECKED' " prop="time_difference" align="left" label="耗时(分)" min-width="120" sortable></el-table-column>                         
              
                </el-table>
           
            </div>
            <div class="block"  v-show="searchedProcuct">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="total,prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </div>
            <!-- 部品信息 cb mb cover -->
             <div class="block" v-show="!searchedProcuct">
              <el-pagination
                @current-change="handleCurrentChangeForCb"
                :current-page.sync="currentPageForCb"
                :page-size="pageSizeForCb"
                layout="total,prev, pager, next, jumper"
                :total="totalForCb">
              </el-pagination>
            </div>
      </el-card>
  </div>
</template>

<script>
    //import someComponent from './someComponent'
    import {formatDate} from '../untils/dateUntil.js'
    import api from '../getserver/aip.js'
     const ObjInit={"pagingParamEnyity":{"page_no": 0, "order": null,"order_column": null,"page_no":0},"componenteEmployInfo":{"component_no":null,"component_batch_no":null,"date_time":null}};
    export default {
        name: "",
        data() {
            return {
                msg: "Hello Vue.js",
                total:0,
                pageSize:20,
                currentPage:1,
               inputSearch:'',
                tableData3: [],
                tableData4:[],
              multipleSelection: [],
              multipleTableFishPrduct:[],
              sizeForm: {
                minsPro:"",
                ph:"",
                date1: '',
                date2: '',
                COMPONENT_pc:"",
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                pimid:"",
              },
                radio2:1,
                showSearchList:true,
                searchedProcuct:true,
                obj:{"pagingParamEnyity":{"page_no": 0, "order": null,"order_column": null,"page_no":0},"componenteEmployInfo":{"component_no":null,"component_batch_no":null,"date_time":null}},
                screenHeight:'',
              rules:{
                  minsPro:[ { required: true, message: '请填写部品品番', trigger: 'blur' }],
                  COMPONENT_pc:[ { required: true, message: '请填写部品批次', trigger: 'blur' }],
              },
              activeName2:"CB",
                CB_List:[],
                PM_List:[],
                COVER_List:[],
                currentPageForCb:1,//当前页码
                pageSizeForCb:20,//单页显示数据
                totalForCb:0,//总页数
                productInfo_row:null,
                sortObj:{"order":null,"order_column":null},
                sortObjT:{"order":null,"order_column":null},
                totalAll:0,
                valput:"3.5G",
            }
        },
        component: {
            //someComponent
        },
        methods: {
          handleSelectionChange(val) {
            this.multipleSelection = val;
          },
           handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          /* 清空当前排序的 */
          clearSort(){
              this.sortObj={"order":null,"order_column":null};
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            if(val%2==0){
                
            }else{
                
            };
            this.obj.pagingParamEnyity.page_no=val-1;
            this.getSearchListValue();
          },
          toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            exportFile(){
                console.log( this.multipleSelection);
                const self=this;
                 //type;//1.成品导出  2.部品导出  3.查看详情导出
                const fileObj={"headList":[],"componenteEmployInfoList":null,"productInfoList":null,"export_all":true,
                    "type":"1","search_context":this.obj.search_context,"componenteEmployInfo":null,"productInfo":this.productInfo_row,
                    "detail_type":null,
                    };
                    if(this.searchedProcuct){
                         fileObj.type=4;
                        //  fileObj.headList=["成品序列号","CB ID","PM ID","TRACE NO","工单号","成品批号","生产时间"]
                        fileObj.headList=["生产时间","成品批号","工单号","PIM品番","CB_ID","TRACE NO","成品序列号"]
                   }else{
                        // fileObj.type=3;
                        // fileObj.headList=["生产工序","部品品番","部品位置","部品批号"];
                        //  if(this.activeName2=="CB"){
                        //     fileObj.detail_type=1;
                        // }else if(this.activeName2=="PM"){
                        //     fileObj.detail_type=2;
                        // }if(this.activeName2=="COVER"){
                        //     fileObj.detail_type=3;
                        // }else{
                        //     fileObj.detail_type=4;
                        // }
                    }
                /* 没数据时的提示 */
                if(this.searchedProcuct){
                    if(this.tableData3.length<=0){
                        self.$message.error({message:"没有数据不可导出！"});
                        return 
                    }
                }else{
                    if(this.tableData4.length<=0){
                        self.$message.error({message:"没有数据不可导出！"});
                        return 
                    }
                }
                if((this.multipleSelection.length<=0&&this.searchedProcuct)||(this.multipleTableFishPrduct.length<=0&&!this.searchedProcuct) ){
                    // self.$message.error({message:'至少选择一个',duration:2000});
                  fileObj.export_all=true;
                   fileObj.componenteEmployInfo= self.obj.componenteEmployInfo;
                    this.$confirm('是否导出全部文件?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                            }).then(() => {
                                 api.exportFile_F_p(fileObj).then(function(res){
                                   const obj={uuid:res.uuid}
                                    api.exportFile_F_p_Ajax(obj)
                                }).catch(function(erro){
                                    self.$message.error({message:"导出失败"});
                                })
                                console.log($)
                                
                                this.$message({
                                    type: 'success',
                                    message: '正在导出!'
                                });
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: '操作已取消'
                                });          
                            });
                }else{
                    /* 例子 {"headList":["客户姓名", "证件类型", "日期"],"rowList":["张三","证件a","sss"]} */
                    fileObj.export_all=false;
                    if(this.searchedProcuct){
                        fileObj.componenteEmployInfoList=this.multipleSelection;
                         fileObj.componenteEmployInfoList.map((val)=>{
                         delete val["date_time_T"];
                     });
                    }else{
                        fileObj.productInfo=this.multipleTableFishPrduct;
                        fileObj.productInfo.map((val)=>{
                         delete val["date_time_T"];
                     });
                    }
                    
                    api.exportFile_F_p(fileObj).then(function(res){
                       const obj={uuid:res.uuid}
                         api.exportFile_F_p_Ajax(obj)
                    }).catch(function(erro){
                         self.$message.error(erro);
                    })
                }
            },
            searchValue(){
                  this.obj=ObjInit;
                if((this.inputSearch==""||this.inputSearch.replace(/\s+/g, "").length<=0)&&!this.showSearchList){
                    // this.$message.error('输入搜索内容');
                    this.obj.componenteEmployInfo=null;
                }else{
                  
                  
                    
                }
                this.obj.search_context=this.inputSearch;
                this.getSearchListValue()
            },
            searchList(val){
                const self=this;
                    this.obj.search_context="";
                    
                    if(this.sizeForm.minsPro==""){
                         this.$message.error("请输入部品品番！");
                        return 
                    }
                   
                    if(this.sizeForm.minsPro==""&&this.sizeForm.ph==""&&this.sizeForm.date1==""&&this.sizeForm.date2==""){
                         this.obj.componenteEmployInfo=null;
                    }else{
                         this.obj.componenteEmployInfo={}
                        this.obj.componenteEmployInfo.component_no=this.sizeForm.minsPro
                        this.obj.componenteEmployInfo.component_batch_no=this.sizeForm.ph;
                        this.obj.componenteEmployInfo.date_time= formatDate(this.sizeForm.date1,"yyyy-MM-dd")+"@"+formatDate(this.sizeForm.date2,"yyyy-MM-dd");
                        if(this.obj.componenteEmployInfo.date_time=="@"){
                            this.obj.componenteEmployInfo.date_time=null
                        }
                    }

                     

                    if(0==val){
                        this.currentPage=1;
                        this.obj.pagingParamEnyity.page_no=0;
                        this.sortObj={"order":null,"order_column":null};
                    }
                    this.getSearchListValue();
                
               
            },
            handleClick(row){
                console.log(row)
                this.activeName2="CB";
               
                this.searchedProcuct=false;
                this.showSearchList=false;
                this.productInfo_row=row;
                this.sortObj={"order":"","order_column":""}
                const obj={"productInfo":row,"detail_type":"1","pagingParamEnyity":{"page_no":0,"order":"","order_column":""}}
                const self=this;
                delete obj.productInfo.date_time_T;
                this.$refs.multipleTable.clearSort();
                this.currentPageForCb=1;
                api.showModuleDetailForFin(obj).then(function(res){
                    self.totalForCb=res.count_row;
                    self.tableData4=res.componenteEmployInfo;
                 
                  
                }).catch(function(erro){
                    self.$message.error(erro);
                })

            },
            handleSelectionChangeFishedProduct(val){
                 this.multipleTableFishPrduct = val;
            },
            getSearchListValue(){
              const self=this;
              this.obj.pagingParamEnyity.order=this.sortObj.order;
              this.obj.pagingParamEnyity.order_column=this.sortObj.order_column;
             /* 当前radio的 */
              self.obj.type=this.radio2;
              api.postContentBatchNoInfo(self.obj).then(function(res){
                console.log(res)
                self.total=res.count_row;
                // res.componenteEmployInfo.map((val)=>{
                //     val.date_time_T=formatDate(new Date(val.date_time.replace(/-/g, "/")) ,"yyyy-MM-dd");
                // })
                let set1=new Set(res.componenteEmployInfo);
               
                self.tableData3=[...set1];
              }).catch(function(erro){  
                  console.log(erro)
              })
            },
          backUppag(){
            this.clearSort();
            this.showSearchList=true;
             this.searchedProcuct=true;
             
         },
          handleClickCard(tab, event){
             console.log(tab.name,this.activeName2);
             /* 请求pm cb cover */
              this.sortObjT={"order":"","order_column":""};
            this.$refs.multipleTableFishPrduct.clearSort();
             this.getCBPM(0)
         },
         handleCurrentChangeForCb(val){
             console.log(val)//当前的页码
             if(this.activeName2=="CB"){

             }else if(this.activeName2=="PM"){

             }else{

             }
             this.getCBPM(val-1)
         },
         getCBPM(val){
          
             const obj={"productInfo":this.productInfo_row,"detail_type":null,"pagingParamEnyity":{"page_no":val,"order":this.sortObjT.order,"order_column": this.sortObjT.order_column}}
            const self=this;
            
              if(this.activeName2=="CB"){
                  obj.detail_type=1;
             }else if(this.activeName2=="PM"){
                  obj.detail_type=2;
             }if(this.activeName2=="COVER"){
                  obj.detail_type=3;
            }else{
                  obj.detail_type=4;
             }
              if(this.productInfo_row){
                 delete  this.productInfo_row["date_time_T"];
             }
             if(val==0&& (this.sortObjT.order==null||this.sortObjT.order=="")){
                 this.currentPageForCb=1;
                 this.$refs.multipleTableFishPrduct.clearSort();
             }
             api.showModuleDetailForFin(obj).then(function(res){
                  self.totalForCb=res.count_row;//总页数
                   if(obj.detail_type==4){
                     self.tableData4=res.componentBatchNoInfo;
                }else{
                      self.tableData4=res.componenteEmployInfo;
                }
                res.productInfo.map((val)=>{
                });

            }).catch(function(erro){
                self.$message.error(erro);
            })
         },
          sortChange({ column, prop, order }){
             console.log(column, prop, order);
             let orderC;
             if(order=="ascending"){
                 orderC="asc";
             }else{
                  orderC="desc";
             };
            if(prop=="date_time_T"){
                prop="date_time"
            }
             this.sortObj={"order":orderC,"order_column":prop};
               this.obj.pagingParamEnyity.page_no=0;
               this.currentPage=1;
                this.currentPageForCb=1;
            this.getSearchListValue()
         },
         sortChangeT({ column, prop, order }){
             let orderC;
             if(order=="ascending"){
                 orderC="asc";
             }else{
                  orderC="desc";
             };
              this.sortObjT={"order":orderC,"order_column":prop};
              this.currentPageForCb=1;
              this.getCBPM(0)
         },
         /* 只请求合计数 */
         firstComin(){
            const obj={"list_type":1}; 
            const self=this;
            api.postContentBatchNoInfo(obj).then(function(res){
                console.log(res)
                self.totalAll=res.count;
            }).catch(function(erro){  
                console.log(erro)
            })
         },
         /* 清空搜索 */
         clearSearchValue(){
             this.sizeForm={
                minsPro:"",
                ph:"",
                date1: '',
                date2: '',
                COMPONENT_pc:"",
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                pimid:"",
              }
         },
         /* radio更改 */
         radioChange(e){
             this.tableData3.splice(0);
             this.total=0;
         },
        },
        mounted(){

            const that = this;
            that.screenHeight=document.documentElement.clientHeight||document.body.clientHeight;
            window.onresize =()=>{
                that.screenHeight=document.documentElement.clientHeight||document.body.clientHeight;
           
            }
        },
        watch:{
            screenWidth (val) {
                this.screenHeight = val
            }
        },
        computed:{
            elTableBodyWrapperMaxHeight:function(){
                console.log( this.screenHeight,this.screenHeight-60-50-40-72-40-60)
                const height=this.screenHeight-41-102-33-20-20;
                $(".el-table__empty-block").css({"min-height":height})
                return this.screenHeight-41-102-33-20-20;
            }
        },
        created(){
            this.obj.search_context=null;
           this.obj.componenteEmployInfo=null;
            // this.firstComin();
      }

    }
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
    height:60px;
    background:rgba(0,108,198,1);
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .title{
    display: inline-block;
    width: 200px;
    line-height: 60px;
    color: #FFFFFF;
    float: left;
    clear: both;
    border-right:1px solid #d1d1d1;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    border-right: 1px solid #d1d1d1;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0;

    .main-header{
      background-color: #ffff;
      .el-breadcrumb{
        span{
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
        }
      }

    }
    .content{
      padding: 20px;
      .el-input--medium{
        width: 30%;
        margin-right: -50%;
      }
      .el-card__header{
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .menu-open{
    float: left;
    padding-left: 20px;
    margin-top: 10px;
  }
.header-right{
  float: right;
  color: #FFFFFF;
  .el-dropdown{
      color: #FFFFFF;
      background-color: #0268BD;
      padding: 0 20px;
  }
  .share-button{
    background-color:#006CC6;
    border: 0px;
  }
}
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .search-list{
      background:rgba(246,248,250,1);
      padding: 10px;
  }
  .text-item{
      padding: 10px;
  }
   .block{
     padding: 0px 20px 0px 0;
    float: right;
    clear: both;
  }
  .tital-search{
    display: inline-block;
    float: right;
    vertical-align: middle;
    padding: 5px 20px;
    font-size: 14px;
  }
.minSt  .el-table__empty-block{
  min-height: 400px !important;
}
</style>
