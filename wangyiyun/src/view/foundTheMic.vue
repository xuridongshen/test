<template>
  <div class="foundTheMic">

    <div class="nav_head">
      <div class="nav_head_list">
        <ul>
          <li>
            <router-link to="tujian">推荐</router-link>
          </li>
          <li>
            <router-link to="paihangbang">排行榜</router-link>
          </li>
          <li>
            <a href="">歌单</a>
          </li>
          <li>
            <a href="">主播电台</a>
          </li>
          <li>
            <a href="">歌手</a>
          </li>
          <li>
            <a href="">新碟上架</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: 'foundTheMic',
  methods: {

  }
}

</script>
<style lang="less" scoped>
  .nav_head {
    width: 100%;
    background: #C20C0C;

    .nav_head_list {
      width: 1100px;
      height: 36px;
      margin: 0 auto;

      ul {
        height: 36px;
        padding-left: 180px;

        li {
          float: left;
          margin: 7px 17px;

          a {
            display: inline-block;
            height: 20px;
            line-height: 21px;
            padding: 0px 13px;
            border-radius: 20px;

            &.router-link-exact-active {
              color: #fff;
              background: #0003;
            }
          }

        }
      }
    }
  }

</style>
