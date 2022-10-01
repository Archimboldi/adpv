<template>
    <div class="home">
        <iframe src="http://127.0.0.1:88" class="mapFrame" ref="mapFrame"></iframe>
    </div>
</template>
<script>
    export default {
        mounted() {
            let mapFrame = this.$refs['mapFrame']
            if (mapFrame.attachEvent){  //兼容浏览器判断
                mapFrame.attachEvent("onload", function(){ 
                    let iframeWin = mapFrame.contentWindow
                    iframeWin.postMessage({
                        method: 'getBaseInfo',
                        data:'我是vuex state的数据'
                    },'*')
                })
            } else { 
                mapFrame.onload = function(){ 
                    let iframeWin = mapFrame.contentWindow
                    iframeWin.postMessage({
                        method: 'getBaseInfo',
                        data:'我是vuex state的数据'
                    },'*')
                } 
            }
            
        }
    }
</script>
<style scoped lang="less">
body {
    margin: 0;  /* 如果页面出现垂直滚动条，则加入此行CSS以消除之 */
    // zoom: 1;
    // overflow: hidden;
}
.home {
    height: 700px;
    height: max-content-height;
}
.mapFrame {
    height: 100%;
    width: 100%;
}    
</style>