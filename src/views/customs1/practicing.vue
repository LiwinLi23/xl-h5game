<template>
  <div class="lh-box" :class="endOn">
  	<!--loading-->
  	<!--learning-->
	<div class="lh-page lh-learning cover practicing" :class="learningShow" style="background-image:url(style/img/learning/bg.jpg);">
		<div class="lh-return" data-type="return" data-path="/customs1" @click="gotoNext($event)"><img src="style/img/return.png" /></div>
		<ul class="lh-practicing">
			<li :class="item.class" v-for="(item,index) in practicing">
				<div class="icon"><img :src="item.img"></div>
				<div class="text" ref="getWidth"><img :src="item.text"></div>
			</li>
		</ul>
		<div class="lh-practicing-item-hd"></div>
		<ul class="lh-practicing-item">
			<li v-for="(item,index) in practicinghd" :class="item.class" :data-class="item.class" :data-idx="index" @touchstart.prevent.stop="seesawStart($event)" @touchend.prevent.stop="seesawEnd($event)" @touchmove.prevent.stop="item.isMove?seesawMove($event):''" :style="{zIndex:item.zIndex}"><img :src="item.text" /></li>
		</ul>
	</div>
	<div class="lh-learning-audio">
    	<audio id="Slide_sound" src="style/img/learning/sound/ep1-practice-time.mp3"></audio>
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
			learningShow:'',
			checkingIndex:0,
			endOn:'',
			practicing:[
				{img:'style/img/practicing/swing.png',text:'style/img/practicing/swing-text.png?a=1',class:'swing'},
				{img:'style/img/practicing/slide.png',text:'style/img/practicing/slide-text.png?a=1',class:'slide'},
				{img:'style/img/practicing/seesaw.png',text:'style/img/practicing/seesaw-text.png?a=1',class:'seesaw'},
				{img:'style/img/practicing/roundabout.png',text:'style/img/practicing/roundabout-text.png?a=1',class:'roundabout'}
			],
			practicinghd:[
				{text:'style/img/practicing/seesaw-text.png?a=1',class:'seesaw',zIndex:'1'},
				{text:'style/img/practicing/slide-text.png?a=1',class:'slide',zIndex:'1'},
				{text:'style/img/practicing/swing-text.png?a=1',class:'swing',zIndex:'1'},
				{text:'style/img/practicing/roundabout-text.png?a=1',class:'roundabout',zIndex:'1'}
			],
			hdMove:[],
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
			var that=this,practicinghd=that.practicinghd,wWidth=$(window).height(),wHeight=$(window).width();
			setTimeout(function(){
				for(var i=0;i<that.practicing.length;i++){
					var _width=$(that.$refs.getWidth[i]).height(),_height=$(that.$refs.getWidth[i]).width(),
					_left=$(that.$refs.getWidth[i]).offset().left,_top=$(that.$refs.getWidth[i]).offset().top,
					_left1=_left,
					_right1=_left+_width,
					_top1=_top,
					_bottomg1=_top+_height;
					that.practicinghd[i].area={left1:_left1,right1:_right1,top1:_top1,bottom1:_bottomg1};
				}
			},300);
		},
		seesawStart(e){
			var that=this,idx=$(e.currentTarget).data('idx'),practicing=that.practicing;
			var startX=e.changedTouches[0].pageX,startY=e.changedTouches[0].pageY;
			//起始位置
			that.practicinghd[idx].start={x:startX,y:startY};
		},
		seesawMove(e){
			var that=this,idx=$(e.currentTarget).data('idx'),className=$(e.currentTarget).data('class');
			var _this=$(e.currentTarget),width=_this.width(),height=_this.height(),wWidth=$(window).height(),wHeight=$(window).width(),practicinghd=that.practicinghd;
			for(var i=0;i<practicinghd.length;i++){
				practicinghd[i].zIndex="1";
			}
			practicinghd[idx].zIndex="2";
			that.practicinghd=practicinghd;
			var y=e.changedTouches[0].pageY-that.practicinghd[idx].start.y;
			var x=e.changedTouches[0].pageX-that.practicinghd[idx].start.x;
			if(that.practicinghd[idx].endX){
				x=x+that.practicinghd[idx].endX;
			}
			if(that.practicinghd[idx].endY){
				y=y+that.practicinghd[idx].endY;
			}
			that.practicinghd[idx].pageY=y;
			that.practicinghd[idx].pageX=x;
			for(var i=0;i<practicinghd.length;i++){
				if(className==that.practicing[i].class){
					if($(_this).offset().left+$(_this).height()>=that.practicinghd[i].area.left1&&$(_this).offset().left<=that.practicinghd[i].area.right1&&$(_this).offset().top+$(_this).width()>=that.practicinghd[i].area.top1&&$(_this).offset().top<=that.practicinghd[i].area.bottom1){
						//进入对应目标
						console.log('进入对应目标');
						that.moveAni.kill();
						for(var j=0;j<that.practicinghd.length;j++){
							that.practicinghd[j].isMove=false;
						}
						if(!that.hdMove.includes(idx)){
							that.hdMove.push(idx);
						}
						TweenMax.to(_this,.1,{x:0,y:0,left:that.practicinghd[i].area.top1+'px',top:that.practicinghd[i].area.left1+$(_this).height()/10+'px',ease:Quad.easeOut,onComplete(){
							$('#Fail')[0].play();
							$('#'+className)[0].play();
							$('#'+className)[0].addEventListener("ended",function(){
								for(var z=0;z<that.practicinghd.length;z++){
									if(!that.hdMove.includes(z)){
										that.practicinghd[z].isMove=true;
									}
								}
								that.practicinghd[idx].isMove=false;
								if(that.hdMove.length>=4){
									that.endAudio();
								}
							})
						}});
					}else{
						that.moveAni=TweenMax.to(_this, 0,{x:y,y:-x,position:'fixed',ease:Quad.easeOut,onComplete(){}});
					}
				}
			}
		},
		seesawEnd(e){
			var that=this,idx=$(e.currentTarget).data('idx');
			var endX=e.changedTouches[0].pageX,endY=e.changedTouches[0].pageY;
			//if(that.practicinghd[idx].isMove){
			that.practicinghd[idx].endX=that.practicinghd[idx].pageX;
			that.practicinghd[idx].endY=that.practicinghd[idx].pageY;
			//that.practicinghd[idx].isMove=false;
			//}
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
			var that=this;
			that.endAnimate();
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
			$('#Slide_sound')[0].play();
			$('#Slide_sound')[0].addEventListener("ended",function(){
				for(var i=0;i<that.practicinghd.length;i++){
					that.practicinghd[i].isMove=true;
				}
			})
		}
	}
}
</script>
