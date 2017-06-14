<template>
    <header>
        <i class="fa fa-angle-left"></i>
        <h1>首页</h1>
        <i class="fa fa-search"></i>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
header {
    height: 4.5rem;
    background: #FFFFFF;
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    i {
        width: 4.5rem;
        height:4.5rem;
        display: inline-block;
        line-height:4.5rem;
        font-size:2rem;
        color: #4f4f4f;
        text-align: center;        
        &:nth-of-type(1) {
        font-size: 3rem;
        }
        &:nth-of-type(2) {
            float: right;
        }
        img {
            width: 100%;
        }
    }
    h1 {
        right: 4.5rem;
        left: 4.5rem;
        letter-spacing: 0.3rem;
        font-size: 1.8rem;
        font-weight: 500;
        position: absolute;
        color: #4f4f4f;
        line-height: 4.5rem;
        text-align: center;
        display: inline-block;
        overflow: hidden;
        width: auto;
        margin: 0;
        text-overflow: ellipsis;
    }
}
</style>

