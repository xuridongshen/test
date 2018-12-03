<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/comeInfo">comeInfo</router-link>
            <router-link to="/news">news</router-link>
        </div>
        <router-view />
        <div class="footer">
            <p>Copyright © 2017 沪网文[2017]8094-603号</p>

            <p>健康游戏公告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>

            <p>未满18周岁的未成年人用户请在家长的监督下进行游戏</p>

            <p>举报邮箱：doudouqipai@126.com</p>

            <p>上海堂然网络科技发展有限公司版权所有 地址：上海市崇明区横沙乡富民支路58号D1-8606室（上海横泰经济开发区） 电话：400-8822-919</p>
        </div>
    </div>
</template>

<style lang="less">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        width: 1000px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        background: #fefefe;
        border-bottom: 1px solid #f1f1f1;
        text-align: left;
        padding: 0 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        a {
            text-decoration: none;
            display: inline-block;
            font-weight: bold;
            color: #2c3e50;
            padding: 0 30px;

            // border-right:1px solid#ccc;
            &.router-link-exact-active {
                color: #42b983;
            }
        }

        a:nth-child(1) {
            // border-left: 1px solid #ccc;
        }
    }

    .footer {
        text-align: center;
        background: #333;
        color: #fff;

        p {
            width: 1000px;
            font-size: 15px;
            padding: 5px 0;
            background: #333;
            margin: 0 auto;
        }
    }
</style>