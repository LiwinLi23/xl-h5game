<template>
  <div class="lh-box">
  	<!--loading-->
  	<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
  	<div class="lh-learning-loading" :class="loadingHide" :style="'background-image:url(style/img/learning/loading/'+loadingImg+'.png)'"></div>
  	<!--learning-->
	<div class="lh-page lh-learning cover" :class="learningShow" style="background-image:url(style/img/learning/bg.jpg);">
		<div class="lh-learning-loading"></div>
	    <div class="lh-learning-slide" data-path="seesaw" data-type="slide" @click="gotoNext($event)">
	    	<div class="learning-slide-a1"><img src="style/img/learning/a1.png" /></div>
	        <div class="learning-slide-a2"><img src="style/img/learning/a2.png" /></div>
	        <div class="learning-slide-a3"><img src="style/img/learning/a3.png" /></div>
	        <div class="learning-slide-a4"><img src="style/img/learning/a4.png?a=2" /></div>
	    </div>
	    <div class="lh-learning-text"><img src="style/img/learning/slide.png" /></div>
	    <div class="lh-learning-audio">
	    	<audio id="Slide_sound" src="style/img/learning/sound/slide_sound.mp3"></audio>
	        <audio id="Slide" src="style/img/learning/sound/slide.mp3"></audio>
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
            {src:'style/img/learning/seesaw-icon1.png'},
            {src:'style/img/learning/seesaw-icon2.png'},
            {src:'style/img/learning/seesaw-icon3.png'},
            {src:'style/img/learning/seesaw.png'},
            {src:'style/img/learning/sound/seesaw_sound.mp3'},
            {src:'style/img/learning/sound/seesaw.mp3'}
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
			},1100);
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
			// var n= setInterval(function(){
			// 	loadingImg++;
			// 	if(loadingImg>=80){
			// 		clearInterval(n);
			// 		$('.lh-learning-loading').fadeOut(function(){
			// 			that.learning()
			// 		});
			// 	}
			// 	that.loadingImg=loadingImg;
			// },100);
			$('.lh-learning-loading').hide();
			that.learning()
		},
		learning(e){
			var that=this;
			$('#Slide_sound')[0].play();
			that.learningSlide=TweenMax.to($('.learning-slide-a2'),1, {bezier:{type:"quadratic", values:that.values.w1, autoRotate:false},onComplete(e){
				console.log('动画完成');
				that.setIntervalplay=setInterval(()=>{
					$('#twinkle')[0].play();
				},1000)
				that.learningShow="Learning";
			}});	
		}
	}
}
</script>
