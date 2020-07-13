<template>
  <div class="lh-box" :class="endOn">
  	<!--loading-->
  	<!--learning-->
	<div class="lh-page lh-learning cover" :class="learningShow" style="background-image:url(style/img/learning/bg.jpg);">
		<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
		<div class="lh-checking-bd">
			<div class="bd" ref="getWidth" :class="checking[checkingIndex].class"><img :src="checking[checkingIndex].bd" /></div>
			<div class="hd">
				<div class="bg"><img src="style/img/checking/checking-text-bg.png" /></div>
				<div class="text"><img :src="checking[checkingIndex].text" /></div>
			</div>
		</div>
		<ul class="lh-checking-item">
			<li :ref="item.class" :class="item.class" :data-idx="index" :data-class="item.class" @touchstart.prevent.stop="seesawStart($event)" @touchend.prevent.stop="seesawEnd($event)" @touchmove.prevent.stop="isMove?seesawMove($event):''" v-for="(item,index) in checking" :style="{zIndex:item.zIndex}">
				<div class="shadow"><img :src="item.shadow" /></div>
				<div class="img"><img :src="item.hd" /></div>
			</li>
		</ul>
	</div>
	<div class="lh-learning-audio">
    	<audio id="Slide_sound" src="style/img/checking/sound/ep1-checking-time.mp3"></audio>
		<audio id="onshow" src="style/img/checking/sound/ep1_CT_1.mp3"></audio>
        <audio id="Success" src="style/img/checking/sound/success.mp3"></audio>
		<audio id="Yes" src="style/img/checking/sound/ep1_CT_2.mp3"></audio>
        <audio id="Fail" src="style/img/checking/sound/fail.mp3"></audio>
        <audio id="slide" src="style/img/learning/sound/slide.mp3"></audio>
        <audio id="swing" src="style/img/learning/sound/swing.mp3"></audio>
        <audio id="seesaw" src="style/img/learning/sound/seesaw.mp3"></audio>
        <audio id="roundabout" src="style/img/learning/sound/roundabout.mp3"></audio>
        <audio id="endAudio" src="style/img/learning/sound/end.mp3"></audio>
		<audio id="good" src="style/img/learning/sound/good-summer.mp3"></audio>
    </div>
    <!--ending-->
	<div class="lh-checking"><div>
		<div class="lh-checking-a1"><img src="style/img/checking/end-a1.png" /></div>
		<div class="lh-checking-a2"><img src="style/img/checking/end-a2.png" /></div>
		<div class="lh-checking-a6 qiqiu"><img src="style/img/checking/end-a6.png" /></div>
		<div class="lh-checking-a5 qiqiu"><img src="style/img/checking/end-a5.png" /></div>
		<div class="lh-checking-a4 qiqiu"><img src="style/img/checking/end-a4.png" /></div>
	</div></div>
  </div>
</template>
<style type="text/css" scoped>

</style>
<script>
export default{
	data(){
		return {
			isMove:false,
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
					shadow:'style/img/checking/checking2-bg.png',hd:'style/img/checking/checking2.png',bd:'style/img/checking/checking2-bd.png?a=1',text:'style/img/checking/checking-text4.png',left:'25.78125',class:'roundabout',zIndex:'1'
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
			var that=this;
			setTimeout(function(){
				var _width=$(that.$refs.getWidth).height(),_height=$(that.$refs.getWidth).width(),
					_left=$(that.$refs.getWidth).offset().left,_top=$(that.$refs.getWidth).offset().top,
					_left1=_left,
					_right1=_left+_width,
					_top1=_top,
					_bottomg1=_top+_height;
					that.area={left1:_left1,right1:_right1,top1:_top1,bottom1:_bottomg1};
			},300);
			$('#onshow')[0].play();
		},
		seesawStart(e){
			var that=this,idx=$(e.currentTarget).data('idx'),practicing=that.practicing;
			var startX=e.changedTouches[0].pageX,startY=e.changedTouches[0].pageY;
			//起始位置
			that.checking[idx].start={x:startX,y:startY};
		},
		seesawEnd(e){
			// console.log(e.path[2].className,e.currentTarget)
			var that=this,idx=$(e.currentTarget).data('idx');
			if (this.isMove===true) {
				$('#Fail')[0].play();
				that.moveAni=TweenMax.to(e.currentTarget, 0,{x:0,y:0,position:'fixed',ease:Quad.easeOut,onComplete(){}});
			}else {
				var endX=e.changedTouches[0].pageX,endY=e.changedTouches[0].pageY;
				//if(that.practicinghd[idx].isMove){
				that.checking[idx].endX=that.checking[idx].pageX;
				that.checking[idx].endY=that.checking[idx].pageY;
				//that.practicinghd[idx].isMove=false;
				//}
			}

		},
		seesawMove(e){
			var that=this,idx=$(e.currentTarget).data('idx'),className=$(e.currentTarget).data('class'),_this=$(e.currentTarget);
			if($('.lh-page').hasClass('Checking')){
				$('.lh-page').removeClass('Checking')
			}
			for(var i=0;i<that.checking.length;i++){
				that.checking[i].zIndex="1";
			}
			that.checking[idx].zIndex="2";
			var y=e.changedTouches[0].pageY-that.checking[idx].start.y;
			var x=e.changedTouches[0].pageX-that.checking[idx].start.x;
			if(that.checking[idx].endX){
				x=x+that.checking[idx].endX;
			}
			if(that.checking[idx].endY){
				y=y+that.checking[idx].endY;
			}
			that.checking[idx].pageY=y;
			that.checking[idx].pageX=x;
			if(idx!=that.checkingIndex){
				TweenMax.to(_this, 0,{x:y,y:-x,position:'fixed',ease:Quad.easeOut,onComplete(){}});

			}else{
				if($(_this).offset().left+$(_this).height()>=that.area.left1&&$(_this).offset().left<=that.area.right1&&$(_this).offset().top+$(_this).width()>=that.area.top1&&$(_this).offset().top<=that.area.bottom1){
					console.log('进入');
					that.moveAni.kill();
					that.isMove=false;
					TweenMax.to(_this,.1,{x:0,y:0,left:that.area.top1+'px',top:$(window).width()-that.area.left1-$(_this).height()+'px',ease:Quad.easeOut,onComplete(){
						$('#Yes')[0].play();
						$('#'+className)[0].play();
						that.endAudio($('#'+that.checking[idx].class)[0]);
					}});
				}else{
					that.moveAni=TweenMax.to(_this, 0,{x:y,y:-x,position:'fixed',ease:Quad.easeOut,onComplete(){}});
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
							 that.getArea();
							 $('.lh-checking-item li').attr('style','');
							 for(var i=0;i<that.checking.length;i++){
							 	that.checking[i].endX=0;
								that.checking[i].endY=0;
							 }
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
			// $('#endAudio')[0].play();
			$('#good')[0].play();
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
			// that.learning()
			that.isMove=true;
		},
		// learning(e){
		// 	var that=this;
		// 	$('#Slide_sound')[0].play();
		// 	$('#Slide_sound')[0].addEventListener("ended",function(){
		//
		// 	})
		// }
	}
}
</script>
<style>
    .lh-checking {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .5);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: cubic-bezier(0.215, .61, .355, 1) .45s;
    }

    .lh-checking > div {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        width: 49.6875%;
        bottom: -8%;
    }

    .lh-checking-a1 {
        width: 100%;
        transform: translateY(100%);
        visibility: hidden;
        transition: cubic-bezier(0.215, .61, .355, 1) .45s;
        position: relative;
        z-index: 2;
    }

    .lh-checking > div > div:not(:first-child) {
        position: absolute;
    }

    .lh-checking-a2 {
        width: 61.433962%;
        left: 0;
        bottom: 40.023201856148494%;
        opacity: 0;
        transition: cubic-bezier(0.215, .61, .355, 1) 1s;
        transform: translate(-30vw, 10vw);
    }

    .lh-checking-a3 {
        width: 21.48846960167715%;
        right: 0;
        bottom: 39.21113689095127%;
        opacity: 0;
        transform: translate(-20vw, -10vw);
    }

    .lh-checking-a4 {
        width: 4.926624737945493%;
        left: 25.681341719077565%;
        bottom: 77.7262180974478%;
        transform: translate(5vw, 30vw);
        opacity: 0;
    }

    .lh-checking-a5 {
        width: 6.918238993710692%;
        left: 27.9874213836478%;
        bottom: 87.70301624129931%;
        transform: translate(5vw, 30vw);
        opacity: 0;
    }

    .lh-checking-a6 {
        width: 5.765199161425576%;
        left: 20.440251572327046%;
        bottom: 93.96751740139212%;
        transform: translate(5vw, 30vw);
        opacity: 0;
    }
    .End .lh-checking{opacity: 1; visibility: visible;}
    .End .lh-checking-a1{transform:translateY(0); visibility: visible;}
    .End .lh-checking-a1 img{ animation: ending1 linear 2s infinite; transform-origin: center 60%;}
    .End .lh-checking-a2{opacity: 1;transform: translate(0,0); transition-delay: 1s;}
    .End .lh-checking-a2 img{ animation: ending2 linear 2s infinite;}
    .End .lh-checking-a3{opacity: 1;transform: translate(0,0); transition-delay: 1s;}
    .End .lh-checking-a3 img{ animation: ending2 linear 2s infinite;}
</style>