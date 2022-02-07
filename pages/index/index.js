// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular:true,
    imgLink: "../../images/0-1.jpg",
    imgLink1: "../../images/0-2.jpg",
    Height: "50px",
    previousMargin:"0px",
    nextMargin:"0px",
    imgpack:[
      {link:"../../images/0-1.jpg"},
      {link:"../../images/0-2.jpg"},
      {link:"../../images/0-3.jpg"},
      {link:"../../images/0-4.jpg"},
      {link:"../../images/0-5.jpg"},
      {link:"../../images/0-6.jpg"},
      {link:"../../images/0-7.jpg"},
      {link:"../../images/0-8.jpg"},
      {link:"../../images/0-9.jpg"},
      {link:"../../images/1-1.jpg"},
      {link:"../../images/1-2.jpg"},
      {link:"../../images/1-3.jpg"},
      {link:"../../images/1-4.jpg"},
      {link:"../../images/1-5.jpg"},
      {link:"../../images/1-6.jpg"},
      {link:"../../images/1-7.jpg"},
      {link:"../../images/1-8.jpg"},
      {link:"../../images/1-9.jpg"},
      {link:"../../images/2-1.jpg"},
      {link:"../../images/2-2.jpg"},
      {link:"../../images/2-3.jpg"},
      {link:"../../images/2-4.jpg"},
      {link:"../../images/2-5.jpg"},
      {link:"../../images/2-6.jpg"},
      {link:"../../images/2-7.jpg"},
      {link:"../../images/2-8.jpg"},
      {link:"../../images/2-9.jpg"},
      {link:"../../images/3-1.jpg"},
      {link:"../../images/3-2.jpg"},
      {link:"../../images/3-3.jpg"},
      {link:"../../images/3-4.jpg"},
      {link:"../../images/3-5.jpg"},
      {link:"../../images/3-6.jpg"},
      {link:"../../images/3-7.jpg"},
      {link:"../../images/3-8.jpg"},
      {link:"../../images/3-9.jpg"},
    ]
  },
  ChangeHeightAndpage: function (e) {
    var ScreenWidth = wx.getSystemInfoSync().windowWidth;
    var imgWidth = e.detail.width;
    var imgHeight = e.detail.height;
    var height = ScreenWidth * imgHeight / imgWidth + "px";
    this.setData({
      Height: height
    })
    /*
    var x = 1,
      y = 1;
    while (1 <= x <= 2 && 1 <= y <= 9) {
      var text = "../../images/" + x + "-" + y + ".jpg";
      this.setData({
        imgLink: text
      })
      if (y == 9) {
        if (x == 2) {
          x = 1;
        } else {
          x++;
        }
        y = 1;
      } else {
        y++;
      }
      var text = "../../images/" + x + "-" + y + ".jpg";
      this.setData({
        imgLink1: text
      })
      var ScreenWidth = wx.getSystemInfoSync().windowWidth;
      var imgWidth = e.detail.width;
      var imgHeight = e.detail.height;
      var height = ScreenWidth * imgHeight / imgWidth + "px";
      this.setData({
        Height: height
      })
      this.sleep(1000);
    }*/
  },
  sleep(Millis) {
    var now = new Date();
    var exitTime = now.getTime() + Millis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime) {
        return;
      }
    }
  },
})