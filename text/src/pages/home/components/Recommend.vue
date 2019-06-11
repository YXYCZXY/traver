<template>
    <div>
     <div class="title">热销推荐</div>
     <ul>
         <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
             <img class="item-img" :src="item.imgUrl">
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
                 <button class="item-button">查看详情</button>
             </div>
         </li>
     </ul>
    </div>
</template>

<script>
export default {
    name : 'HomeRecommend',
    data () {
        return {
            recommendList:[{
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/p0/201405/14/3dfad2bcd30c40e91a15f8b7296d86a6.jpg_200x200_265db173.jpg',
            title:'苏州出发一日游',
            desc:'苏州出发 苏州一日游 拙政园狮子林寒山寺虎丘纯玩无购物'
       },{
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_200x200_0ccb4aa8.jpg',
            title:'苏州出发一日游',
            desc:'【去哪儿精选】周庄纯玩A线 日游/夜游 赠游船 演出震撼来袭'
       },{
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/p0/201405/30/bcc9329d8af6f5cdddff715ed11a90fd.jpg_200x200_e5a812cd.jpg',
            title:'无锡出发一日游',
            desc:'灵山大佛一日游（含门票+去程交通）市区酒店可安排车接'
       },
       ]
        }
        
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    margin-top :.2rem
    line-height :.8rem
    background : #eee3ee
    text-indent:.2rem
    ellipse()
.item
    overflow :hidden
    display :flex
    height: 1.9rem
    .item-img
        width :1.7rem
        height :1.7rem
        padding :.1rem
    .item-info
        min-width:0
        padding: .1rem
    .item-title
        line-height :.54rem
        font-size:.32rem
    .item-desc
        line-height :.4rem
        color :#ccc
        ellipse()
    .item-button
        margin-top :.2rem
        background :#ff9300
        padding : 0 .2rem
        border-radius : .06rem
        color :#fff
</style>

