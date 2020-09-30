export default {
    props:['width','height'],
    mounted: function () {
        if(this.width){
            this.$el.style.width=this.width
        }
        if(this.height){
            this.$el.style.height=this.height
        }
    }
}