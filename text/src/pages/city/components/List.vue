<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
            <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">上海</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">上海</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">广州</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">苏州</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">深圳</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">香港</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">澳门</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div item-list>
                <div class="item border-bottom"> 阿拉尔</div>
                <div class="item border-bottom"> 阿卡卡</div>
                <div class="item border-bottom"> 阿拉西</div>
                <div class="item border-bottom"> 阿柯泽</div>
            </div>
            <div class="title border-topbottom">B</div>
            <div item-list>
                <div class="item border-bottom"> 伯恩</div>
                <div class="item border-bottom"> 亳州</div>
                <div class="item border-bottom"> 柏平大</div>
                <div class="item border-bottom"> 博达</div>
            </div>
            <div class="title border-topbottom">C</div>
            <div item-list>
                <div class="item border-bottom"> 尘都</div>
                <div class="item border-bottom"> 成都</div>
                <div class="item border-bottom"> 承都</div>
                <div class="item border-bottom"> 查没</div>
            </div>
            <div class="title border-topbottom">D</div>
            <div item-list>
                <div class="item border-bottom">德州</div>
                <div class="item border-bottom"> 德纵</div>
                <div class="item border-bottom"> 德勒</div>
                <div class="item border-bottom"> 德克</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
      mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.border-topbottom
&:before
    border-color: #ccc
&:after
    border-color: #ccc
.border-bottom
&:before
    border-color: #ccc
&:after
    border-color: #ccc
.list
    overflow :hidden
    position :absolute
    top:1.58rem
    left :0
    right :0
    bottom :0
.title
    line-height :.44rem
    background #eee
    padding-left:.2rem
    color :#666
    font-size: 0.26rem
.button-list
    overflow: hidden
    padding 0.1rem .6rem .1rem .1rem
    .button-wrapper
        float:left
        width :33.33%
        .button
            text-align :center
            margin : .1rem
            padding : .1rem 0
            border :.02rem solid #cccccc
            border-radius :.06rem
.item-list
.item
    line-height :.76rem
    padding-left :.2rem
</style>
