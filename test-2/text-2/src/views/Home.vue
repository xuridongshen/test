<template>
    <div class="home">
        <div class="swiper-container">
            <div class="swiper-contant">
                <!-- <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
                    <img :src="item" alt="">
                </div> -->
                <div class="swiper-slide left">
                    <img :src="imgList[0]" alt="">
                </div>
                <div class="swiper-slide center">
                    <img :src="imgList[1]" alt="">
                </div>
                <div class="swiper-slide right">
                    <img :src="imgList[2]" alt="">
                </div>
            </div>
            <div class="swiper-btn">
                <span class="left_btn" @click="handleClickLeft"></span>
                <span class="right_btn" @click="handleClickRight"></span>
            </div>
        </div>
        <div class="msg">
            <div class="left">
                <h5>关于我们</h5>
                <p>
                    上海堂然网络科技发展有限公司成立于2017年，公司总部坐落于上海崇明区。公司创始人以“凝炼品牌，传承乐趣”为创建初衷，发展新兴的移动端游戏为重要方向。

                    公司倡导“专业、务实、高效、创新”的企业精神，具有良好的内部机制。优良的工作环境以及良好的激励机制，吸引了一批年轻的、有学识的、具有实干精神的人才。公司成员均来自百度，网易，腾讯等国内知名公司，积累了更多的开发经验。他们深层的磨合，对最新技术执拗的探索精神，使我们能更好更快的完成每一款游戏创作。
                </p>

                <h5>企业文化</h5>

                <p>
                    1以市场需求为中心，以用户实际需要为导向，从用户的角度出发，为用户开发出更多更耐玩的手机游戏。
                    2尊重个人，作为堂然网络的员工，不论职位的高低、分工的不同，都将受到充分的尊重和平等的对待。公司给予员工同等的机会，鼓励员工与公司共同发展，为员工制定与公司发展步调一致的个人年度事业发展计划。

                    3鼓励创新，游戏开发是一项智力型的事业，公司提供富于挑战性的事业发展空间，鼓励每一位员工创造性地工作，充分发挥个人的最大价值，从而创造出最佳的工作效果。

                    4团队合作，在工作中，公司强调相互尊重、理解和有效的沟通，从而在平等和谐的合作氛围中创造“1 + 1>2”的工作效应。

                    用游戏，让生活更快乐——带着创业的激情，每天快乐的工作，让用户体验我们的产品，感知我们的服务，享受快乐的过程，是研发和运营人士的共识。脚踏实地，厚积薄发，带着信念在奔跑。
                </p>
            </div>
            <div class="right">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue' 
    var $ = require('jquery')
    export default {
        name: 'home',
        data() {
            return {
                imgList: [
                    'https://xuridongshen.github.io/assets/image/top-1.jpg',
                    'https://xuridongshen.github.io/assets/image/top-2.jpg',
                    'https://xuridongshen.github.io/assets/image/top-3.jpg',
                    'https://xuridongshen.github.io/assets/image/top-4.jpg',
                ]
            }
        },
        components: {},
        methods: {
            handleClickLeft() {
                console.log($('.swiper-slide'));

                this.imgList.unshift(this.imgList.pop())
            },
            handleClickRight() {
                this.imgList.push(this.imgList.shift())
            }
        }
    }
</script>

<style lang="less" scoped>
    .swiper-container {
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;

        .swiper-contant {
            height: 562.5px;
            position: relative;

            .swiper-slide {
                position: absolute;
                top: 0;

                img {
                    width: 1000px;
                    vertical-align: top;
                }
            }

            .left {
                left: -100%;
            }

            .center {
                left: 0;
            }

            .right {
                left: 100%;
            }

            &:after {
                content: "";
                display: block;
                visibility: hidden;
                clear: both;
            }
        }

        .swiper-btn {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 50px;
            opacity: .5;

            span {
                display: inline-block;
            }

            .left_btn {
                float: left;
                border: 30px solid transparent;
                border-right-color: #ccc;
            }

            .right_btn {
                float: right;
                border: 30px solid transparent;
                border-left-color: #ccc;
            }
        }


    }

    .msg {
        width: 1000px;
        margin: 0 auto;
        text-align: left;
        margin-bottom: 10px;
        position: relative;
        div{
            display: inline-block;
        }
        .left {
            width: 55%;
            h5{
                font-size: 22px;
                margin: 10px 0;
            }
            p{
                text-indent: 2em;
            }
        }

        .right {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            flex-wrap: wrap;
            width: 45%;
            height: 100%;
            div{
                width: 48%;
                height: 48%;
                margin: 1%;
                border: 1px solid sandybrown;
                box-sizing: border-box;
            }
        }
    }
</style>