<template>
    <div>
        <router-link
         to="/" 
         class="header-abs"
          tag="div"
          v-show="showAbs"
          >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixde"  
         v-show="!showAbs"
         :style="opacityStyle"
         >
            <router-link to="/" >
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style  lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header-abs
    text-align:center
    position:absolute
    left :.2rem
    top:.03rem
    width :.8rem
    height :.8rem
    border-radius: 0.4rem
    background :rgba(0.0.0.0.8)
    .header-abs-back
        position :relative
        top:.2rem
        color :#fff
        font-size:0.4rem
.header-fixde
    z-index :2
    position:fixed
    top:0
    left :0
    right :0
    height : $headerHeight
    line-height :$headerHeight
    text-align :center
    color :#fff
    background :$bgColor
    font-size:.32rem
    .header-fixed-back
        position :absolute
        text-align :center
        top:0
        left :0
        width :.64rem
        font-size:.4rem
</style>
