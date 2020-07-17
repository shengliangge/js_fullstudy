// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLeft: true,
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        circular: true,
        imgUrls: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2294966447,248611631&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983979084&di=1ae9d1befef668dc567de220ee09a446&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20191006%2F19%2F1570360737-HvGOTkxnum.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983979083&di=0ff54f25df7302fa4e1dab10de767c3c&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20191203%2F19%2F1575373717-WUtgwhbXOv.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594984019001&di=7a2f949ac7258401af6287a4ee0b75e0&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3427169086%2C3097665420%26fm%3D214%26gp%3D0.jpg'],
        movieList: [{
                isShow: 0,
                name: "第一次的离别",
                imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
                actor: "艾萨·亚森,凯丽比努尔·热合米图力,艾力乃孜·热合米图力",
                time: "2020-07-20",
                wantSee: '9745'
            },
            {
                isShow: 1,
                name: "璀璨薪火3D",
                imgUrl: "https://p0.meituan.net/moviemachine/1b6ca45db703c6df1c1ad8412ad0639a633073.jpg@1l_1e_1c_128w_180h",
                actor: "",
                time: "2020-07-20",
                wantSee: '1248'
            }
        ]
    },
    tabChangeHot() { //function tabChangeWaiting(){}
        this.setData({
            isLeft: true
        });
    },
    tabChangeWaiting() { //function tabChangeWaiting(){}
        this.setData({
            isLeft: false
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})