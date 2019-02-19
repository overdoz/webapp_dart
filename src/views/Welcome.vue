<template>
<transition name="fade">
  <div class="welcome">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<div class="secondLayer"><h1>{{text + '_'}}</h1></div>
    <div class="spinner">
   <div class="container_1">
	<div class="big-leaf_1"><div></div><div></div></div>
	<div class="big-leaf_2"><div></div><div></div></div>
	<div class="big-leaf_3"><div></div><div></div></div>
	<div class="big-leaf_4"><div></div><div></div></div>
	<div class="big-leaf_5"><div></div><div></div></div>
	<div class="big-leaf_6"><div></div><div></div></div>
	<div class="big-leaf_7"><div></div><div></div></div>
	<div class="big-leaf_8"><div></div><div></div></div>
	<div class="big-leaf_9"><div></div><div></div></div>
	<div class="big-leaf_10"><div></div><div></div></div>
	<div class="big-leaf_11"><div></div><div></div></div>
	<div class="big-leaf_12"><div></div><div></div></div>
</div>
	
<div class="container_2">
	<div class="line_1"></div>
	<div class="line_2"></div>
	<div class="line_3"></div>
	<div class="line_4"></div>
	<div class="line_5"></div>
	<div class="line_6"></div>
	<div class="line_7"></div>
	<div class="line_8"></div>
	<div class="line_9"></div>
	<div class="line_10"></div>
	<div class="line_11"></div>
	<div class="line_12"></div>
</div>
	
<div class="container_3">
	<div class="circle_1"><div></div><div></div></div>
	<div class="circle_2"><div></div><div></div></div>
	<div class="circle_3"><div></div><div></div></div>
	<div class="circle_4"><div></div><div></div></div>
	<div class="circle_5"><div></div><div></div></div>
	<div class="circle_6"><div></div><div></div></div>
	<div class="circle_7"><div></div><div></div></div>
	<div class="circle_8"><div></div><div></div></div>
	<div class="circle_9"><div></div><div></div></div>
	<div class="circle_10"><div></div><div></div></div>
	<div class="circle_11"><div></div><div></div></div>
	<div class="circle_12"><div></div><div></div></div>
</div>
	
<div class="container_4">
	<div class="triangel_1"></div>
	<div class="triangel_2"></div>
	<div class="triangel_3"></div>
	<div class="triangel_4"></div>
	<div class="triangel_5"></div>
	<div class="triangel_6"></div>
	<div class="triangel_7"></div>
	<div class="triangel_8"></div>
	<div class="triangel_9"></div>
	<div class="triangel_10"></div>
	<div class="triangel_11"></div>
	<div class="triangel_12"></div>
</div>
</div>

 
  </div>
	</transition>
</template>

<script>
import Mandala from '../components/Mandala.vue'
export default {
  name: 'welcome',
  components: {
    Mandala
  },
	 data: function () {
    return {
			text: ''
    }
  },
  created() {
		let title = ['O','V','E','R','D','O','Z'];
		setInterval(() => {
			if (title.length == 0) {
				clearInterval()
			} else {
				this.text = this.text + title.shift()
			}
		}, 700);
    setTimeout(() => {
      this.$router.push('/config');
    }, 9000)
  },
  methods: {
    goToNextPage: function () {
      this.$router.push('/config');
    }
  }
}
</script>

<style scoped>
@charset "utf8";
@import url(https://fonts.googleapis.com/css?family=Amatic+SC|Space+Mono|VT323);
h1 {
  color: #02547D;
  letter-spacing: 10px;
  left: 5%;
  bottom: 3px;
  font-size: 4em;
	font-family: 'Amatic SC', cursive;
	z-index: 3;
	margin: 0;
}

.spinner {
    -webkit-animation-name: spin;
    -webkit-animation-duration: 90000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 90000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 90000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
		
}

.secondLayer {
	height: 100vh;
	width: 100vw;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
}

.welcome {
  background-color: #E1F7E6;
  height: 100vh;
  width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

/*                                             ! Mandala Started Here ...
=======================================================================================================================*/
*,
*:after,
*:before,
html
	{box-sizing:border-box}

*:after,*:before
	{content:"";display:block;position:absolute}

body{
	background:#E1F7E6;
	margin:0;
	padding:0;
	overflow:hidden
	}

div{display:block;position:absolute}

[class*="container"]{
	top:50%;
	left:50%;
	border-radius:50%;
	transform:translate(-50%,-50%)
	}

.container_1{width:350px;height:350px}

.container_1:before{
	background:#E1F7E6;
	width:280px;
	height:280px;
	top:35px;
	left:35px;
	z-index:1;
	border-radius:50%
	}

[class*="big-leaf"]{
	width:40px;
	height:100%;
	top:50%;
	left:50%
	}

.big-leaf_1,.line_1,.triangel_1{transform:translate(-50%,-50%)}

.big-leaf_2,.line_2,.triangel_2{transform:translate(-50%,-50%) rotate(15deg)}

.big-leaf_3,.line_3,.triangel_3{transform:translate(-50%,-50%) rotate(30deg)}

.big-leaf_4,.line_4,.triangel_4{transform:translate(-50%,-50%) rotate(45deg)}

.big-leaf_5,.line_5,.triangel_5{transform:translate(-50%,-50%) rotate(60deg)}

.big-leaf_6,.line_6,.triangel_6{transform:translate(-50%,-50%) rotate(75deg)}

.big-leaf_7,.line_7,.triangel_7{transform:translate(-50%,-50%) rotate(90deg)}

.big-leaf_8,.line_8,.triangel_8{transform:translate(-50%,-50%) rotate(105deg)}

.big-leaf_9,.line_9,.triangel_9{transform:translate(-50%,-50%) rotate(120deg)}

.big-leaf_10,.line_10,.triangel_10{transform:translate(-50%,-50%) rotate(135deg)}

.big-leaf_11,.line_11,.triangel_11{transform:translate(-50%,-50%) rotate(150deg)}

.big-leaf_12,.line_12,.triangel_12{transform:translate(-50%,-50%) rotate(165deg)}

[class*="big-leaf"] div{
	width:40px;
	height:40px;
	left:50%;
	border-radius:75% 0 75% 0;
	box-shadow:0 0 0 4px #A9E8DC;
	transform:translate(-50%,0) rotate(135deg)
	}

[class*="big-leaf"] div:nth-child(1){top:10px}
[class*="big-leaf"] div:nth-child(2){bottom:10px}

[class*="big-leaf"] div:before{
	background:#A9E8DC;
	width:35px;
	height:35px;
	border-radius:75% 0 75% 0
	}

[class*="big-leaf"] div:nth-child(1):before{top:0;right:0}
[class*="big-leaf"] div:nth-child(2):before{bottom:0;left:0}

[class*="big-leaf"] div:after{
	width:30px;
	height:30px;
	border:4px dotted #E1F7E6;
	border-radius:75% 0 75% 0
	}

[class*="big-leaf"] div:nth-child(1):after{top:0;right:0}

[class*="big-leaf"] div:nth-child(2):after
	{bottom:0;left:0;transform:rotate(180deg)}
	
.container_2
	{width:265px;height:265px;z-index:2}

[class*="line"]{
	width:35px;
	height:100%;
	top:50%;
	left:50%
	}

[class*="line"]:before,
[class*="line"]:after{
	background-color:#E1F7E6;
	background-image:
		linear-gradient(90deg,#A9E8DC 100%,#E1F7E6),
		linear-gradient(90deg,#A9E8DC 100%,#E1F7E6),
		linear-gradient(90deg,#A9E8DC 100%,#E1F7E6);
	background-repeat:no-repeat;
	background-size:5px 10px,5px 15px,5px 10px;
	width:100%;
	height:40px
	}

[class*="line"]:before
	{background-position:5px top,15px top,25px top;top:0}

[class*="line"]:after
	{background-position:5px bottom,15px bottom,25px bottom;bottom:0}

.container_3
	{width:225px;height:225px;z-index:3}

[class*="circle"]{
	width:20px;
	height:100%;
	top:50%;
	left:50%
	}

.circle_1{transform:translate(-50%,-50%) rotate(8deg)}
.circle_2{transform:translate(-50%,-50%) rotate(23deg)}
.circle_3{transform:translate(-50%,-50%) rotate(38deg)}
.circle_4{transform:translate(-50%,-50%) rotate(53deg)}
.circle_5{transform:translate(-50%,-50%) rotate(68deg)}
.circle_6{transform:translate(-50%,-50%) rotate(83deg)}
.circle_7{transform:translate(-50%,-50%) rotate(98deg)}
.circle_8{transform:translate(-50%,-50%) rotate(113deg)}
.circle_9{transform:translate(-50%,-50%) rotate(128deg)}
.circle_10{transform:translate(-50%,-50%) rotate(143deg)}
.circle_11{transform:translate(-50%,-50%) rotate(158deg)}
.circle_12{transform:translate(-50%,-50%) rotate(173deg)}

[class*="circle"] div{
	width:20px;
	height:20px;
	border-radius:100% 100% 100% 0;
	box-shadow:0 0 0 4px #A9E8DC
	}

[class*="circle"] div:nth-child(1)
	{top:0;left:-1px;transform:rotate(315deg)}

[class*="circle"] div:nth-child(2)
	{bottom:0;left:1px;transform:rotate(135deg)}

[class*="circle"] div:before{
	width:12px;
	height:12px;
	top:4px;
	left:4px;
	border:3px solid #A9E8DC;
	border-radius:100% 100% 100% 0
	}

[class*="circle"] div:after{
	background:#A9E8DC;
	width:5px;
	height:5px;
	bottom:-10px;
	left:-10px;
	border-radius:50%;
	box-shadow:-7px 7px #A9E8DC,-14px 14px #A9E8DC,-21px 21px #A9E8DC,-28px 28px #A9E8DC,-35px 35px #A9E8DC
	}

.container_4
	{width:165px;height:165px;z-index:4}

[class*="triangel"]{
	width:20px;
	height:100%;
	top:50%;
	left:50%
	}

[class*="triangel"]:before{
	width:10px;
	height:0;
	top:0;
	left:5px;
	border-bottom:10px solid #A9E8DC;
	border-left:5px solid transparent;
	border-right:5px solid transparent
	}

[class*="triangel"]:after{
	width:10px;
	height:0;
	bottom:0;
	left:5px;
	border-top:10px solid #A9E8DC;
	border-left:5px solid transparent;
	border-right:5px solid transparent
	}

	.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/*                                             ! Mandala Ended Here ...
=======================================================================================================================*/

/* This Is Not Part Of Mandala
.me{
	background:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1735448/profile/profile-80.jpg?1528976396")no-repeat center / contain;
	width:40px;
	height:40px;
	bottom:16px;
	right:16px;
	display:block;
	position:fixed;
	border-radius:50%;
	z-index:999;
	animation:me 2s linear infinite alternate
	}

@keyframes me{
	from{transform:translateY(-4px)}
	to{transform:translateY(4px)}
	}

.me:hover span
	{right:50px;opacity:1;visibility:visible}

.me span{
	width:150px;
	top:10px;
	right:0;
	display:block;
	position:absolute;
	color:#008080;
	font-family:Tahoma,Geneva,sans-serif;
	font-size:16px;
	font-style:normal;
	font-weight:400;
	text-align:center;
	z-index:-1;
	opacity:0;
	visibility:hidden;
	transition:all .5s ease
	} */
</style>



