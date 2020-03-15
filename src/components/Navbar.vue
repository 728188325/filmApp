<template>
    <ul class="nav">
        <router-link tag="li" to="/film/nowPlaying" activeClass="active">正在热映</router-link>
        <router-link tag="li" to="/film/comingSoon" activeClass="active">即将上映</router-link>
    </ul>
</template>

<style lang="scss" scoped>
    .nav{
        display: flex;
        width: 100%;
        list-style: none;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        li{
            flex: 1;
            height: 50px;
            line-height: 50px;
            text-align: center;
            &.active{
                color: #ff5f16;
            }
        }
    }

</style>
