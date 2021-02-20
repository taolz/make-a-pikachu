!function() {
	let duration = 30;
	$('.speed').on('click', 'button', function(e) {
		let $button = $(e.currentTarget);
		let speed = $button.attr('data-speed');
		// 给当前点击按钮添加active类，同时查找并去除其他兄弟按钮上的active
		$button.addClass('active').siblings('.active').removeClass('active');
		switch (speed) {
			case 'slow':
				duration = 60;
				break;
			case 'normal':
				duration = 30;
				break;
			case 'fast':
				duration = 10;
				break;
		}
	});
	function writeCode(code) {
		let container = document.querySelector('#code');
		let styleTag = document.querySelector('#styleTag');
		let n = 0;
		let id = setTimeout(function run() {
			n += 1;
			container.innerHTML = code.substring(0, n);
			styleTag.innerHTML = code.substring(0, n);
			container.scrollTop = container.scrollHeight;
			if (n < code.length) {
				id = setTimeout(run, duration);
			}
		}, duration);
	}
	let code = `
/*
 * 先做一点小准备
 */
.preview{
	background: #fee433;
}
/*
 * 开始了，先画个皮卡丘的鼻子
 */
.nose{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 12px;
	border-color: black transparent transparent;
	border-radius: 12px;
	position: absolute;
	left: 50%;
	top: 28px;
	margin-left: -12px;
}
/*
 * 接下来，是它的眼睛
 */
.eye{
	width: 49px;
	height: 49px;
	background: #2e2e2e;
	position: absolute;
	border-radius: 50%;
	border: 2px solid #000;
}
/*
 * 这个是瞳孔
 */
.eye::before{
	content: '';
	display: block;
	width: 24px;
	height: 24px;
	background: white;
	position: absolute;
	border-radius: 50%;
	left: 6px;
	top: -1px;
	border: 2px solid #000;
}
/*
 * 让我们来调整一下眼睛的位置
 */
.eye.left{
	right: 50%;
	margin-right: 90px;
}
.eye.right{
	left: 50%;
	margin-left: 90px;
}
/*
 * 再给它画个脸
 */
.face{
	width: 68px;
	height: 68px;
	background: #fc0d1c;
	border: 2px solid black;
	border-radius: 50%;
	position: absolute;
	top: 80px;
}
/*
 * 同样，我们调整一下脸的位置
 */
.face.left{
	right: 50%;
	margin-right: 116px;
}
.face.right{
	left: 50%;
	margin-left: 116px;
}
/*
 * 然后我们来画下它的上嘴唇
 */
.upperLip{
	height: 25px;
	width: 80px;
	border: 2px solid black;
	position: absolute;
	top: 66px;
	background: #fee433;
}
/*
 * 再调整一下它们的位置
 */
.upperLip.left{
	right: 50%;
	border-bottom-left-radius: 40px 25px;
	border-top: none;
	border-right: none;
	transform: rotate(-20deg);
}
.upperLip.right{
	left: 50%;
	border-bottom-right-radius: 40px 25px;
	border-top: none;
	border-left: none;
	transform: rotate(20deg);
}
/*
 * 接着我们来完成它的下嘴唇
 */
.lowerLip-wrapper{
	bottom: -28px;
	position: absolute;
	left: 50%;
	margin-left: -150px;
	height: 120px;
	overflow: hidden;
	width: 300px;
}
/*
 * 再是它的嘴巴
 */
.lowerLip{
	height: 3500px;
	width: 300px;
	background: #990513;
	border-radius: 200px/2000px;
	border: 2px solid black;
	position: absolute;
	bottom: 0;
	overflow: hidden;
}
/*
 * 最后是它的舌头
 */
.lowerLip::after{
	content: '';
	position: absolute;
	bottom: -20px;
	width: 100px;
	height: 100px;
	background: #fc4a62;
	left: 50%;
	margin-left: -50px;
	border-radius: 50px;
}
/*
 * 一只皮卡丘就完成了~~
 */
 `;
	writeCode(code);
}.call();
