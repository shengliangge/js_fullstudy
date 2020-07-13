window.onload = function() {
    imgLocation("container", "box");
}

//获取当前有多少张图片要摆放
function imgLocation(parent, content) {
    //将parent下的所有内容全部取出
    var cparent = document.getElementById(parent);
    // console.log(cparent)
    var ccontent = getChildElement(cparent, content);
    // console.log(ccontent)
    var imgWidth = ccontent[0].offsetWidth;
    console.log(imgWidth);
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth * num + "px";
    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            console.log(BoxHeightArr[i])
        } else {
            //将Math.min方法借给数组使用
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getMinHeightLocation(BoxHeightArr, minHeight)
                // console.log(minHeight)
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            // ccontent[i].style.left = (minIndex) * imgWidth + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }

    }

}

function getChildElement(parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    // console.log(allContent);
    return contentArr;
}

function getMinHeightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] === minHeight) {
            return i;
        }
    }

}