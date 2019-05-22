<template>
    <div class="chat">
        <el-form ref="form" :model="form" label-width="120px">
            <!-- <el-form-item label="用户名"> -->
                <el-input v-model="form.user"></el-input>
            <!-- </el-form-item>
            <el-form-item label="密码"> -->
                <el-input v-model="form.password"></el-input>
            <!-- </el-form-item> -->
            <el-button @click="register()">注册</el-button>
        </el-form>
    </div>
</template>
<script>
    import { initSdk } from '../Rong/init.js';
    import Qs from 'qs';
    export default {
        data() {
            return {
                form: {}
            }
        },
        created() {
            this.login();
        },
        methods: {
            login() {
                this.$http.get('http://127.0.0.1:8090/login')
                .then(res=>{
                    console.log(res)
                    initSdk("cpj2xarlctw0n", res.token)
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            register() {
                console.log(this.form)
                this.$http.post('http://127.0.0.1:8090/register', this.form)
                .then(res=>{
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>