// 注意: 需要引入jQuery和underscore
$(function () {
    // 获取window的引用:
    var $window = $(window);
  
    var imgList = $('.img');
    // var lazyImgs = $.map($('.img'), function (value, index) {
    //     return value
    // });
    // console.log($window.scrollTop());
    
    // 定义事件函数:
    var onScroll = function () {
        // 获取页面滚动的高度:
        var wtop = $window.scrollTop();
        // 获取可视区域高度:
        var wheight = $window.height();
            
        // 循环处理数组的每个img元素:
        $.each(imgList, function (index, value) {
            // console.log($(value).offset().top);
            
            // 判断是否在可视范围内:
            if ($(value).offset().top - wtop < wheight+100) {
                // 设置src属性:
                $(value).attr('src', $(value).attr('data-img'));
            }
        }); 
    };
    // // 绑定事件:
    $window.scroll(onScroll);
    // // 手动触发一次:
    onScroll()
})