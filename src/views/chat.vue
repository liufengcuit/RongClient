<template>
    <div class="chat">dsaf</div>
</template>
<script>
    import { initSdk } from '../Rong/init.js';
    export default {
        data() {
            return {}
        },
        created() {
            this.login();
        },
        methods: {
            login() {
                this.axios({
                    methods: 'get',
                    url: 'http://127.0.0.1:8090/login',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(res=>{
                    console.log(res.data)
                    initSdk("cpj2xarlctw0n", res.data.token)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>