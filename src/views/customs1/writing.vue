<template>
  <div class="lh-box" :class="endOn">
  	<!--loading-->
  	<!--learning-->
	<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
	<div class="lh-page lh-learning cover" :class="learningShow" style="background-image:url(style/img/writing/writing-bg.png);" @touchstart.prevent.stop="seesawStart($event)" @touchmove.prevent.stop="isMove?seesawMove($event):''">
		<div class="lh-writing-icon" :class="writing[checkingIndex].class"><img :src="writing[checkingIndex].text" /></div>
		<div class="lh-writing-bd"></div>
		<div class="lh-writing-img" :data-class="writing[checkingIndex].class" :class="writing[checkingIndex].class">
			<img :src="writing[checkingIndex].img" />
			<span class="dot" v-for="item in writing[checkingIndex].dot"></span>
		</div>
		<div class="dot1"></div>
		<ul class="lh-writing-hd">
			<li v-for="(item,index) in writing" :class="item.hover"></li>
		</ul>
	</div>
	<div class="lh-learning-audio">
    	<audio id="Slide_sound" src="style/img/learning/sound/ep1-practice-time.mp3"></audio>
        <audio id="Success" src="style/img/learning/sound/ep1_LT_1.mp3"></audio>
        <audio id="Success1" src="style/img/checking/sound/success.mp3"></audio>
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
			learningShow:'',
			checkingIndex:0,
			endOn:'',
			writing:[
				{img:'style/img/writing/slide.png',text:'style/img/writing/slide-icon.png',class:'slide',hover:'on',dot:35,area:[]},
				{img:'style/img/writing/seesaw.png',text:'style/img/writing/seesaw-icon.png',class:'seesaw',hover:'',dot:57,area:[]},
				{img:'style/img/writing/swing.png',text:'style/img/writing/swing-icon.png',class:'swing',hover:'',dot:40,area:[]},
				{img:'style/img/writing/roundabout.png',text:'style/img/writing/roundabout-icon.png',class:'roundabout',hover:'',dot:76,area:[]}
			],
			isMove:true,
			dotNum:0,
			className:'slide'
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
			var that=this,wWidth=$(window).height(),wHeight=$(window).width();
			setTimeout(function(){
				for(var i=0;i<$('.dot').length;i++){
					var _left=$($('.dot')[i]).offset().left,_top=$($('.dot')[i]).offset().top;
					var _width=$($('.dot')[i]).height(),_height=$($('.dot')[i]).width();
					var _left1=_left,_top1=_top,
					_right1=_left+_width,
					_top1=_top,
					_bottomg1=_top+_height;
					that.writing[that.checkingIndex].area.push({left1:_left1,right1:_right1,top1:_top1,bottom1:_bottomg1});
				}
				that.dotNum=that.writing[that.checkingIndex].dot;
			},1000);
		},
		seesawStart(e){
			var that=this,idx=$(e.currentTarget).data('idx');
			var startX=e.changedTouches[0].pageX,startY=e.changedTouches[0].pageY;
			//起始位置
			that.writing[that.checkingIndex].start={x:startX,y:startY};
			var x=startX,y=startY;
			var dotNum=that.dotNum;
			for(var i=0;i<that.writing[that.checkingIndex].dot;i++){
				if(x>=that.writing[that.checkingIndex].area[i].left1&&x<=that.writing[that.checkingIndex].area[i].right1&&y>=that.writing[that.checkingIndex].area[i].top1&&y<=that.writing[that.checkingIndex].area[i].bottom1){
					if(!$($('.dot')[i]).hasClass('hover')){
						$('#Success')[0].play();
						$($('.dot')[i]).addClass('hover');
						dotNum--;
						that.dotNum=dotNum;
						if(dotNum==0){
							that.dotNum=0;
							$('#'+that.className)[0].play();
							that.endAudio($('#'+that.className)[0]);
						}
					}
				}
			}
		},
		seesawMove(e){
			var that=this;
			var y=e.changedTouches[0].pageY;
			var x=e.changedTouches[0].pageX;
			that.writing[that.checkingIndex].pageY=y;
			that.writing[that.checkingIndex].pageX=x;
			var dotNum=that.dotNum;
			for(var i=0;i<that.writing[that.checkingIndex].dot;i++){
				if(x>=that.writing[that.checkingIndex].area[i].left1&&x<=that.writing[that.checkingIndex].area[i].right1&&y>=that.writing[that.checkingIndex].area[i].top1&&y<=that.writing[that.checkingIndex].area[i].bottom1){
					if(!$($('.dot')[i]).hasClass('hover')){
						$('#Success')[0].play();
						$($('.dot')[i]).addClass('hover');
						dotNum--;
						that.dotNum=dotNum;
						if(dotNum==0){
							that.dotNum=0;
							$('#'+that.className)[0].play();
							that.endAudio($('#'+that.className)[0]);
						}
					}
				}
			}
		},
		seesawEnd(e){
			var that=this,idx=$(e.currentTarget).data('idx');
			var endX=e.changedTouches[0].pageX,endY=e.changedTouches[0].pageY;
			//that.practicinghd[idx].endX=that.practicinghd[idx].pageX;
			//that.practicinghd[idx].endY=that.practicinghd[idx].pageY;
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
					$('.lh-page').addClass('Writing');
					setTimeout(function(){
						that.checkingIndex+=1;
						if(that.checkingIndex==1){
							that.className="seesaw"
						}else if(that.checkingIndex==2){
							that.className="swing"
						}else if(that.checkingIndex==3){
							that.className="roundabout"
						}
						$('.lh-page').removeClass('Writing');
						for(var i=0;i<that.writing;i++){
							that.writing.hover="";
						}
						$('.dot').removeClass('hover');
						that.getArea();
						that.writing[that.checkingIndex].hover="on";
					},800)
				}else{
					console.log('end');
					that.endAnimate();
				}
			});
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
			that.learning()
		},
		learning(e){
			var that=this;
			// $('#Slide_sound')[0].play();
			// $('#Slide_sound')[0].addEventListener("ended",function(){
			// 	for(var i=0;i<that.practicinghd.length;i++){
			// 		that.practicinghd[i].isMove=true;
			// 	}
			// })
			that.learningShow="Learning";
		}
	}
}
</script>
