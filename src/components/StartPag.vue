<!--  -->
<template>
  <div>
    <el-card class="box-card startPag">
      <div class="search-list" v-show="showTime">
        <el-row >
          <el-col :span="6">
            <el-select size="medium"  placeholder="请选择" @change="selectChange" v-model="valueSelect">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="5" :pull="1"><span class="headerText">{{textLeft}}</span></el-col>
          <el-col :span="6"><span  class="headerText">{{dataText}}</span></el-col>
          <el-col :span="6"><span  class="headerText">{{nowTime}}</span></el-col>
        </el-row>
      </div>
    <!-- <el-row>
      <el-col :span="24">
          <table>
            <tr><th>时间</th><th>8时</th><th>10时</th><th>12时</th><th>14时</th><th>16时</th><th>18时</th></tr>
            <tr><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td></tr>
            <tr><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td><td>目标数</td></tr>
          </table>
      </el-col>
    </el-row> -->
      <div v-show="showTime">
        <el-table :data="tableData"  style="width: 100%"> 
            <el-table-column  prop="dateText"      label="时间"   align="center"> </el-table-column>
            <el-table-column  prop="date_point_8"  label="8时"   align="center"> </el-table-column>
            <el-table-column  prop="date_point_10" label="10时"   align="center"></el-table-column>
            <el-table-column  prop="date_point_12" label="12时"  align="center"></el-table-column>
            <el-table-column  prop="date_point_14" label="14时"  align="center"></el-table-column>
            <el-table-column  prop="date_point_16" label="16时"  align="center"></el-table-column>
            <el-table-column  prop="date_point_18" label="18时"  align="center"></el-table-column>
        </el-table>
        <div class="zero"></div>
        <el-table :data="tableData1"  style="width: 100%;"> 
            <el-table-column  prop="dateText"       label="时间"  align="center"> </el-table-column>
            <el-table-column  prop="date_point_20"  label="20时"  align="center"> </el-table-column>
            <el-table-column  prop="date_point_22"  label="22时" align="center"> </el-table-column>
            <el-table-column  prop="date_point_24"  label="24时" align="center"></el-table-column>
            <el-table-column  prop="date_point_2"   label="2时"  align="center"></el-table-column>
            <el-table-column  prop="date_point_4"   label="4时"  align="center"></el-table-column>
            <el-table-column  prop="date_point_6"   label="6时"  align="center"></el-table-column>
        </el-table>
        <div class="zero"></div>
        <el-row class="contentNumber">
            <el-col :span="12"><el-col :span="10"><span class="numberCount">目标合计数：</span></el-col> <el-col :span="6" ><el-input placeholder="请输入内容" v-model="input1" :disabled="true" ></el-input></el-col></el-col>
            <el-col :span="12"><el-col :span="10"><span class="numberCount">实际合计数：</span></el-col> <el-col :span="6"><el-input placeholder="请输入内容" v-model="input2" :disabled="true" ></el-input></el-col></el-col>
        </el-row>
        <el-row class="setCountValue">
            <el-col :span="5" :offset="19"><el-button plain @click="setNumberofTargets" size="medium">设置目标数</el-button></el-col>
        </el-row>
      </div>

      <!-- 设置 -->
      <div v-if="!showTime">
        <el-row class="valueSelectedHeader">
          <el-col :span="6"><p>设置{{valueSelect}}日生产目标数</p></el-col>
        </el-row>
        <div class="zero"></div>
        <el-table :data="tableData3"  style="width: 100%;"> 
            <el-table-column  prop="dateText"  label="时间" width="180"  align="center"></el-table-column>
            <el-table-column  prop="date_point_8"  label="8时"   align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData3Cop.date_point_8" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_10"  label="10时"     align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData3Cop.date_point_10" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_12" label="12时"    align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData3Cop.date_point_12" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_14" label="14时"  align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData3Cop.date_point_14" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_16" label="16时"  align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData3Cop.date_point_16" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_18" label="18时"  align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData3Cop.date_point_16" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
        </el-table>
        <div class="zero"></div>
        <el-table :data="tableData4"  style="width: 100%;"> 
            <el-table-column  prop="dateText"  label="时间" width="180"  align="center"></el-table-column>
            <el-table-column  prop="date_point_20"  label="20时"   align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData4Cop.date_point_20" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_22" label="22时" align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData4Cop.date_point_6" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_24"  label="24时"     align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData4Cop.date_point_24" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_2" label="2时"  align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData4Cop.date_point_2" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_4" label="4时"   align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData4Cop.date_point_4" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="date_point_6" label="6时" align="center">
              <template slot-scope="scope">
                <el-input v-model="tableData4Cop.date_point_6" placeholder="请输入内容"></el-input>
              </template>
            </el-table-column>
        </el-table>
         <div class="zero"></div>
        <el-row class="setNumberFooter">
          <el-col :span="6" :offset="18"><el-button size="medium" @click="sure">确定</el-button><el-button size="medium" @click="cancel">取消</el-button></el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { formatDate } from '../untils/dateUntil.js'
import api from '../getserver/aip.js'
export default {
  data() {
    return {
      showTime: true,
      textLeft: "实时生产状态（天）",
      dataText: "日期",
      nowTime: "",
      input1: 0,
      input2: 0,
      selectedValue:"",
      options: [{
        value: '3.5G',
        label: '3.5G'
      }, {
        value: '4G',
        label: '4G'
      }],
      value4: '',
      tableData: [{
        dateText: "目标数",
        date_point_8: 0,
        date_point_10: 0,
        date_point_12: 0,
        date_point_14: 0,
        date_point_16: 0,
        date_point_18: 0,
      }, {
        dateText: "实际数",
        date_point_8: 0,
        date_point_10: 0,
        date_point_12: 0,
        date_point_14: 0,
        date_point_16: 0,
        date_point_18: 0,
      },],
      tableData1: [{
        dateText: "目标数",
        date_point_20: 0,
        date_point_22: 0,
        date_point_24: 0,
        date_point_2: 0,
        date_point_4: 0,
        date_point_6: 0,
      }, {
        dateText: "实际数",
        date_point_20: 0,
        date_point_22: 0,
        date_point_24: 0,
        date_point_2: 0,
        date_point_4: 0,
        date_point_6: 0,
      },],
      tableData3:[{
        dateText: "目标数",
        date_point_8: 0,
        date_point_10: 0,
        date_point_12: 0,
        date_point_14: 0,
        date_point_16: 0,
        date_point_18: 0,
      },],
      tableData3Cop:{ 
        date_point_8: 0,
        date_point_10: 0,
        date_point_12: 0,
        date_point_14: 0,
        date_point_16: 0,
        date_point_18: 0,
        },
      tableData4:[{
        dateText: "目标数",
        date_point_20: 0,
        date_point_22: 0,
        date_point_24: 0,
        date_point_2: 0,
        date_point_4:0,
        date_point_6: 0,
      }],
       tableData4Cop:{ 
        date_point_20: 0,
        date_point_22: 0,
        date_point_24: 0,
        date_point_2: 0,
        date_point_4: 0,
        date_point_6: 0,
        },
      multipleSelection: [],
      valueSelect:"3.5G",
      targetTimeProductionCop:[],
      isNeedGet:false,
      dataTime:"",
    };
  },

  //   components: {},

  computed: {},

  // mounted: {},

  methods: {
    setNumberofTargets() {
      if(this.valueSelect==""){
        this.$message({ message: '请选择', type: 'warning'});
      }else{
        this.showTime = !this.showTime;
      }
    },
    getHomeValueForProduce(){
      const obj={"item_id":"","targetTimeProduction":null};
      obj.item_id= this.valueSelect;
      const self=this;
      api.getIndexValue(obj).then(function(res){
          console.log(res.realTimeProduction);
          console.log(res.targetTimeProduction);
          // const {targetTimeProduction={}}=res;
          let realTimeProduction=res.realTimeProduction;
          let targetTimeProduction=res.targetTimeProduction;
          self.tableData.splice(0);
          self.tableData1.splice(0);
          if(true){
            if(targetTimeProduction==null){
                targetTimeProduction={date_point_8:0,date_point_10:0,date_point_12:0, date_point_14:0, date_point_16:0, date_point_18:0, date_point_20:0, date_point_22:0,date_point_24:0,date_point_2:0, date_point_4:0,date_point_6:0,product_count:0,date_time:0}
              }
               self.targetTimeProductionCop=targetTimeProduction;
              const {date_point_8=0,date_point_10=0,date_point_12=0, date_point_14=0, date_point_16=0, date_point_18=0, date_point_20=0, date_point_22=0,date_point_24=0,date_point_2=0, date_point_4=0,date_point_6=0,product_count=0}=targetTimeProduction;
              self.tableData.push({date_point_8,date_point_10,date_point_12,date_point_14,date_point_16,date_point_18,dateText:"目标数"});
              self.tableData1.push({date_point_20,date_point_22,date_point_24,date_point_2,date_point_4,date_point_6,dateText:"目标数"});
              self.input1=product_count;
              self.initTableData();
          }
          if(realTimeProduction==null){
             realTimeProduction={date_point_8:0,date_point_10:0,date_point_12:0, date_point_14:0, date_point_16:0, date_point_18:0, date_point_20:0, date_point_22:0,date_point_24:0,date_point_2:0, date_point_4:0,date_point_6:0,product_count:0,date_time:0}
          }
          const {date_point_8=0,date_point_10=0,date_point_12=0, date_point_14=0, date_point_16=0, date_point_18=0, date_point_20=0, date_point_22=0,date_point_24=0,date_point_2=0, date_point_4=0,date_point_6=0,product_count=0,date_time=0}=realTimeProduction;
          console.log(date_point_8)
              self.tableData.push({date_point_8,date_point_10,date_point_12,date_point_14,date_point_16,date_point_18,dateText:"实际数"});
              self.tableData1.push({date_point_20,date_point_22,date_point_24,date_point_2,date_point_4,date_point_6,dateText:"实际数"});
              self.input2=product_count;
              // self.nowTime = formatDate(date_time, "yyyy/MM/dd")
              // self.nowTime =date_time;
         self.isNeedGet=true;
          
           console.log(self.input2)
      }).catch(function(error){
          self.isNeedGet=true;
          console.log(error)
          self.$message({
          message: error,
          type: 'warning'
        });
      });
    },
    setHomeValueForProduce(){
      const numberTest=/^[0-9]\d*$/;
      const trim="/\s/"
      const obj={"item_id":this.valueSelect,"targetTimeProduction":{"item_id":this.valueSelect,"date_time":"","date_point_8":"","date_point_10":"","date_point_12":"","date_point_14":"","date_point_16":"","date_point_18":"","date_point_20":"","date_point_22":"","date_point_24":"","date_point_2":"","date_point_4":"","date_point_6":"","product_count":""}}
      const list=this.tableData3Cop;
      const listKey=Object.keys(list);
      let isOkNum=true;
      
       listKey.forEach(element => {
         if(!numberTest.test(list[element])){
           if(list[element]==""){
           }else{
                isOkNum=false;
           }
           return;
         }else{
           if(list[element]==""){
              obj.targetTimeProduction[element]=0;
           }else{
             obj.targetTimeProduction[element]=list[element];
           }
            
         }
        });
      const listCp=this.tableData4Cop;
      const listKeyCp=Object.keys(listCp);
        listKeyCp.forEach(element => {
          if(!numberTest.test(listCp[element])){
            if(listCp[element]==""){
            }else{
                isOkNum=false;
            }
           return;
         }else{
           if(listCp[element]==""){
             obj.targetTimeProduction[element]=0;
           }else{
              obj.targetTimeProduction[element]=listCp[element];
           }
          
         }
          
        });
      if(!isOkNum){
        this.$message({
          showClose: true,
          message: '请填写数字',
          type: 'error'
        });
        return;
      }
        console.log(obj)
      const self=this;
      api.setIndexValue(obj).then(function(res){
          self.$message({
          message: '设置成功',
          type: 'success'
        });
          self.cancel(false);
          self.getHomeValueForProduce();
      }).catch(function(error){
        self.$message({
          message: '设置失败',
          type: 'warning'
        });
      });
    },
    selectChange(val="3.5G"){
      this.valueSelect=val;
      this.getHomeValueForProduce();
    },
    sure(){
      this.setHomeValueForProduce();
    },
    cancel(bool=true){
       this.showTime=!this.showTime;
      //  const list=this.tableData3Cop;
      //  const listKey=Object.keys(list);
      //  listKey.forEach(element => {
      //    list[element]=0;
      //  });
      // this.tableData3Cop=list;
      // const listCp=this.tableData4Cop;
      // const listKeyCp=Object.keys(listCp);
      // listKeyCp.forEach(element => {
      //    listCp[element]=0;
      // });
      // this.tableData4Cop=listCp;
      bool==true?this.initTableData():"";
      
       
    },
    /* 初始化设定值 */
    initTableData(){
       const {date_point_8=0,date_point_10=0,date_point_12=0, date_point_14=0, date_point_16=0, date_point_18=0, date_point_20=0, date_point_22=0,date_point_24=0,date_point_2=0, date_point_4=0,date_point_6=0,product_count=0}=this.targetTimeProductionCop;
       this.tableData3Cop={date_point_8,date_point_10,date_point_12,date_point_14,date_point_16,date_point_18};
       this.tableData4Cop={date_point_20,date_point_22,date_point_24,date_point_2,date_point_4,date_point_6};      
    },
  },
  created() {
    
    // this.nowTime = formatDate(time, "yyyy/MM/dd")
    const self=this;
   clearInterval(this.dataTime);
    let isNeedGet=this.isNeedGet;
     let isNeed=true;
    this.dataTime=setInterval(() => {
      const time = new Date();
      this.nowTime=formatDate(time, "yyyy/MM/dd hh:mm:ss");
      // console.log(time.getMinutes(),isNeedGet,this.isNeedGet)
      if(time.getMinutes()%5){
          if(this.isNeedGet&&isNeed){
             this.isNeedGet=false;
             isNeed=false;
            //  console.log("走几次")
             this.getHomeValueForProduce();
          }else{
            // console.log("没走？",this.isNeedGet,isNeed)
          }
      }else{
        //  console.log("走不走？",this.isNeedGet,isNeed)
        isNeed=true;
      }
    }, 1000);
    this.selectChange();
  }
}

</script>
<style lang="scss" scoped>
.search-list {
  background: rgba(246, 248, 250, 1);
  padding: 10px;
  vertical-align: middle;
  .headerText{
    display: inline-block;
    height: 36px;
    line-height: 36px;
  }
}
.zero {
  height: 30px;
  background-color: #f6f8fa;
}
.numberCount {
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.contentNumber{
  margin-top: 20px;
  margin-bottom: 20px;
}
.setCountValue{
  margin-top: 5%;
}
.setNumberFooter{
  padding: 20px 0;
}
.valueSelectedHeader{
  padding: 10px 0px;
}
</style>