<template>
  <div class="login-layout">
    <section class="login">
      <header class="login-header">
        <h1 class="brand">小小木鱼管理平台
          <!--<router-link to="/" tabindex="-1"></router-link>-->
        </h1>
        <el-alert v-if="error" :title="error.title" type="warning" :description="error.message" show-icon/>
      </header>
      <el-form class="login-form" auto-complete="off" :model="model" :rules="rules" ref="login-form" label-position="top">
        <!--<h2 class="heading">登录</h2>-->
        <el-form-item prop="username">
          <el-input type="text" v-model="model.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button class="login-btn" type="primary" :loading="loading" @click="submit('login-form')">{{ loading ? '登陆中...' : '登录' }}</el-button>
      </el-form>
      <footer class="login-footer">
        ← 返回到 <a href="/">小小木鱼</a>
      </footer>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Form, FormItem, Button, Input} from 'element-ui'
  import accountService from '../../services/blogService/account'

  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Button)
  Vue.use(Input)

  export default {
    name: 'login',

    title: 'Login « WEDN.NET | make IT better',

    data () {
      const model = {
        username: '',
        password: ''
      }
      // form validate rules
      const rules = {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 2, max: 16, message: '长度在 2 到 16 个字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符' }
        ]
      }
      return {
        model: model,
        rules: rules,
        error: null,
        loading: false
      }
    },

    methods: {
      submit (ref) {
        this.$refs[ref].validate(valid => {
          if (!valid) return false

          // validated
          this.error = null
          this.loading = true

          accountService.accountLogin(this.model).then(data => {

          }).catch(err => {
            console.log(err)
            this.error = { title: '发生错误', message: '出现异常，请稍后再试！' }
          })

          // create token from remote
//          this.$store.dispatch('createToken', this.model)
//            .then(token => {
//              this.$router.replace({ path: this.$route.query.redirect || '/' })
//              this.loading = false
//            })
//          .catch(err => {
//            console.error(err)
//            this.error = { title: '发生错误', message: '出现异常，请稍后再试！' }
//            switch (err.response && err.response.status) {
//              case 401:
//                this.error.message = '用户名或密码错误！'
//                break
//              case 500:
//                this.error.message = '服务器内部异常，请稍后再试！'
//                break
//            }
//            this.loading = false
//          })
        })
      }
    }
  }
</script>

<style lang="less">
  .login-layout{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .login{
      width: 320px;
      padding: 10px;
      background-color: rgba(255,255,255,0.6);
    }
    .login-header{
      padding-bottom: 30px;
      text-align: center;
      font-size: 20px;
    }
    .login-btn{
      width: 100%;
    }
    .login-footer{
      margin-top: 20px;
    }
  }
</style>
