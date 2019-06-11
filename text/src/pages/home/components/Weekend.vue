<template>
    <div>
     <div class="title">周末去哪儿</div>
     <ul>
         <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
             <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl">
            </div>
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
             </div>
         </li>
     </ul>
    </div>
</template>

<script>
export default {
    name : 'HomeWeekend',
    data () {
        return {
            recommendList:[{
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
            title:'苏州出发一日游',
            desc:'苏州出发 苏州一日游 拙政园狮子林寒山寺虎丘纯玩无购物'
       },{
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/70/b2f8425ce486ed.jpg_r_640x214_5db9de57.jpg',
            title:'苏州出发一日游',
            desc:'【去哪儿精选】周庄纯玩A线 日游/夜游 赠游船 演出震撼来袭'
       },{
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg',
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
.item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom:30%
.item-img
    width :100%
.item-info
    padding: .1rem
.item-title
    line-height :.54rem
    font-size:.32rem
    ellipse()
.item-desc
    line-height :.4rem
    color :#ccc
    ellipse()
</style>

