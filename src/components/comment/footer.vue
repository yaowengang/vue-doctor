<template>
    <footer>
        <router-link :to="item.link" v-for="item of items">
            <span></span>
            <p>{{ item.text }}</p>
        </router-link>
    </footer>
</template>
<script>
export default {
  data () {
    return {
      items: [
                { text: '首页', link: 'home' },
                { text: '商城', link: 'shop' },
                { text: '管理', link: 'health-center' },
                { text: '社区', link: 'comunity' },
                { text: '我的', link: 'personal-center' }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
footer {
    display: table;
    max-width: 64rem;
    min-width: 32rem;
    border: none;
    background: #efefef;
    position: fixed;
    bottom: 0;
    z-index: 9;
    box-shadow: 0 0 0px rgba(0, 0, 0, .85);
    a {
        display: inline-block;
        overflow: hidden;
        width: 20%;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
        height: 4.9rem;
        box-sizing: border-box;
        padding-top: .6rem;
        padding-bottom: .5rem;
        span {
            background-size: 33% !important;
            display: inline-block;
            width: 100%;
            height: 2.2rem;
        }
        p {
            font-size: 1rem;
            display: block;
            text-align: center;
        }
        &:nth-of-type(1) {
            span {
                background: url(/static/images/icon_11.png) no-repeat center;
            }
        }
        &:nth-of-type(2) {
            span {
                background: url(/static/images/icon_13.png) no-repeat center;
            }
        }
        &:nth-of-type(3) {
            span {
                background: url(/static/images/icon_06.png) no-repeat center;
            }
        }
        &:nth-of-type(4) {
            span {
                background: url(/static/images/icon_08.png) no-repeat center;
            }
        }
        &:nth-of-type(5) {
            span {
                background: url(/static/images/icon_03.png) no-repeat center;
            }
        }
    }
    a.router-link-active {
        p {
            color: #03a9f4;
        }
        &:nth-of-type(1) span {
            background: url(/static/images/icon_blue_11.png) no-repeat center;
        }
        &:nth-of-type(2) span {
            background: url(/static/images/icon_blue_13.png) no-repeat center;
        }
        &:nth-of-type(3) span {
            background: url(/static/images/icon_blue_06.png) no-repeat center;
        }
        &:nth-of-type(4) span {
            background: url(/static/images/icon_blue_08.png) no-repeat center;
        }
        &:nth-of-type(5) span {
            background: url(/static/images/icon_blue_03.png) no-repeat center;
        }                                
    }
}
</style>
