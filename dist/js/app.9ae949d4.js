(function(t){function e(e){for(var i,r,l=e[0],c=e[1],o=e[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);g&&g(e);while(u.length)u.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var g=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isRouterAlive?n("router-view"):t._e()],1)},s=[],r={provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}}},l=r,c=n("2877"),o=Object(c["a"])(l,a,s,!1,null,null,null),g=o.exports,d=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box"},[t._m(0),n("img",{staticClass:"lh-home-bg",attrs:{src:"style/img/bg.jpg"}}),n("ul",{staticClass:"lh-home-item"},t._l(t.home,(function(e,i){return n("li",{class:e.on,attrs:{"data-path":e.path,"data-idx":i},on:{click:function(n){e.hover&&t.clickBtn(n)}}},[n("img",{attrs:{src:e.hover?e.icon:"style/img/icon1.png"}})])})),0),t._m(1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-index-loading"},[n("span",{staticClass:"text"}),n("div",{staticStyle:{"background-image":"url(style/img/main/loading-main.png)"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-main-audio"},[n("audio",{attrs:{id:"audioMain",loop:"",src:"style/img/main1-background_MP3.mp3",autoplay:""}}),n("audio",{attrs:{id:"audioMainButton",src:"style/img/main1-button_MP3.mp3"}})])}],h=(n("ac1f"),n("5319"),{data:function(){return{home:[{icon:"style/img/icon2.png",hover:"on",path:"customs1",on:""},{icon:"style/img/icon3.png",path:"customs2",on:""},{icon:"style/img/icon4.png",path:"customs3",on:""},{icon:"style/img/icon5.png",path:"customs4",on:""},{icon:"style/img/icon6.png",path:"customs5",on:""},{icon:"style/img/icon7.png",path:"customs6",on:""},{icon:"style/img/icon8.png",path:"customs7",on:""},{icon:"style/img/icon9.png",path:"customs8",on:""},{icon:"style/img/icon10.png",path:"customs9",on:""},{icon:"style/img/icon11.png",path:"customs10",on:""}]}},created:function(t){var e=[{src:"style/img/main/loading-main.png"},{src:"style/img/main/main.png"},{src:"style/img/main/box2.png?a=1"},{src:"style/img/main/box-text1.png?a=1"},{src:"style/img/main/box-text2.png?a=1"},{src:"style/img/main/box-text3.png?a=1"},{src:"style/img/main/box-text4.png?a=1"},{src:"style/img/main/box-text5.png?a=1"},{src:"style/img/learning/bg.jpg"},{src:"style/img/learning/a1.png?a=1"},{src:"style/img/learning/a2.png?a=1"},{src:"style/img/learning/a3.png?a=1"},{src:"style/img/learning/a4.png?a=1"},{src:"style/img/learning/slide.png?a=1"}],n={startPreload:function(){var t=new createjs.LoadQueue(!1);t.addEventListener("progress",this.handleFileProgress),t.installPlugin(createjs.SOUND),t.addEventListener("complete",this.loadComplete),t.setMaxConnections(1),t.loadManifest(e)},handleFileProgress:function(t){},loadComplete:function(){setTimeout((function(){$(".lh-index-loading>div").css({"animation-play-state":"paused"}),TweenMax.to($(".lh-index-loading"),.4,{opacity:0,visibility:"hidden",ease:Power0.easeIn,onComplete:function(t){sessionStorage.setItem("customsLoading1","111")}})}),1e3)}};n.startPreload()},mounted:function(t){var e=sessionStorage.getItem("customsLoading1");e&&$(".lh-index-loading").css({display:"none"}),$("#audioMain")[0].load(),$("#audioMainButton")[0].load(),$("#audioMain")[0].play(),wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready((function(){$("#audioMain")[0].play()}))},methods:{gotoNext:function(t){var e=$(t.currentTarget).data("path");this.$router.replace(e)},clickBtn:function(t){for(var e=this,n=$(t.currentTarget).data("path"),i=($(t.currentTarget).data("type"),$(t.currentTarget).data("idx")),a=e.home,s=0;s<a.length;s++)a[s].on="";e.btnShow(i),setTimeout((function(){e.$router.replace({path:n})}),460)},btnShow:function(t){$("#audioMainButton")[0].play(),$("#audioMain")[0].pause(),this.home[t].on="hover"}}}),m=h,f=Object(c["a"])(m,u,p,!1,null,null,null),y=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box"},[n("div",{staticClass:"lh-page lh-page1 cover",staticStyle:{"background-image":"url(style/img/main/main.png)"}},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("ul",{staticClass:"lh-main-item l-grid-3"},t._l(t.btn,(function(e,i){return n("li",{class:e.hover,attrs:{"data-idx":i,"data-path":e.path,"data-type":e.type},on:{click:function(e){return t.clickBtn(e)}}},[t._m(0,!0),n("div",{staticClass:"img1"},[n("img",{attrs:{src:e.icon}})]),n("div",{staticClass:"text"},[n("img",{attrs:{src:e.text}})])])})),0),t._m(1),t._m(2)]),n("div",{staticClass:"lh-video",class:t.videoOn},[n("a",{staticClass:"lh-video-return",attrs:{href:"javascript:;"},on:{click:function(e){return t.closeVideo(e)}}},[n("i",{staticClass:"iconfont iconfont icon-xiangzuo"})]),n("video",{attrs:{src:"style/img/video/video_x264.mp4",controls:"",playsinline:"true","webkit-playsinline":"true",controlslist:"nofullscreen nodownload"}})])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:"style/img/main/box1.png?a=1"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-start"},[n("img",{attrs:{src:"style/img/main/start.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-main-audio"},[n("audio",{attrs:{id:"audioMain",loop:"",src:"style/img/main/sound/main_music.mp3"}}),n("audio",{attrs:{id:"audioMainButton",src:"style/img/main/sound/main_button.mp3"}})])}],w={data:function(){return{videoOn:"",btn:[{icon:"style/img/main/04.png?a=1",text:"style/img/main/box-text1.png?a=1",path:"",type:"layer",hover:""},{icon:"style/img/main/02.png?a=1",text:"style/img/main/box-text2.png?a=1",path:"/slide",type:"",hover:""},{icon:"style/img/main/01.png?a=1",text:"style/img/main/box-text3.png?a=1",path:"/checking",type:"",hover:""},{icon:"style/img/main/03.png?a=1",text:"style/img/main/box-text4.png?a=1",path:"/practicing",type:"",hover:""},{icon:"style/img/main/05.png?a=1",text:"style/img/main/box-text5.png?a=1",path:"/writing",type:"",hover:""}]}},created:function(t){var e=[{src:"style/img/main/main.png"},{src:"style/img/main/box2.png"},{src:"style/img/main/box-text1.png"},{src:"style/img/main/box-text2.png"},{src:"style/img/main/box-text3.png"},{src:"style/img/main/box-text4.png"},{src:"style/img/main/box-text5.png"},{src:"style/img/learning/bg.jpg"},{src:"style/img/learning/a1.png"},{src:"style/img/learning/a2.png"},{src:"style/img/learning/a3.png"},{src:"style/img/learning/a4.png"},{src:"style/img/learning/slide.png"}],n={startPreload:function(){var t=new createjs.LoadQueue(!1);t.addEventListener("progress",this.handleFileProgress),t.installPlugin(createjs.SOUND),t.addEventListener("complete",this.loadComplete),t.setMaxConnections(1),t.loadManifest(e)},handleFileProgress:function(t){},loadComplete:function(){setTimeout((function(){$(".lh-index-loading>div").css({"animation-play-state":"paused"}),TweenMax.to($(".lh-index-loading"),.4,{opacity:0,visibility:"hidden",ease:Power0.easeIn,onComplete:function(t){sessionStorage.setItem("customsLoading1","111")}})}),1e3)}};n.startPreload()},mounted:function(t){$("#audioMain")[0].play()},methods:{gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path");e.$router.replace({path:n})},clickBtn:function(t){for(var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type"),a=$(t.currentTarget).data("idx"),s=e.btn,r=0;r<s.length;r++)s[r].hover="";e.btnShow(a),setTimeout((function(){"layer"==i?(e.videoOn="on",$(".lh-video video")[0].play(),e.endVideo(a,$(".lh-video video")[0])):e.$router.replace({path:n})}),460)},btnShow:function(t){$("#audioMainButton")[0].play(),$("#audioMain")[0].pause(),this.btn[t].hover="hover"},closeVideo:function(t){this.videoOn="",$(".lh-video video")[0].pause(),$("#audioMain")[0].play()},endVideo:function(t,e){var n=this;e.addEventListener("ended",(function(){n.btn[t].hover="",n.videoOn="",$("#audioMain")[0].play()}))}}},_=w,b=Object(c["a"])(_,v,x,!1,null,"dd96869c",null),k=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box"},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/customs1"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("div",{staticClass:"lh-learning-loading",class:t.loadingHide,style:"background-image:url(style/img/learning/loading/"+t.loadingImg+".png)"}),n("div",{staticClass:"lh-page lh-learning cover",class:t.learningShow,staticStyle:{"background-image":"url(style/img/learning/bg.jpg)"}},[n("div",{staticClass:"lh-learning-loading"}),n("div",{staticClass:"lh-learning-slide",attrs:{"data-path":"seesaw","data-type":"slide"},on:{click:function(e){return t.gotoNext(e)}}},[t._m(0),t._m(1),t._m(2),t._m(3)]),t._m(4),t._m(5)])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"learning-slide-a1"},[n("img",{attrs:{src:"style/img/learning/a1.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"learning-slide-a2"},[n("img",{attrs:{src:"style/img/learning/a2.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"learning-slide-a3"},[n("img",{attrs:{src:"style/img/learning/a3.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"learning-slide-a4"},[n("img",{attrs:{src:"style/img/learning/a4.png?a=2"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-text"},[n("img",{attrs:{src:"style/img/learning/slide.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-audio"},[n("audio",{attrs:{id:"Slide_sound",src:"style/img/learning/sound/slide_sound.mp3"}}),n("audio",{attrs:{id:"Slide",src:"style/img/learning/sound/slide.mp3"}}),n("audio",{attrs:{id:"twinkle",src:"style/img/learning/sound/ep1_LT_1.mp3"}})])}],T=(n("d3b7"),n("ddb0"),{data:function(){return{learningShow:"",loadingImg:0,loadingHide:"",values:{w1:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}],w2:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}]}}},created:function(t){},mounted:function(t){var e=this;e.loading();var n=[{src:"style/img/learning/seesaw-icon1.png"},{src:"style/img/learning/seesaw-icon2.png"},{src:"style/img/learning/seesaw-icon3.png"},{src:"style/img/learning/seesaw.png"},{src:"style/img/learning/sound/seesaw_sound.mp3"},{src:"style/img/learning/sound/seesaw.mp3"}],i={startPreload:function(){var t=new createjs.LoadQueue(!1);t.addEventListener("progress",this.handleFileProgress),t.installPlugin(createjs.SOUND),t.addEventListener("complete",this.loadComplete),t.setMaxConnections(1),t.loadManifest(n)},handleFileProgress:function(t){},loadComplete:function(){}};i.startPreload()},methods:{gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type");setTimeout((function(){clearInterval(e.setIntervalplay)}),1100),"return"===i?(e.learningShow="",e.$router.replace({path:n})):"slide"===i&&($("#Slide")[0].play(),e.endAudio(n,$("#Slide")[0]))},endAudio:function(t,e){var n=this;e.addEventListener("ended",(function(){clearInterval(n.setIntervalplay),n.$router.replace({path:t})}))},loading:function(t){var e=this;e.loadingImg;$("#twinkle")[0].pause(),$(".lh-learning-loading").hide(),e.learning()},learning:function(t){var e=this;$("#Slide_sound")[0].play(),e.learningSlide=TweenMax.to($(".learning-slide-a2"),1,{bezier:{type:"quadratic",values:e.values.w1,autoRotate:!1},onComplete:function(t){console.log("动画完成"),e.setIntervalplay=setInterval((function(){$("#twinkle")[0].play()}),1e3),e.learningShow="Learning"}})}}}),E=T,I=Object(c["a"])(E,C,S,!1,null,"05be571d",null),M=I.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box"},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/customs1"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("div",{staticClass:"lh-page lh-learning cover",class:t.learningShow,staticStyle:{"background-image":"url(style/img/learning/bg.jpg)"}},[n("div",{staticClass:"lh-seesaw",attrs:{"data-path":"swing","data-type":"slide"},on:{click:function(e){return t.gotoNext(e)}}},[t._m(0),t._m(1),t._m(2)]),t._m(3),t._m(4)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-seesaw-a"},[n("img",{attrs:{src:"style/img/learning/seesaw-icon2.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-seesaw-b"},[n("img",{attrs:{src:"style/img/learning/seesaw-icon3.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-seesaw-c"},[n("img",{attrs:{src:"style/img/learning/seesaw-icon1.png?a=1"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-text"},[n("img",{attrs:{src:"style/img/learning/seesaw.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-audio"},[n("audio",{attrs:{id:"Slide_sound",src:"style/img/learning/sound/seesaw_sound.mp3"}}),n("audio",{attrs:{id:"Slide",src:"style/img/learning/sound/seesaw.mp3"}}),n("audio",{attrs:{id:"twinkle",src:"style/img/learning/sound/ep1_LT_1.mp3"}})])}],P={data:function(){return{learningShow:"",loadingImg:0,loadingHide:"",values:{w1:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}],w2:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}]}}},created:function(t){},mounted:function(t){var e=this;e.loading();var n=[{src:"style/img/learning/swing-a1.png"},{src:"style/img/learning/swing-a2.png"},{src:"style/img/learning/swing-a3.png"},{src:"style/img/learning/swing-a4.png"},{src:"style/img/learning/swing.png"},{src:"style/img/learning/sound/swing_sound.mp3"},{src:"style/img/learning/sound/swing.mp3"}],i={startPreload:function(){var t=new createjs.LoadQueue(!1);t.addEventListener("progress",this.handleFileProgress),t.installPlugin(createjs.SOUND),t.addEventListener("complete",this.loadComplete),t.setMaxConnections(1),t.loadManifest(n)},handleFileProgress:function(t){},loadComplete:function(){}};i.startPreload()},methods:{gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type");setTimeout((function(){clearInterval(e.setIntervalplay)}),3100),"return"===i?(e.learningShow="",e.$router.replace({path:n})):"slide"===i&&($("#Slide")[0].play(),e.endAudio(n,$("#Slide")[0]))},endAudio:function(t,e){var n=this;e.addEventListener("ended",(function(){clearInterval(n.setIntervalplay),n.$router.replace({path:t})}))},loading:function(t){var e=this;e.loadingImg;$("#twinkle")[0].pause(),e.learning()},learning:function(t){var e=this;$("#Slide_sound")[0].play(),setTimeout((function(){e.learningShow="Learning"}),1e3),setTimeout((function(){e.setIntervalplay=setInterval((function(){$("#twinkle")[0].play()}),1e3)}),2e3)}}},j=P,L=Object(c["a"])(j,A,O,!1,null,"7a7e3345",null),q=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box"},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/customs1"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("div",{staticClass:"lh-page lh-learning cover",class:t.learningShow,staticStyle:{"background-image":"url(style/img/learning/bg.jpg)"}},[n("div",{staticClass:"lh-seesaw swing",attrs:{"data-path":"roundabout","data-type":"roundabout"},on:{click:function(e){return t.gotoNext(e)}}},[t._m(0),t._m(1),t._m(2),t._m(3)]),t._m(4),t._m(5)])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-swing-a"},[n("img",{attrs:{src:"style/img/learning/swing-a2.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-swing-b"},[n("img",{attrs:{src:"style/img/learning/swing-a3.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-swing-c"},[n("img",{attrs:{src:"style/img/learning/swing-a4.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-swing-d"},[n("img",{attrs:{src:"style/img/learning/swing-a1.png?a=1"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-text"},[n("img",{attrs:{src:"style/img/learning/swing.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-audio"},[n("audio",{attrs:{id:"Slide_sound",src:"style/img/learning/sound/swing_sound.mp3"}}),n("audio",{attrs:{id:"Slide",src:"style/img/learning/sound/swing.mp3"}}),n("audio",{attrs:{id:"twinkle",src:"style/img/learning/sound/ep1_LT_1.mp3"}})])}],X={data:function(){return{learningShow:"",loadingImg:0,loadingHide:"",values:{w1:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}],w2:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}]}}},created:function(t){},mounted:function(t){var e=this;e.loading();var n=[{src:"style/img/learning/roundabout-icon.png"},{src:"style/img/learning/roundabout-a1.png"},{src:"style/img/learning/roundabout.png"},{src:"style/img/learning/sound/roundabout_sound.mp3"},{src:"style/img/learning/sound/roundabout.mp3"}],i={startPreload:function(){var t=new createjs.LoadQueue(!1);t.addEventListener("progress",this.handleFileProgress),t.installPlugin(createjs.SOUND),t.addEventListener("complete",this.loadComplete),t.setMaxConnections(1),t.loadManifest(n)},handleFileProgress:function(t){},loadComplete:function(){}};i.startPreload()},methods:{gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type");setTimeout((function(){clearInterval(e.setIntervalplay)}),4100),"return"===i?(e.learningShow="",e.$router.replace({path:n})):($("#Slide")[0].play(),e.endAudio(n,$("#Slide")[0]))},endAudio:function(t,e){var n=this;e.addEventListener("ended",(function(){clearInterval(n.setIntervalplay),n.$router.replace({path:t})}))},loading:function(t){var e=this;e.loadingImg;$("#twinkle")[0].pause(),e.learning()},learning:function(t){var e=this;$("#Slide_sound")[0].play(),setTimeout((function(){e.learningShow="Learning"}),2e3),setTimeout((function(){e.setIntervalplay=setInterval((function(){$("#twinkle")[0].play()}),1e3)}),3e3)}}},Y=X,F=Object(c["a"])(Y,N,z,!1,null,"0f833612",null),W=F.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box",class:t.endOn},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/customs1"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("div",{staticClass:"lh-page lh-learning cover",class:t.learningShow,staticStyle:{"background-image":"url(style/img/learning/bg.jpg)"}},[n("div",{staticClass:"lh-seesaw roundabout",attrs:{"data-path":"/","data-type":"end"},on:{click:function(e){return t.gotoNext(e)}}},[n("div",{staticClass:"lh-roundabout-a",staticStyle:{"background-image":"url(style/img/learning/roundabout-icon.png)"}}),t._m(0)]),t._m(1),t._m(2)]),t._m(3)])},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-roundabout-c"},[n("img",{attrs:{src:"style/img/learning/roundabout-a1.png?a=1"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-text"},[n("img",{attrs:{src:"style/img/learning/roundabout.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-audio"},[n("audio",{attrs:{id:"Slide_sound",src:"style/img/learning/sound/roundabout_sound.mp3"}}),n("audio",{attrs:{id:"Slide",src:"style/img/learning/sound/roundabout.mp3"}}),n("audio",{attrs:{id:"endAudio",src:"style/img/learning/sound/end.mp3"}}),n("audio",{attrs:{id:"twinkle",src:"style/img/learning/sound/ep1_LT_1.mp3"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-ending"},[n("div",[n("div",{staticClass:"lh-ending-a1"},[n("img",{attrs:{src:"style/img/learning/end-a1.png"}})]),n("div",{staticClass:"lh-ending-a2"},[n("img",{attrs:{src:"style/img/learning/end-a2.png"}})]),n("div",{staticClass:"lh-ending-a3"},[n("img",{attrs:{src:"style/img/learning/end-a3.png"}})]),n("div",{staticClass:"lh-ending-a6 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a6.png"}})]),n("div",{staticClass:"lh-ending-a5 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a5.png"}})]),n("div",{staticClass:"lh-ending-a4 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a4.png"}})])])])}],B={data:function(){return{learningShow:"",loadingImg:0,loadingHide:"",endOn:"",values:{w1:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}],w2:[{x:0,y:0},{x:-100,y:142},{x:-149,y:134}]}}},created:function(t){},mounted:function(t){var e=this;e.loading()},methods:{gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type");setTimeout((function(){clearInterval(e.setIntervalplay)}),1600),"return"===i?(e.learningShow="",e.$router.replace({path:n})):"end"===i?($("#Slide")[0].play(),e.endAnimate(n,$("#Slide")[0])):($("#Slide")[0].play(),e.endAudio(n,$("#Slide")[0]))},endAnimate:function(t,e){var n=this;e.addEventListener("ended",(function(){n.endOn="End",$("#endAudio")[0].play(),clearInterval(n.setIntervalplay),n.qiqiuAnimate()}))},qiqiuAnimate:function(t){var e=this,n=!0;setTimeout((function(){TweenMax.staggerTo($(".qiqiu"),1,{bezier:{type:"cubic",values:[{x:30,y:150,opacity:0},{x:-20,y:50,opacity:1},{x:0,y:10,opacity:1},{x:0,y:-10,opacity:0}],autoRotate:!0},onComplete:function(t){n?(this.restart(!0,!1),n=!1):e.$router.replace({path:"/customs1"})}},.5)}),1e3)},endAudio:function(t,e){var n=this;e.addEventListener("ended",(function(){n.$router.replace({path:t})}))},loading:function(t){var e=this;e.loadingImg;$("#twinkle")[0].pause(),e.learning()},learning:function(t){var e=this;$("#Slide_sound")[0].play(),setTimeout((function(){e.learningShow="Learning"}),1e3),$("#twinkle")[0]&&setTimeout((function(){e.setIntervalplay=setInterval((function(){$("#twinkle")[0].play()}),1e3)}),500)}}},R=B,H=Object(c["a"])(R,D,Q,!1,null,"353de64d",null),U=H.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box",class:t.endOn},[n("div",{staticClass:"lh-page lh-learning cover",class:t.learningShow,staticStyle:{"background-image":"url(style/img/learning/bg.jpg)"}},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/customs1"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("div",{staticClass:"lh-checking-bd"},[n("div",{ref:"getWidth",staticClass:"bd",class:t.checking[t.checkingIndex].class},[n("img",{attrs:{src:t.checking[t.checkingIndex].bd}})]),n("div",{staticClass:"hd"},[t._m(0),n("div",{staticClass:"text"},[n("img",{attrs:{src:t.checking[t.checkingIndex].text}})])])]),n("ul",{staticClass:"lh-checking-item"},t._l(t.checking,(function(e,i){return n("li",{class:e.class,style:{zIndex:e.zIndex},attrs:{"data-idx":i,"data-class":e.class},on:{touchstart:function(e){return e.preventDefault(),e.stopPropagation(),t.seesawStart(e)},touchend:function(e){return e.preventDefault(),e.stopPropagation(),t.seesawEnd(e)},touchmove:function(e){e.preventDefault(),e.stopPropagation(),t.isMove&&t.seesawMove(e)}}},[n("div",{staticClass:"shadow"},[n("img",{attrs:{src:e.shadow}})]),n("div",{staticClass:"img"},[n("img",{attrs:{src:e.hd}})])])})),0)]),t._m(1),t._m(2)])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("img",{attrs:{src:"style/img/checking/checking-text-bg.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-audio"},[n("audio",{attrs:{id:"Slide_sound",src:"style/img/checking/sound/ep1-checking-time.mp3"}}),n("audio",{attrs:{id:"Success",src:"style/img/checking/sound/success.mp3"}}),n("audio",{attrs:{id:"Fail",src:"style/img/checking/sound/fail.mp3"}}),n("audio",{attrs:{id:"slide",src:"style/img/learning/sound/slide.mp3"}}),n("audio",{attrs:{id:"swing",src:"style/img/learning/sound/swing.mp3"}}),n("audio",{attrs:{id:"seesaw",src:"style/img/learning/sound/seesaw.mp3"}}),n("audio",{attrs:{id:"roundabout",src:"style/img/learning/sound/roundabout.mp3"}}),n("audio",{attrs:{id:"endAudio",src:"style/img/learning/sound/end.mp3"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-ending"},[n("div",[n("div",{staticClass:"lh-ending-a1"},[n("img",{attrs:{src:"style/img/learning/end-a1.png"}})]),n("div",{staticClass:"lh-ending-a2"},[n("img",{attrs:{src:"style/img/learning/end-a2.png"}})]),n("div",{staticClass:"lh-ending-a3"},[n("img",{attrs:{src:"style/img/learning/end-a3.png"}})]),n("div",{staticClass:"lh-ending-a6 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a6.png"}})]),n("div",{staticClass:"lh-ending-a5 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a5.png"}})]),n("div",{staticClass:"lh-ending-a4 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a4.png"}})])])])}],G={data:function(){return{isMove:!1,learningShow:"",checkingIndex:0,endOn:"",checking:[{shadow:"style/img/checking/checking4-bg.png",hd:"style/img/checking/checking4.png",bd:"style/img/checking/checking4-bd.png",text:"style/img/checking/checking-text1.png",left:"74.84375",class:"slide",zIndex:"1"},{shadow:"style/img/checking/checking1-bg.png",hd:"style/img/checking/checking1.png",bd:"style/img/checking/checking1-bd.png",text:"style/img/checking/checking-text2.png",left:"3.125",class:"seesaw",zIndex:"1"},{shadow:"style/img/checking/checking3-bg.png",hd:"style/img/checking/checking3.png",bd:"style/img/checking/checking3-bd.png",text:"style/img/checking/checking-text3.png",left:"48.95833333333333",class:"swing",zIndex:"1"},{shadow:"style/img/checking/checking2-bg.png",hd:"style/img/checking/checking2.png",bd:"style/img/checking/checking2-bd.png?a=1",text:"style/img/checking/checking-text4.png",left:"25.78125",class:"roundabout",zIndex:"1"}],area:{},areaWidth:0,areaHeight:0}},created:function(t){},mounted:function(t){var e=this;e.loading(),e.getArea()},methods:{getArea:function(t){var e=this;setTimeout((function(){var t=$(e.$refs.getWidth).height(),n=$(e.$refs.getWidth).width(),i=$(e.$refs.getWidth).offset().left,a=$(e.$refs.getWidth).offset().top,s=i,r=i+t,l=a,c=a+n;e.area={left1:s,right1:r,top1:l,bottom1:c}}),300)},seesawStart:function(t){var e=this,n=$(t.currentTarget).data("idx"),i=(e.practicing,t.changedTouches[0].pageX),a=t.changedTouches[0].pageY;e.checking[n].start={x:i,y:a}},seesawEnd:function(t){var e=this,n=$(t.currentTarget).data("idx");t.changedTouches[0].pageX,t.changedTouches[0].pageY;e.checking[n].endX=e.checking[n].pageX,e.checking[n].endY=e.checking[n].pageY},seesawMove:function(t){var e=this,n=$(t.currentTarget).data("idx"),i=$(t.currentTarget).data("class"),a=$(t.currentTarget);$(".lh-page").hasClass("Checking")&&$(".lh-page").removeClass("Checking");for(var s=0;s<e.checking.length;s++)e.checking[s].zIndex="1";e.checking[n].zIndex="2";var r=t.changedTouches[0].pageY-e.checking[n].start.y,l=t.changedTouches[0].pageX-e.checking[n].start.x;e.checking[n].endX&&(l+=e.checking[n].endX),e.checking[n].endY&&(r+=e.checking[n].endY),e.checking[n].pageY=r,e.checking[n].pageX=l,n!=e.checkingIndex?TweenMax.to(a,0,{x:r,y:-l,position:"fixed",ease:Quad.easeOut,onComplete:function(){}}):$(a).offset().left+$(a).height()>=e.area.left1&&$(a).offset().left<=e.area.right1&&$(a).offset().top+$(a).width()>=e.area.top1&&$(a).offset().top<=e.area.bottom1?(console.log("进入"),e.moveAni.kill(),e.isMove=!1,TweenMax.to(a,.1,{x:0,y:0,left:e.area.top1+"px",top:$(window).width()-e.area.left1-$(a).height()+"px",ease:Quad.easeOut,onComplete:function(){$("#Fail")[0].play(),$("#"+i)[0].play(),e.endAudio($("#"+e.checking[n].class)[0])}})):e.moveAni=TweenMax.to(a,0,{x:r,y:-l,position:"fixed",ease:Quad.easeOut,onComplete:function(){}})},gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type");"return"===i?(e.learningShow="",e.$router.replace({path:n})):"slide"===i&&($("#Slide")[0].play(),e.endAudio(n,$("#Slide")[0]))},endAudio:function(t){var e=this,n=e.checkingIndex;t.addEventListener("ended",(function(){n<3?($(".lh-page").addClass("Checking"),setTimeout((function(){n+=1,e.checkingIndex=n,e.getArea(),$(".lh-checking-item li").attr("style","");for(var t=0;t<e.checking.length;t++)e.checking[t].endX=0,e.checking[t].endY=0;e.isMove=!0}),500)):e.endAnimate()}))},endAnimate:function(){var t=this;t.endOn="End",$("#endAudio")[0].play(),t.qiqiuAnimate()},qiqiuAnimate:function(t){var e=this,n=!0;setTimeout((function(){TweenMax.staggerTo($(".qiqiu"),1,{bezier:{type:"cubic",values:[{x:30,y:150,opacity:0},{x:-20,y:50,opacity:1},{x:0,y:10,opacity:1},{x:0,y:-10,opacity:0}],autoRotate:!0},onComplete:function(t){n?(this.restart(!0,!1),n=!1):e.$router.replace({path:"/customs1"})}},.5)}),1e3)},loading:function(t){var e=this;e.loadingImg;$(".lh-learning-loading").hide(),e.learning()},learning:function(t){var e=this;$("#Slide_sound")[0].play(),$("#Slide_sound")[0].addEventListener("ended",(function(){e.isMove=!0}))}}},K=G,Z=Object(c["a"])(K,V,J,!1,null,"22dec86c",null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-box",class:t.endOn},[n("div",{staticClass:"lh-page lh-learning cover practicing",class:t.learningShow,staticStyle:{"background-image":"url(style/img/learning/bg.jpg)"}},[n("div",{staticClass:"lh-return",attrs:{"data-type":"return","data-path":"/customs1"},on:{click:function(e){return t.gotoNext(e)}}},[n("img",{attrs:{src:"style/img/return.png"}})]),n("ul",{staticClass:"lh-practicing"},t._l(t.practicing,(function(t,e){return n("li",{class:t.class},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.img}})]),n("div",{ref:"getWidth",refInFor:!0,staticClass:"text"},[n("img",{attrs:{src:t.text}})])])})),0),n("div",{staticClass:"lh-practicing-item-hd"}),n("ul",{staticClass:"lh-practicing-item"},t._l(t.practicinghd,(function(e,i){return n("li",{class:e.class,style:{zIndex:e.zIndex},attrs:{"data-class":e.class,"data-idx":i},on:{touchstart:function(e){return e.preventDefault(),e.stopPropagation(),t.seesawStart(e)},touchend:function(e){return e.preventDefault(),e.stopPropagation(),t.seesawEnd(e)},touchmove:function(n){n.preventDefault(),n.stopPropagation(),e.isMove&&t.seesawMove(n)}}},[n("img",{attrs:{src:e.text}})])})),0)]),t._m(0),t._m(1)])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-learning-audio"},[n("audio",{attrs:{id:"Slide_sound",src:"style/img/learning/sound/ep1-practice-time.mp3"}}),n("audio",{attrs:{id:"Success",src:"style/img/checking/sound/success.mp3"}}),n("audio",{attrs:{id:"Fail",src:"style/img/checking/sound/fail.mp3"}}),n("audio",{attrs:{id:"slide",src:"style/img/learning/sound/slide.mp3"}}),n("audio",{attrs:{id:"swing",src:"style/img/learning/sound/swing.mp3"}}),n("audio",{attrs:{id:"seesaw",src:"style/img/learning/sound/seesaw.mp3"}}),n("audio",{attrs:{id:"roundabout",src:"style/img/learning/sound/roundabout.mp3"}}),n("audio",{attrs:{id:"endAudio",src:"style/img/learning/sound/end.mp3"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lh-ending"},[n("div",[n("div",{staticClass:"lh-ending-a1"},[n("img",{attrs:{src:"style/img/learning/end-a1.png"}})]),n("div",{staticClass:"lh-ending-a2"},[n("img",{attrs:{src:"style/img/learning/end-a2.png"}})]),n("div",{staticClass:"lh-ending-a3"},[n("img",{attrs:{src:"style/img/learning/end-a3.png"}})]),n("div",{staticClass:"lh-ending-a6 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a6.png"}})]),n("div",{staticClass:"lh-ending-a5 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a5.png"}})]),n("div",{staticClass:"lh-ending-a4 qiqiu"},[n("img",{attrs:{src:"style/img/learning/end-a4.png"}})])])])}],it=(n("caad"),n("2532"),{data:function(){return{learningShow:"",checkingIndex:0,endOn:"",practicing:[{img:"style/img/practicing/swing.png",text:"style/img/practicing/swing-text.png?a=1",class:"swing"},{img:"style/img/practicing/slide.png",text:"style/img/practicing/slide-text.png?a=1",class:"slide"},{img:"style/img/practicing/seesaw.png",text:"style/img/practicing/seesaw-text.png?a=1",class:"seesaw"},{img:"style/img/practicing/roundabout.png",text:"style/img/practicing/roundabout-text.png?a=1",class:"roundabout"}],practicinghd:[{text:"style/img/practicing/seesaw-text.png?a=1",class:"seesaw",zIndex:"1"},{text:"style/img/practicing/slide-text.png?a=1",class:"slide",zIndex:"1"},{text:"style/img/practicing/swing-text.png?a=1",class:"swing",zIndex:"1"},{text:"style/img/practicing/roundabout-text.png?a=1",class:"roundabout",zIndex:"1"}],hdMove:[],area:{},areaWidth:0,areaHeight:0}},created:function(t){},mounted:function(t){var e=this;e.loading(),e.getArea()},methods:{getArea:function(t){var e=this;e.practicinghd,$(window).height(),$(window).width();setTimeout((function(){for(var t=0;t<e.practicing.length;t++){var n=$(e.$refs.getWidth[t]).height(),i=$(e.$refs.getWidth[t]).width(),a=$(e.$refs.getWidth[t]).offset().left,s=$(e.$refs.getWidth[t]).offset().top,r=a,l=a+n,c=s,o=s+i;e.practicinghd[t].area={left1:r,right1:l,top1:c,bottom1:o}}}),300)},seesawStart:function(t){var e=this,n=$(t.currentTarget).data("idx"),i=(e.practicing,t.changedTouches[0].pageX),a=t.changedTouches[0].pageY;e.practicinghd[n].start={x:i,y:a}},seesawMove:function(t){for(var e=this,n=$(t.currentTarget).data("idx"),i=$(t.currentTarget).data("class"),a=$(t.currentTarget),s=(a.width(),a.height(),$(window).height(),$(window).width(),e.practicinghd),r=0;r<s.length;r++)s[r].zIndex="1";s[n].zIndex="2",e.practicinghd=s;var l=t.changedTouches[0].pageY-e.practicinghd[n].start.y,c=t.changedTouches[0].pageX-e.practicinghd[n].start.x;e.practicinghd[n].endX&&(c+=e.practicinghd[n].endX),e.practicinghd[n].endY&&(l+=e.practicinghd[n].endY),e.practicinghd[n].pageY=l,e.practicinghd[n].pageX=c;for(r=0;r<s.length;r++)if(i==e.practicing[r].class)if($(a).offset().left+$(a).height()>=e.practicinghd[r].area.left1&&$(a).offset().left<=e.practicinghd[r].area.right1&&$(a).offset().top+$(a).width()>=e.practicinghd[r].area.top1&&$(a).offset().top<=e.practicinghd[r].area.bottom1){console.log("进入对应目标"),e.moveAni.kill();for(var o=0;o<e.practicinghd.length;o++)e.practicinghd[o].isMove=!1;e.hdMove.includes(n)||e.hdMove.push(n),TweenMax.to(a,.1,{x:0,y:0,left:e.practicinghd[r].area.top1+"px",top:e.practicinghd[r].area.left1+$(a).height()/10+"px",ease:Quad.easeOut,onComplete:function(){$("#Fail")[0].play(),$("#"+i)[0].play(),$("#"+i)[0].addEventListener("ended",(function(){for(var t=0;t<e.practicinghd.length;t++)e.hdMove.includes(t)||(e.practicinghd[t].isMove=!0);e.practicinghd[n].isMove=!1,e.hdMove.length>=4&&e.endAudio()}))}})}else e.moveAni=TweenMax.to(a,0,{x:l,y:-c,position:"fixed",ease:Quad.easeOut,onComplete:function(){}})},seesawEnd:function(t){var e=this,n=$(t.currentTarget).data("idx");t.changedTouches[0].pageX,t.changedTouches[0].pageY;e.practicinghd[n].endX=e.practicinghd[n].pageX,e.practicinghd[n].endY=e.practicinghd[n].pageY},gotoNext:function(t){var e=this,n=$(t.currentTarget).data("path"),i=$(t.currentTarget).data("type");"return"===i?(e.learningShow="",e.$router.replace({path:n})):"slide"===i&&($("#Slide")[0].play(),e.endAudio(n,$("#Slide")[0]))},endAudio:function(t){var e=this;e.endAnimate()},endAnimate:function(){var t=this;t.endOn="End",$("#endAudio")[0].play(),t.qiqiuAnimate()},qiqiuAnimate:function(t){var e=this,n=!0;setTimeout((function(){TweenMax.staggerTo($(".qiqiu"),1,{bezier:{type:"cubic",values:[{x:30,y:150,opacity:0},{x:-20,y:50,opacity:1},{x:0,y:10,opacity:1},{x:0,y:-10,opacity:0}],autoRotate:!0},onComplete:function(t){n?(this.restart(!0,!1),n=!1):e.$router.replace({path:"/customs1"})}},.5)}),1e3)},loading:function(t){var e=this;e.loadingImg;e.learning()},learning:function(t){var e=this;$("#Slide_sound")[0].play(),$("#Slide_sound")[0].addEventListener("ended",(function(){for(var t=0;t<e.practicinghd.length;t++)e.practicinghd[t].isMove=!0}))}}}),at=it,st=Object(c["a"])(at,et,nt,!1,null,"f696c9b2",null),rt=st.exports;i["a"].use(d["a"]);var lt=[{path:"/",name:"home",component:y},{path:"/customs1",name:"customs1",component:k},{path:"/slide",name:"slide",component:M},{path:"/seesaw",name:"seesaw",component:q},{path:"/swing",name:"swing",component:W},{path:"/roundabout",name:"roundabout",component:U},{path:"/checking",name:"checking",component:tt},{path:"/practicing",name:"practicing",component:rt}],ct=new d["a"]({mode:"history",base:"",routes:lt}),ot=ct,gt=n("2f62");i["a"].use(gt["a"]);var dt=new gt["a"].Store({state:{},mutations:{setLocation:function(t,e){e&&(console.log(e),"open"==e.type?t.location.zdata[e.idx].on="on":(t.location.zdata[e.idx].on="",console.log(t.location)))}},actions:{},modules:{}});i["a"].config.productionTip=!1,ot.beforeEach((function(t,e,n){window.history.replaceState(null,null,location.href),n()})),new i["a"]({router:ot,store:dt,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.9ae949d4.js.map