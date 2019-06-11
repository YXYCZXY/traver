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
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
            },{
                id : '0002',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
            },
            {
                id : '0003',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
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
    padding-bottom :30%
    background :#blue
    }
</style>


