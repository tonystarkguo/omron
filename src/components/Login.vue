<template>
  <div class="log">
    <el-row>
      <el-col :xs="8" :sm="15" :md="15" :lg="15" :xl="15" class="hidden-xs-only logo-left" :style="{backgroundImage:LoginLeftImg}"><img :src="LoginLeftImg" alt="登陆" class="logonLeft"> </el-col>
      <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9">
        <div class="logo-right">
        <div class="header"><img :src="LoginImgTopImg" alt=""><span>登陆</span></div>
         <div><el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
           <el-form-item label="" prop="Account">
             <i class="userHeaderSmall"></i><el-input type="text" v-model="ruleForm2.Account" auto-complete="off"></el-input>
           </el-form-item>
           <el-form-item label="" prop="pass">
             <i class="passWordSmall"></i><el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
           </el-form-item>
           <el-checkbox-group v-model="ruleForm2.remember">
             <el-checkbox label="记住密码" name="remember"></el-checkbox>
             <span class="forgectPass">忘记密码？</span>
           </el-checkbox-group>
           <el-form-item>
             <el-button type="primary" size="medium" @click="submitForm('ruleForm2')">登录</el-button>
             <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
           </el-form-item>
         </el-form></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    //import someComponent from './someComponent'
    import { Button } from 'element-ui';
    import LoginImg from '../assets/pic.png'
    import LoginImgTop from '../assets/logo_blue.png'
    import "../css/commom.css";
    export default {
        name: "Login",
        data() {
          var validateAccount = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('账号不能为空'));
            }else{
              callback();
            }
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              callback();
            }
          };
            return {
                msg: "Hello Vue.js",
                LoginLeftImg:LoginImg,
              LoginImgTopImg:LoginImgTop,
              ruleForm2: {
                Account: 'client',
                pass: 'test',
                remember:true,
              },
              rules2: {
                pass: [
                  { validator: validatePass, trigger: 'blur' }
                ],
                Account: [
                  { validator: validateAccount, trigger: 'blur' }
                ]
              }
            }
        },
        component: {
            //someComponent
        },
      methods:{
        submitForm(formName) {
          const self=this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              const userId=123;
              self.$router.push({ path: '/Home/Product', params: { userId }});
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
      }
    }
</script>

<style scoped  lang="scss" >
  .log{
    height: 768px;
  }
  .logo-left,.logo-right{
    height: 100%;
  }
.header{
  background:rgba(231,235,239,1);
  overflow: hidden;
  vertical-align: middle;
  height: 140px;
    line-height:140px;
  img{
    float: left;
     clear: both;
     margin:55px 50px 0 70px; 
    }
  span{
    float: left;
   
    }
}
.logonLeft{
  width: 100%;
}
.demo-ruleForm{
  width: 80%;
  margin: auto;
  margin-top: 180px;
  .el-input{
    width: 70%;
  }
.el-checkbox-group{
  width: 70%;
  margin: 10px auto 40px auto;
  height: 20px;
  line-height: 20px;
  margin-left: 20%;
  .el-checkbox{
    float: left;

  }
}
  .el-form-item__content i{
    margin-right: 2%;
    width: 8%;
  }
  .forgectPass{
    font-size: 14px;
    cursor:pointer;
    float: right;
  }
  .el-button--primary{
    width: 70%;
    margin: auto auto auto 10% ;

  }
}
.userHeaderSmall,.passWordSmall{
  background-image: url("../assets/man.png");
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    line-height: 40px;
   background-clip: border-box;
    background-repeat: no-repeat;
    height: 40px;
    background-position: center;
    vertical-align: middle;
}
.passWordSmall{
  background-image: url("../assets/password.png");
}
</style>
