<template>
    <div class="wrapper">
            <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img  class="swiper-img" :src="item.imgUrl"
            />
            </swiper-slide>

            <!-- 背景图片选中点设置 -->
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
    </div>
    </template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop:true
            },
            swiperList : [{
                id : '0001',
                imgUrl: 'https://source.qunarzz.com/site/images/wns/20171019_pc_464x320_7667.jpg'
            },{
                id : '0002',
                imgUrl:'https://imgs.qunarzz.com/p/tts1/1710/16/6cdaa3799d927a02.jpg_r_480x320x90_3404f10a.jpg'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background :#fff
.swiper-img{
    width :100%
    }
.wrapper{
    overflow : hidden
    height 0
    width :100%
    padding-bottom :68.8%
    background :#blue
    }
</style>


