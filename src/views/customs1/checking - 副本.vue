<template>
  <div class="lh-box" :class="endOn">
  	<!--loading-->
  	<!--learning-->
	<div class="lh-page lh-learning cover" :class="learningShow" style="background-image:url(style/img/learning/bg.jpg);">
		<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
		<div class="lh-checking-bd">
			<div class="bd" :class="checking[checkingIndex].class"><img :src="checking[checkingIndex].bd" /></div>
			<div class="hd">
				<div class="bg"><img src="style/img/checking/checking-text-bg.png" /></div>
				<div class="text"><img :src="checking[checkingIndex].text" /></div>
			</div>
		</div>
		<ul class="lh-checking-item">
			<li :class="item.class" :data-idx="index" @touchmove.prevent.stop="isMove?seesawMove($event):''" v-for="(item,index) in checking" :style="{zIndex:item.zIndex}">
				<div class="shadow"><img :src="item.shadow" /></div>
				<div class="img"><img :src="item.hd" /></div>
			</li>
		</ul>
	</div>
	<div class="lh-learning-audio">
    	<audio id="Slide_sound" src="style/img/checking/sound/ep1-checking-time.mp3"></audio>
        <audio id="Success" src="style/img/checking/sound/success.mp3"></audio>
        <audio id="Fail" src="style/img/checking/sound/fail.mp3"></audio>
        <audio id="slide" src="style/img/learning/sound/slide.mp3"></audio>
        <audio id="swing" src="style/img/learning/sound/swing.mp3"></audio>
        <audio id="seesaw" src="style/img/learning/sound/seesaw.mp3"></audio>
        <audio id="roundabout" src="style/img/learning/sound/roundabout.mp3"></audio>
        <audio id="endAudio" src="style/img/learning/sound/end.mp3"></audio>
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
			isMove:true,
			learningShow:'',
			checkingIndex:0,
			endOn:'',
			checking:[
				{
					shadow:'style/img/checking/checking4-bg.png',hd:'style/img/checking/checking4.png',bd:'style/img/checking/checking4-bd.png',text:'style/img/checking/checking-text1.png',left:'74.84375',class:'slide',zIndex:'1'
				},
				{
					shadow:'style/img/checking/checking1-bg.png',hd:'style/img/checking/checking1.png',bd:'style/img/checking/checking1-bd.png',text:'style/img/checking/checking-text2.png',left:'3.125',class:'seesaw',zIndex:'1'
				},
				{
					shadow:'style/img/checking/checking3-bg.png',hd:'style/img/checking/checking3.png',bd:'style/img/checking/checking3-bd.png',text:'style/img/checking/checking-text3.png',left:'48.95833333333333',class:'swing',zIndex:'1'
				},
				{
					shadow:'style/img/checking/checking2-bg.png',hd:'style/img/checking/checking2.png',bd:'style/img/checking/checking2-bd.png',text:'style/img/checking/checking-text4.png',left:'25.78125',class:'roundabout',zIndex:'1'
				}
			],
			area:{

			},
			areaWidth:0,
			areaHeight:0
		}
	},
	created(e){
		var that=this;
	},
	mounted(e){
		var that=this;
		that.loading();
		that.getArea();
	},
	methods:{
		//获取固定区域
		getArea(e){
			var that=this, width=$('.lh-checking-bd .bd').width(),
			height=$('.lh-checking-bd .bd').height(),
			wWidth=$(window).height(),
			wHeight=$(window).width(),
			areaTop=wHeight*0.3425925925925926,
			areaLeft=wWidth/2-width/2,
			left1=areaLeft+width/2,
			right1=areaLeft+width/2+width,
			top1=areaTop,
			bottom1=areaTop+height;
			var area={left1:left1,top1:top1,right1:right1,bottom1:bottom1}
			that.areaWidth=width;
			that.areaHeight=height;
			that.area=area;
		},
		seesawMove(e){
			if($('.lh-page').hasClass('Checking')){
				$('.lh-page').removeClass('Checking')
			}
			var idx=$(e.currentTarget).data('idx');
			var that=this;
			that.area.bottom1=wWidth=$(window).width()*0.3425925925925926+$('.lh-checking-bd .bd').height();
			var _this=$(e.currentTarget),width=_this.width(),height=_this.height(),wWidth=$(window).height(),wHeight=$(window).width(),area=that.area,checking=that.checking;
			var pageX=e.changedTouches[0].pageX-height/2,pageY=e.changedTouches[0].pageY-width/2;
			var right=pageY+width+width/3,left=pageY+width-width/2,bottom=pageX-height-height/2,top=pageX+height*2;
			for(var i=0;i<checking.length;i++){
				checking[i].zIndex="1";
			}
			checking[idx].zIndex="2";
			that.checking=checking;
			if(idx!=that.checkingIndex){
				TweenMax.to(_this, 0,{x:pageY,y:-pageX,left:'0',bottom:'0',ease:Quad.easeOut});
			}else{
				if(right>=area.left1&&left<=area.right1&&bottom<=area.top1&&top>=area.bottom1){
					that.isMove=false;
					TweenMax.to(_this,.1,{x:0,y:0,left:area.left1-width/2+'px',top:area.top1+'px',ease:Quad.easeOut,onComplete(){
						$('#Fail')[0].play();
						console.log(that.checking[idx].class);
						//that.endAudio($('#Fail')[0]);
					}});
				}else{
					TweenMax.to(_this, 0,{x:pageY,y:-pageX,left:'0',bottom:'0',ease:Quad.easeOut});
				}
			}
		},
		gotoNext(e){
			var that=this,path=$(e.currentTarget).data('path'),type=$(e.currentTarget).data('type');
			if(type==='return'){
				that.learningShow="";
				that.$router.replace({ path: path})
			}else if(type==='slide'){
				$('#Slide')[0].play();
				that.endAudio(path,$('#Slide')[0]);
			}
		},
		endAudio(e){
			var that=this,checkingIndex=that.checkingIndex;
			e.addEventListener("ended",function(){
				 if(checkingIndex<3){
					 $('.lh-page').addClass('Checking');
					 setTimeout(function(){
							 checkingIndex+=1;
							 that.checkingIndex=checkingIndex;
							 $('.lh-checking-item li').attr('style','');
							 that.isMove=true;	
					},500)
				}else{
					that.endAnimate();
				}
			 })
		},
		endAnimate(){
			var that=this;
			that.endOn="End";
			$('#endAudio')[0].play();
			that.qiqiuAnimate();
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
		loading(e){
			var that=this,loadingImg=that.loadingImg;
			$('.lh-learning-loading').hide();
			that.learning()
		},
		learning(e){
			var that=this;
			$('#Slide_sound')[0].play();
			// that.learningSlide=TweenMax.to($('.learning-slide-a2'),1, {bezier:{type:"quadratic", values:that.values.w1, autoRotate:false},onComplete(e){
			// 	console.log('动画完成');
			// 	that.learningShow="Learning";
			// }});	
		}
	}
}
</script>
