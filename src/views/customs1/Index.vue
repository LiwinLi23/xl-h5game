<template>
  <div class="lh-box">
  	<div class="lh-page lh-page1 cover" style="background-image:url(style/img/main/main.png);">     
        <div class="lh-return" data-type="return" data-path="/" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
		<ul class="lh-main-item l-grid-3">
	        <li v-for="(item,index) in btn" :data-idx="index" :data-path="item.path" :data-type="item.type" @click="clickBtn($event)" :class="item.hover">
	            <div class="img"><img src="style/img/main/box1.png?a=1" /></div>
	            <div class="img1"><img :src="item.icon" /></div>
	            <div class="text"><img :src="item.text" /></div>
	        </li>
	    </ul>
	    <div class="lh-start"><img src="style/img/main/start.png" /></div>
	    <div class="lh-main-audio">
	    	<audio id="audioMain" loop src="style/img/main/sound/main_music.mp3"></audio>
	        <audio id="audioMainButton" src="style/img/main/sound/main_button.mp3"></audio>
	    </div>
	</div>
	<!--video-->
	<div class="lh-video" :class="videoOn">
		<a href="javascript:;" class="lh-video-return" @click="closeVideo($event)"><i class="iconfont iconfont icon-xiangzuo"></i></a>
	    <video src="style/img/video/video_x264.mp4" controls playsinline="true" webkit-playsinline="true" controlslist="nofullscreen nodownload"></video>
	</div>
  </div>
</template>
<style type="text/css" scoped>
	
</style>
<script>
export default{
	data(){
		return {
			videoOn:'',
			btn:[
				{icon:'style/img/main/04.png?a=1',text:'style/img/main/box-text1.png?a=1',path:'',type:'layer',hover:''},
				{icon:'style/img/main/02.png?a=1',text:'style/img/main/box-text2.png?a=1',path:'/slide',type:'',hover:''},
				{icon:'style/img/main/01.png?a=1',text:'style/img/main/box-text3.png?a=1',path:'/checking',type:'',hover:''},
				{icon:'style/img/main/03.png?a=1',text:'style/img/main/box-text4.png?a=1',path:'/practicing',type:'',hover:''},
				{icon:'style/img/main/05.png?a=1',text:'style/img/main/box-text5.png?a=1',path:'/writing',type:'',hover:''}
			]
		}
	},
	created(e){
		var that=this;
        var mainfest=[
            {src:'style/img/main/main.png'},
            {src:'style/img/main/box2.png'},
            {src:'style/img/main/box-text1.png'},
            {src:'style/img/main/box-text2.png'},
            {src:'style/img/main/box-text3.png'},
            {src:'style/img/main/box-text4.png'},
            {src:'style/img/main/box-text5.png'},
            // {src:'style/img/main/sound/main_music.mp3'},
            // {src:'style/img/main/sound/main_button.mp3'},
            // {src:'style/img/video/video_x264.mp4'},
            {src:'style/img/learning/bg.jpg'},
            {src:'style/img/learning/a1.png'},
            {src:'style/img/learning/a2.png'},
            {src:'style/img/learning/a3.png'},
            {src:'style/img/learning/a4.png'},
            {src:'style/img/learning/slide.png'},
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
              //$(".lh-index-loading .text").text('loading...' + Math.ceil(event.loaded * 100) + "%");
            },
            // 处理preload添加当队列完成全部加载后触发事件
            loadComplete: function () {
                setTimeout(function(){
                    $('.lh-index-loading>div').css({'animation-play-state':'paused'});
                    TweenMax.to($('.lh-index-loading'),.4,{opacity:0, visibility: 'hidden', ease:Power0.easeIn,onComplete(e){
                        sessionStorage.setItem("customsLoading1","111");
                    }});
                },1000);
              //shuangjie.$pageLoad.addClass('hide').next().removeClass('hide')
            }
          }
          preload.startPreload();
	},
	mounted(e){
		var that=this;
		$('#audioMain')[0].play(); 
	},
	methods:{
		gotoNext(e){
			var that=this,path=$(e.currentTarget).data('path');
			that.$router.replace({ path: path})
		},
		clickBtn(e){
			var that=this,path=$(e.currentTarget).data('path'),type=$(e.currentTarget).data('type'),idx=$(e.currentTarget).data('idx'),btn=that.btn;
			for(var i=0;i<btn.length;i++){
				btn[i].hover="";
			}
			that.btnShow(idx);
			setTimeout(function(){
				if(type=='layer'){//视频弹窗
					that.videoOn="on";
					$('.lh-video video')[0].play();
					that.endVideo(idx,$('.lh-video video')[0]);
				}else{
					that.$router.replace({ path: path});
				}
			},460);
		},
		//按钮效果
		btnShow(idx){
			$('#audioMainButton')[0].play();
			$('#audioMain')[0].pause();
			this.btn[idx].hover="hover";
		},
		//关闭视频
		closeVideo(e){
			this.videoOn="";
			$('.lh-video video')[0].pause();
			$('#audioMain')[0].play();
		},
		//视频播放结束
		endVideo(idx,e){
			var that=this;
			e.addEventListener("ended",function(){
				 that.btn[idx].hover="";
				 that.videoOn="";
				 $('#audioMain')[0].play();
			 })
		}
	}
}
</script>
