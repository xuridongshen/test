// --------------tab页切换----------------
var tabs_head = $('.tabs-head')
var tabs_ul = $('ul', tabs_head)
var tabs_content = $('.tabs-content')

var del = $('.del')
var add = $('.add')

var tabs_text_list = ['标签一', '标签二', '标签三']

tabsList()

function tabsList() {
    var tabs_head_list = $('li', tabs_ul)
    $.each(tabs_head_list, function (index, value) {
        $(value).on('click', function () {
            tabs_content.text('').text($(this).text())
            $(this).parent().children('li').removeClass('active')
                .end()
                .end()
                .addClass('active')
        })
    });
}

del.on('click', function () {
    tabs_ul.html('').addClass('active-ul')
})

add.on('click', function () {
    var fragm = document.createDocumentFragment()
    $.each(tabs_text_list, function (index, value) {
        var li = document.createElement('li')
        li.innerText = value
        if (index == 0) $(li).addClass('active')
        fragm.appendChild(li)
    });
    tabs_ul.html(fragm).removeClass('active-ul')
    tabsList()
})

// --------------轮播图切换----------------
var Swiper = $('#swiper')
var swiper_btn = $('.swiper-btn')
var swiper = $('.swiper')
var icon_left = $('.icon-left')
var icon_right = $('.icon-right')
var swiper_ul = $('ul', swiper)


var SWIPER = function () {
    this.swiperList = []
}
SWIPER.prototype.init = function () {
    this.swiperListArr()
    this.createSwiper()
    this.ToLeft()
    this.ToRight()
}
SWIPER.prototype.createSwiper = function () {
    var fragm = document.createDocumentFragment()

    $.each(this.swiperList, function (index, value) {
        var li = document.createElement('li')
        li.innerText = value
        fragm.appendChild(li)
    });
    swiper_ul.html(fragm)
}
SWIPER.prototype.swiperListArr = function () {
    var that = this
    return $.ajax({
        type: "get",
        url: "./data.json",
        dataType: "json",
        async: false,
        success: function (res) {
            that.swiperList = res
        }
    });
}
SWIPER.prototype.ToLeft = function () {
    // var arr = this.swiperList
    var swiper_ul_li = $('li', swiper_ul)
    var that = this
    icon_left.on('click', function () {
        that.swiperList.unshift(that.swiperList.pop())
        $.each(swiper_ul_li, function (index, value) {
            $(value).text(that.swiperList[index])
        });
    })
}
SWIPER.prototype.ToRight = function () {
    // var arr = this.swiperList
    var swiper_ul_li = $('li', swiper_ul)
    var that = this
    icon_right.on('click', function () {

        that.swiperList.push(that.swiperList.shift())
        $.each(swiper_ul_li, function (index, value) {
            $(value).text(that.swiperList[index])
        });
        // console.log(that.swiperList());

    })
}


var no1 = new SWIPER()
no1.init()