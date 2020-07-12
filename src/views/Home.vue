<template>
  <div class="lh-box">
    <div class="lh-index-loading"><span class="text"></span><div style="background-image:url(style/img/main/loading-main.png)"></div></div>
    <img class="lh-home-bg" src="style/img/bg.jpg" />
    <ul class="lh-home-item">
        <li :class="item.on" v-for="(item,index) in home" :data-path="item.path" :data-idx="index" @click="item.hover?clickBtn($event):''"><img :src="item.hover?item.icon:'style/img/icon1.png'" /></li>
    </ul>
     <div class="lh-main-audio">
        <audio id="audioMain" loop src="style/img/main1-background_MP3.mp3" autoplay></audio>
        <audio id="audioMainButton" src="style/img/main1-button_MP3.mp3"></audio>
      </div>
  </div>
</template>
<script>
export default{
    data(){
        return {
            home:[
                {icon:'style/img/icon2.png',hover:'on',path:'customs1',on:''},
                {icon:'style/img/icon3.png',path:'customs2',on:''},
                {icon:'style/img/icon4.png',path:'customs3',on:''},
                {icon:'style/img/icon5.png',path:'customs4',on:''},
                {icon:'style/img/icon6.png',path:'customs5',on:''},
                {icon:'style/img/icon7.png',path:'customs6',on:''},
                {icon:'style/img/icon8.png',path:'customs7',on:''},
                {icon:'style/img/icon9.png',path:'customs8',on:''},
                {icon:'style/img/icon10.png',path:'customs9',on:''},
                {icon:'style/img/icon11.png',path:'customs10',on:''}
            ]
        }
    },
    created(e){
        var that=this;
        var mainfest=[
            {src:'style/img/main/loading-main.png'},
            {src:'style/img/main/main.png'},
            {src:'style/img/main/box2.png?a=1'},
            {src:'style/img/main/box-text1.png?a=1'},
            {src:'style/img/main/box-text2.png?a=1'},
            {src:'style/img/main/box-text3.png?a=1'},
            {src:'style/img/main/box-text4.png?a=1'},
            {src:'style/img/main/box-text5.png?a=1'},
            // {src:'style/img/main/sound/main_music.mp3'},
            // {src:'style/img/main/sound/main_button.mp3'},
            // {src:'style/img/video/video_x264.mp4'},
            {src:'style/img/learning/bg.jpg'},
            {src:'style/img/learning/a1.png?a=1'},
            {src:'style/img/learning/a2.png?a=1'},
            {src:'style/img/learning/a3.png?a=1'},
            {src:'style/img/learning/a4.png?a=1'},
            {src:'style/img/learning/slide.png?a=1'},
            // {src:'style/img/learning/sound/slide_sound.mp3'},
            // {src:'style/img/learning/sound/slide.mp3'}

          ];
          //资源加载
          var preload = {
            startPreload:function(){
              var preload = new createjs.LoadQueue(false);
              preload.addEventListener("progress", this.handleFileProgress);
              preload.installPlugin(createjs.SOUND);
              preload.addEventListener("complete", this.loadComplete);
              preload.setMaxConnections(1);
              preload.loadManifest(mainfest);
            },
            // 当整个队列变化时展示的进度事件的处理函数
            handleFileProgress: function (event) {
              //$(".percent").text('loading...' + Math.ceil(event.loaded * 100) + "%");
            },
            // 处理preload添加当队列完成全部加载后触发事件
            loadComplete: function () {
              setTimeout(function(){
                  $('.lh-index-loading>div').css({'animation-play-state':'paused'});
                  TweenMax.to($('.lh-index-loading'),.4,{opacity:0, visibility: 'hidden', ease:Power0.easeIn,onComplete(e){
                      sessionStorage.setItem("customsLoading1","111");
                  }});
              },1000);
            }
          }
          preload.startPreload();
    },
    mounted(e){
      var that=this;
      var customsLoading=sessionStorage.getItem("customsLoading1");
      if(customsLoading){
          $('.lh-index-loading').css({display:'none'});
      }
      $('#audioMain')[0].load();
      $('#audioMainButton')[0].load();
      $('#audioMain')[0].play();
      wx.config({
              // 配置信息, 即使不正确也能使用 wx.ready
              debug: false,
              appId: '',
              timestamp: 1,
              nonceStr: '',
              signature: '',
              jsApiList: []
      });
      wx.ready(function() {
          $('#audioMain')[0].play();
      });
    },
    methods:{
        gotoNext(e){
            var that=this,path=$(e.currentTarget).data('path');
            this.$router.replace(path)
        },
        clickBtn(e){
          var that=this,path=$(e.currentTarget).data('path'),type=$(e.currentTarget).data('type'),idx=$(e.currentTarget).data('idx'),btn=that.home;
          for(var i=0;i<btn.length;i++){
            btn[i].on="";
          }
          that.btnShow(idx);
          setTimeout(function(){
            that.$router.replace({ path: path});
          },460);
        },
        //按钮效果
        btnShow(idx){
          $('#audioMainButton')[0].play();
          $('#audioMain')[0].pause();
          this.home[idx].on="hover";
        },
    }
}
</script>
