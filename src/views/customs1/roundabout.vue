<template>
  <div class="lh-box" :class="endOn">
  	<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
  	<!--learning-->
	<div class="lh-page lh-learning cover" :class="learningShow" style="background-image:url(style/img/learning/bg.jpg);">
		<div class="lh-seesaw roundabout" data-path="/" data-type="end" @click="gotoNext($event)">
			<div class="lh-roundabout-a" style="background-image:url(style/img/learning/roundabout-icon.png)"></div>
			<div class="lh-roundabout-c"><img src="style/img/learning/roundabout-a1.png?a=1" /></div>
		</div>
		<div class="lh-learning-text"><img src="style/img/learning/roundabout.png" /></div>
		<div class="lh-learning-audio">
	    	<audio id="Slide_sound" src="style/img/learning/sound/roundabout_sound.mp3"></audio>
	        <audio id="Slide" src="style/img/learning/sound/roundabout.mp3"></audio>
	        <audio id="endAudio" src="style/img/learning/sound/end.mp3"></audio>
	        <audio id="good" src="style/img/learning/sound/good-xiaoling.mp3"></audio>
	        <audio id="twinkle" src="style/img/learning/sound/ep1_LT_1.mp3"></audio>
	    </div>
	</div>
	<!--ending-->
	<div class="lh-ending"><div>
		<div class="lh-ending-a1"><img src="style/img/learning/end-a1.png" /></div>
		<div class="lh-ending-a2"><img src="style/img/learning/end-a2.png" /></div>
		<div class="lh-ending-a3"><img src="style/img/learning/end-a3.png" /></div>
		<div class="lh-ending-a6 qiqiu"><img src="style/img/learning/end-a6.png" /></div>
		<div class="lh-ending-a5 qiqiu"><img src="style/img/learning/end-a5.png" /></div>
		<div class="lh-ending-a4 qiqiu"><img src="style/img/learning/end-a4.png" /></div>
	</div></div>
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
			endOn:'',
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
	},
	methods:{
		gotoNext(e){
			var that=this,path=$(e.currentTarget).data('path'),type=$(e.currentTarget).data('type');
			setTimeout(function(){
				clearInterval(that.setIntervalplay);	
			},1600);
			if(type==='return'){
				that.learningShow="";
				that.$router.replace({ path: path})
			}else if(type==='end'){
				$('#Slide')[0].play();
				that.endAnimate(path,$('#Slide')[0]);
			}else{
				$('#Slide')[0].play();
				that.endAudio(path,$('#Slide')[0]);
			}
		},
		endAnimate(path,e){
			var that=this;
			e.addEventListener("ended",function(){
				that.endOn="End";
				//$('#endAudio')[0].play();
				$('#good')[0].play();
				clearInterval(that.setIntervalplay);
				that.qiqiuAnimate();
				 //that.$router.replace({ path: path})
			})
		},
		qiqiuAnimate(e){
			var that=this,num=true;
			setTimeout(function(){
				TweenMax.staggerTo($('.qiqiu'),1,{bezier:{type:"cubic", values:[{x:30,y:150,opacity:0},{x:-20,y:50,opacity:1},{x:0,y:10,opacity:1},{x:0,y:-10,opacity:0}], autoRotate:true},onComplete(e){
					if(num){
						this.restart(true, false);
						num=false;
					}else{
						that.$router.replace({ path: '/customs1'});
					}
				}},.5);	
			},1000);
		},
		endAudio(path,e){
			var that=this;
			e.addEventListener("ended",function(){
				 that.$router.replace({ path: path});
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
			if($('#twinkle')[0]){
				setTimeout(function(){
					that.setIntervalplay = setInterval(()=>{
						$('#twinkle')[0].play();
					},1000)
				},500);
			}
			// that.learningSlide=TweenMax.to($('.lh-swing-b img'),1,{rotationX:25,ease:Power1.easeInOut,onComplete(e){
				
			// 	setTimeout(function(){
			// 		that.learningShow="Learning";
			// 	},1000);
			// }});	
		}
	}
}
</script>
