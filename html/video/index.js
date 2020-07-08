// console.log(document.querySelector(".speed-bar"));
var bar = document.querySelector(".speed-bar");
var speed = document.querySelector('.speed');
var video = document.querySelector('.flex');

function handleMove(e) {
    var y = e.pageY - this.offsetTop;
    var percent = y / this.offsetHeight;
    var min = 0.4;
    var max = 4;
    var height = Math.round(percent * 100) + '%';
    var palybackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = palybackRate.toFixed(2) + 'x'; //toFixed：保留小数
    video.palybackRate = palybackRate;
    console.log("video.palybackRate:速度：" + video.palybackRate);

}
speed.addEventListener('mousemove', handleMove);