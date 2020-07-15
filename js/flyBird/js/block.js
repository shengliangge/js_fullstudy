function Block() {
    this.upDivWrap = null; //上方管道
    this.downDivWrap = null; //下方管道
    this.downHeight = baseObj.randomNum(0, 150); //随机生成下方管道的高度
    this.gapHeight = baseObj.randomNum(150, 160); //随机生成通过的高度
    this.upHeight = 312 - this.downHeight - this.gapHeight; //用总高度减掉下方管道和通过的高度，等于下方管道的高度
    this.createDiv = function(url, height, positionType, left, top) {
            var newDiv = document.createElement('div');
            newDiv.style.width = '62px';
            newDiv.style.height = height;
            newDiv.style.position = positionType;
            newDiv.style.left = left;
            newDiv.style.top = top;
            newDiv.style.backgroundImage = url;
            return newDiv;
        }
        //上方管道
    this.createBlock = function() {
        var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px'); //上方管道辅助管道
        var upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px'); //上方管道主管道
        this.upDivWrap = this.createDiv(null, null, 'absolute', '450px');
        this.upDivWrap.appendChild(upDiv1);
        this.upDivWrap.appendChild(upDiv2); //生成上方管道
        jsWrapBg.appendChild(this.upDivWrap);
        //下方管道
        var downDiv1 = this.createDiv('url(img/down_mod.png)', this.downHeight + 'px'); //下方管道辅助管道
        var downDiv2 = this.createDiv('url(img/down_pipe.png)', '60px'); //下方管道主管道
        this.downDivWrap = this.createDiv(null, null, 'absolute', '450px', 363 - this.downHeight + 'px');
        this.downDivWrap.appendChild(downDiv2); //生成上方管道
        this.downDivWrap.appendChild(downDiv1);
        jsWrapBg.appendChild(this.downDivWrap);
    }
    this.moveBlock = function() { //控制管道移动的方法
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px';
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px';

    }




}