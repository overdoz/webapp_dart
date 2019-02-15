<template>

<div>
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
</template>

<script>
export default {
  name: 'mandala',
  components: {
    
  },
}
</script>

<style scoped>
*,
*:after,
*:before,
html
	{box-sizing:border-box}

*:after,*:before
	{content:"";display:block;position:absolute}

body{
	background:#000;
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
	background:#000;
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
	box-shadow:0 0 0 4px #d01551;
	transform:translate(-50%,0) rotate(135deg)
	}

[class*="big-leaf"] div:nth-child(1){top:10px}
[class*="big-leaf"] div:nth-child(2){bottom:10px}

[class*="big-leaf"] div:before{
	background:#d01551;
	width:35px;
	height:35px;
	border-radius:75% 0 75% 0
	}

[class*="big-leaf"] div:nth-child(1):before{top:0;right:0}
[class*="big-leaf"] div:nth-child(2):before{bottom:0;left:0}

[class*="big-leaf"] div:after{
	width:30px;
	height:30px;
	border:4px dotted #000;
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
	background-color:#000;
	background-image:
		linear-gradient(90deg,#d01551 100%,rgba(0,0,0,0)),
		linear-gradient(90deg,#d01551 100%,rgba(0,0,0,0)),
		linear-gradient(90deg,#d01551 100%,rgba(0,0,0,0));
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
	box-shadow:0 0 0 4px #d01551
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
	border:3px solid #d01551;
	border-radius:100% 100% 100% 0
	}

[class*="circle"] div:after{
	background:#d01551;
	width:5px;
	height:5px;
	bottom:-10px;
	left:-10px;
	border-radius:50%;
	box-shadow:-7px 7px #d01551,-14px 14px #d01551,-21px 21px #d01551,-28px 28px #d01551,-35px 35px #d01551
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
	border-bottom:10px solid #d01551;
	border-left:5px solid transparent;
	border-right:5px solid transparent
	}

[class*="triangel"]:after{
	width:10px;
	height:0;
	bottom:0;
	left:5px;
	border-top:10px solid #d01551;
	border-left:5px solid transparent;
	border-right:5px solid transparent
	}
</style>

