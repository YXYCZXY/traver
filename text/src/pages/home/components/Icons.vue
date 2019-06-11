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
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '景点门票'
            },{id:'0002',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '脑壳痛'
                },{id:'0003',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '很困 很困'
                },{id:'0004',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '想睡觉'
                },{
                id:'0005',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '景点门票'
                 },{
                id:'0006',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '脑壳痛'
                },{id:'0007',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '很困 很困'
                },{id:'0008',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: '想睡觉'
                },{
                id:'0009',
                imgUrl:'//img12.360buyimg.com/babel/s190x210_jfs/t1/63728/19/828/7499/5cef7cb4E6ce9e920/b69bbf3ffa88e9ee.png!q90!cc_190x210',
                desc: 'mlxg'
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
        position :absolute
        left :0
        right :0
        bottom :0
        height :.44rem
        line-height :.44rem
        color : $darkTextColor
        ellipse()
</style>