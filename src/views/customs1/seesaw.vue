<template>
  <div class="lh-box">
  	<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
  	<!--learning-->
	<div class="lh-page lh-learning cover" :class="learningShow" style="background-image:url(style/img/learning/bg.jpg);">
		<div class="lh-seesaw" data-path="swing" data-type="slide" @click="gotoNext($event)">
			<div class="lh-seesaw-a"><img src="style/img/learning/seesaw-icon2.png" /></div>
			<div class="lh-seesaw-b"><img src="style/img/learning/seesaw-icon3.png" /></div>
			<div class="lh-seesaw-c"><img src="style/img/learning/seesaw-icon1.png?a=1" /></div>
		</div>
		<div class="lh-learning-text"><img src="style/img/learning/seesaw.png" /></div>
		<div class="lh-learning-audio">
	    	<audio id="Slide_sound" src="style/img/learning/sound/seesaw_sound.mp3"></audio>
	        <audio id="Slide" src="style/img/learning/sound/seesaw.mp3"></audio>
	        <audio id="twinkle" src="style/img/learning/sound/ep1_LT_1.mp3"></audio>
	    </div>
	</div>
  </div>
</template>
<style type="text/css" scoped>
	
</style>
<script>
export default{
	data(){
		return {
			learningShow:'',
			loadingImg:0,
			loadingHide:'',
			values:{
				w1:[{x:0,y:0},{x:-100, y:142}, {x:-149, y:134}],//正常手机
				w2:[{x:0,y:0},{x:-100, y:142}, {x:-149, y:134}],//小屏手机
			},

		}
	},
	created(e){
		var that=this;
	},
	mounted(e){
		var that=this;
		that.loading();
		var mainfest=[
            {src:'style/img/learning/swing-a1.png'},
            {src:'style/img/learning/swing-a2.png'},
            {src:'style/img/learning/swing-a3.png'},
            {src:'style/img/learning/swing-a4.png'},
            {src:'style/img/learning/swing.png'},
            {src:'style/img/learning/sound/swing_sound.mp3'},
            {src:'style/img/learning/sound/swing.mp3'}
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
              //shuangjie.$pageLoad.addClass('hide').next().removeClass('hide')
            }
          }
          preload.startPreload();
	},
	methods:{
		gotoNext(e){
			var that=this,path=$(e.currentTarget).data('path'),type=$(e.currentTarget).data('type');
			setTimeout(function(){
				clearInterval(that.setIntervalplay);	
			},3100);
			if(type==='return'){
				that.learningShow="";
				that.$router.replace({ path: path})
			}else if(type==='slide'){
				$('#Slide')[0].play();
				that.endAudio(path,$('#Slide')[0]);
			}
		},
		endAudio(path,e){
			var that=this;
			e.addEventListener("ended",function(){
				clearInterval(that.setIntervalplay);
				 that.$router.replace({ path: path})
			 })
		},
		loading(e){
			var that=this,loadingImg=that.loadingImg;
			$('#twinkle')[0].pause();
			that.learning()
		},
		learning(e){
			var that=this;
			$('#Slide_sound')[0].play();
			setTimeout(function(){
				that.learningShow="Learning";
			},1000);
			setTimeout(function(){
					that.setIntervalplay=setInterval(()=>{
						$('#twinkle')[0].play();
					},1000)
				},2000);
			// that.learningSlide=TweenMax.to($('.lh-seesaw-a img'),1,{rotation:15,ease:Power1.easeInOut,onComplete(e){
			// 	this.reverse(0);
			// 	this.restart(true, false);
				
			// }});	
		}
	}
}
</script>
