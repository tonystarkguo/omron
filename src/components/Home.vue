<template>
  <el-container>
    <!-- <el-header>  -->
      <!-- <span class="title"><img :src="ormeHea" alt="" srcset=""></span> -->
    <!-- <el-radio-group v-model="isCollapse" class="menu-open" > -->
      <!-- <el-button class="showMinMenu" @click="changeLeftMenu" ></el-button> -->
    <!-- </el-radio-group> -->
      <!-- <div class="header-right">
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-message" type="primary"></el-button>
        </el-badge>
        
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            <i class=" userHeaderImg"></i>
            admint<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"  >
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div> -->
     
    <!-- </el-header> -->
   
    <el-container>
      
      <el-aside width="auto">
        <span class="title"><img :src="ormeHea" alt="" srcset=""></span>
        <el-menu :router='true' :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group >
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="1-1" :route="{path:'/Home/Product'}">成品追溯</el-menu-item>
            <el-menu-item index="1-2" :route="{path:'/Home/Ministry'}">部品追溯</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group> -->
          <!-- <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <!-- <el-menu-item index="2" disabled>
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting" ></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
      </el-aside>
      <el-main>
        <div class="main-header">
          <el-breadcrumb separator="/">
              <!-- <el-breadcrumb-item :to="{ path: '/Home/Product' }" >首页</el-breadcrumb-item> -->
              <!-- <el-breadcrumb-item :to="{ path: '/Home/Product' }" v-if="routeName">成品追溯</el-breadcrumb-item> -->
              <!-- <el-breadcrumb-item :to="{ path: '/Home/Ministry' }" v-if="!routeName">部品追溯</el-breadcrumb-item> -->
              <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
          </el-breadcrumb>
        </div><div class="content">
           <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
    <!--<someComponent></someComponent>-->
</template>

<script>
    //import someComponent from './someComponent'
    import whiteLogo from '../assets/logo_white.png'
    export default {
        name: "",
        data() {
            return {
                msg: "Hello Vue.js",
              isCollapse: false,
         
              showLeftMenu:false,
             
              multipleSelection: [],
              currentPage1: 5,
              currentPage2: 5,
              currentPage3: 5,
              currentPage4: 4,
              defaultActive:"1-1",
              routeName:true,
              ormeHea:whiteLogo,
            }
        },
        component: {
            //someComponent
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
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
          
          changeLeftMenu(){
            this.isCollapse=!this.isCollapse;
          },
          logout(){
            console.log(22)
            this.$router.push({name:"Login"})
          }

        },
        watch: {
          '$route' (to, from) {
            // 对路由变化作出响应...
            const self=this;
            console.log(self.$route.path)
            console.log(to, from)
            if(this.$route.name=='Ministry'){
             this.defaultActive="1-2",
             this.routeName=false;
           }else{
             this.defaultActive="1-1",
              this.routeName=true;
           }
          }
        },
        created() {
           console.log(this.$route);
           if(this.$route.name=='Ministry'){
             this.defaultActive="1-2",
             this.routeName=false;
           }else{
             this.defaultActive="1-1",
              this.routeName=true;
           }
        },
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
    display: block;
    width: 200px;
    width: 100%;
    height:40px;
    line-height: 40px;
    color: #FFFFFF;
    // float: left;
    // clear: both;
    // border-right:1px solid #d1d1d1; 
    background-color: #0268BD;
    img{
      vertical-align: middle;
    }
  }

  .el-aside {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 200px;
    border-right: 1px solid #d1d1d1;
  }

  .el-main {
    background:rgba(246,248,250,1);
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
      // padding: 20px;
      height: 100%;
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
    margin-top: 15px;
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
.showMinMenu{
   background-image: url("../assets/thrss.png");
   background-clip: border-box;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
    background-color: #006CC6;
    border: 0;
}
.userHeaderImg{
   background-image: url("../assets/head_img.png");
   background-clip: border-box;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
    border: 0;
    display: inline-block;
    height: 30px;
    width: 30px;
}
</style>
