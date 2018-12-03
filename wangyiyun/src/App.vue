<template>
  <div id="app">
    <div id="nav">
      <div class="nav-box">
        <h1 class="m-topHead" id="log"></h1>
        <ul id="nav-box-ul">
          <li v-for="(item,index) in navList" :key="index">
            <router-link :to="item.path" :class="{active:item.isActive}" @click.native="chooseActive(index)">{{item.name}}</router-link>
          </li>
        </ul>

        <div class="m-topHead" id="login">
          <a href="javascript:;">登录</a>
          <div></div>
        </div>
        <a href="javascript:;" class="m-topHead" id="video_a_tbn">视频投稿</a>
        <div class="search">
          <i class="iconfont">&#xe614;</i>
          <input type="text" placeholder="音乐/视频/电台/用户">
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [{
        name: '发现音乐',
        isActive: true,
        path: '/'
      },
      {
        name: '我的音乐',
        isActive: false,
        path: '/myMusic'
      },
      {
        name: '朋友',
        isActive: false,
        path: '/friend'
      },
      {
        name: '商城',
        isActive: false,
        path: '/shopping'
      },
      {
        name: '音乐人',
        isActive: false,
        path: '/musicPeople'
      },
      {
        name: '下载客户端',
        isActive: false,
        path: '/DownLoad'
      }]
    }
  },
  methods: {
    chooseActive (index) {
      this.navList.forEach(el => {
        el.isActive = false
      })
      this.navList[index].isActive = true
    }
  }
}

</script>

<style lang="less">
  body {
    font-size: 12px;
    background: #f5f5f5;
  }

  html,
  body,
  div,
  span,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  nav,
  ul,
  li,
  section,
  footer {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-break: break-all;
  }

  li {
    list-style: none
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  input {
    border-width: 0;
    border-style: none;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    font-size: 12px;
  }

  @font-face {
    font-family: 'iconfont';
    src: url('./assets/iconfont.eot');
    src: url('./assets/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./assets/iconfont.woff') format('woff'),
      url('./assets/iconfont.ttf') format('truetype'),
      url('./assets/iconfont.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    background: #242424;

    .nav-box {
      width: 1100px;
      height: 70px;
      margin: 0 auto;

      #log {
        float: left;
        width: 176px;
        height: 69px;
        background-position: 0 0;
      }

      ul {
        float: left;

        li {
          float: left;
          height: 70px;

          a {
            padding: 0 19px;
            color: #ccc;
            display: block;
            line-height: 70px;
            font-size: 14px;

            &:hover {
              color: #fff
            }
          }

          .active {
            color: #fff;
            background: #000;
          }

          &:hover {
            background: #000;
          }
        }
      }

      .search {
        float: right;
        width: 158px;
        height: 32px;
        position: relative;
        margin-top: 19px;
        border-radius: 32px;
        overflow: hidden;

        i {
          width: 15px;
          height: 15px;
          font-size: 15px;
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
        }

        input {
          width: 100%;
          height: 32px;
          border-radius: 32px;
          padding: 0 10px 0 30px;
        }
      }

      #video_a_tbn {
        float: right;
        width: 90px;
        height: 32px;
        background-position: 0 -140px;
        padding-left: 32px;
        margin: 19px 0 0 12px;
        line-height: 33px;
        color: #ccc;

        &:hover {
          color: #fff;
          background-position: -100px -140px;
        }
      }

      #login {
        float: right;
        height: 45px;
        margin: 19px 0 0 20px;
        padding-right: 22px;
        background-position: right -47px;

        a {
          display: block;
          width: 28px;
          margin-top: 7px;
          color: #787878;
        }
      }

      .m-topHead {
        background: url(./assets/topbar.png) no-repeat 0 9999px;
      }
    }
  }

</style>
