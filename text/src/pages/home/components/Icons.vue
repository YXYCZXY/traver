<template>
    <div class="icons">
        <swiper>
             <swiper-slide v-for="(page , index) of pages" :key="index" >
                <div class="icon" v-for="item of page" :key="item.id"> 
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
         </swiper>
    </div>
</template>

<script>
export default {
    name : 'HomeIcons',
    data () {
        return  {
            iconList :[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },{id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
                desc: '脑壳痛'
                },{id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                desc: '很困 很困'
                },{id:'0004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                desc: '想睡觉'
                },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                desc: '景点门票'
                 },{
                id:'0006',
                imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: '脑壳痛'
                },{id:'0007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png',
                desc: '很困 很困'
                },{id:'0008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: '想睡觉'
                },{
                id:'0009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: 'mlxg'
                },
                {
                id:'0010',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ac9ef584416467d8cc557aad650959fd.png',
                desc: 'mlgj'
                },
                ]
        }
    },
    computed:{
        pages (){
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
 .icons >>> .swiper-container
    height :0
    padding-bottom :50%
.icon
    position : relative
    overflow :hidden
    float : left 
    width :25%
    height : 0
    padding-bottom:25%
    .icon-img
        position :absolute
        top :0
        left :0
        right :0
        bottom :.44rem
        box-sizing:border-box
        padding 0.1rem
        .icon-img-content
            height :100%
            display : block
            margin:0 auto 
    .icon-desc
        text-align :center
        position :absolute
        left :0
        right :0
        bottom :-.3rem
        height :.44rem
        line-height :.44rem
        color : $darkTextColor
        ellipse()
</style>