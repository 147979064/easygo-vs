<template>
  <div  class="login">
    <!-- 登录框开始 -->
    <div class="box">
      <!-- logo开始 -->
      <div class="logo">
        <img src="~assets/img/login/logo.png">
      </div>
      <!-- logo结束 -->
      <!-- 标题开始 -->
      <div class="title">
        <div class="titleLeft pull-left"></div>
        <!--<div class="titleCenter pull-left">中国联通应急指挥系统</div>-->
        <div class="titleRight pull-right"></div>
      </div>
      <!-- 标题结束 -->
      <!-- 表单验证开始 -->
      <form>
        <!-- 登录名开始 -->
        <div class="group">
          <span class="pull-left nicheng"></span>
          <input type="text"  class="input01 pull-left" v-model="form.username">
        </div>
        <!-- 登录名结束 -->
        <!-- 密码开始 -->
        <div class="group">
          <span class="pull-left mima"></span>
          <input type="password"  class="input01 pull-left" v-model="form.password">
        </div>
        <!-- 密码结束 -->
        <!-- 验证码开始 -->
        <div class="groupYz">
          <div class="groupLeft pull-left">
            <span class="pull-left yanzhengma"></span>
            <input type="text"  class="input01 pull-left" v-model="form.validCode">
            <input type="hidden"  class="input01 pull-left" v-model="form.is_login">
          </div>
          <img src="/createCode" />
        </div>
        <!-- 验证码结束 -->
        <!-- 登录开始 -->
        <div class=" submit">
          <input type="button"  class="btn input02" value="登录" @click="onLogin()">
        </div>
        <!-- 登录结束 -->
      </form>
      <!-- 表单验证结束 -->
    </div>
    <!-- 登录框结束 -->
  </div>
</template>

<script>
  import http from 'util/http';
  import router from 'router/router';
  export default {
    data () {
      return {
        form: {
          username: 'admin',
          password: '123456',
          is_login: '',
          validCode: ''
        }
      }
    },
    methods: {
      beforeMount(){

      },
      onLogin () {
          /*
        http.post('/loginCodeCheck/'+this.form.validCode).then(function (data) {
            if(data.code == 5){
              alert(data.message);
            }else{
              http.post('/login', this.form).then(function (data) {
                this.$router.push({path: '/home'});
              }).catch(function (error) {
                alert(error);
              });
            }
        }).catch(function (error) {
          alert(error);
        });
        */
        http.post('/login', "username="+this.form.username+"&password="+this.form.password).then(function (data) {
            if(data.succ){
              router.push({path: '/home'});
            }else{
              alert(data.message);
            }
        }).catch(function (error) {
          alert(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/login/style.css";
  @import "../../assets/css/login/index.scss";
</style>
