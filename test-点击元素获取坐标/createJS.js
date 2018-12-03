function createCoord(container, imgs) {
    var box = $(container), // 存放图片的容器
        imgs = imgs, // 容器内的所有图片
        count = 4;
        createCircle(587, 270, 50, 50, box, 0);


    $.each(imgs, function (index, value) {

        $(value).on('click', function (e) {
            console.log(e);
            
            e.stopPropagation()
            if (!$(this).attr('data-count') || $(this).attr('data-count') > '1') {
                $(this).attr({
                    'data-count': count--,
                    'data-index': index
                })
                var x = e.pageX - box.offset().left,
                    y = e.pageY - 50;
                createCircle(x, y, 50, 50, box, index);
                return false
            }

        })
    });

    // 给遮罩绑定事件
    box.on('click', 'div', function (e) {
        e.stopPropagation()
        // e.preventDefault()
        var that = $(this),
            title = $(this).attr('data-title') || '';


        $(this).children('div').slideDown().children('input').val(title).focus() // 显示输入框并获取焦点

        $(this).focusout(function () { // 失去焦点做的事
            that.attr('data-title', $(this).find("input").val()) // 保存标题到父元素上
            $(this).find("div").slideUp(); // 隐藏输入框
        });

        $(this).keydown(function (e) { // 按下Enter
            if (e.keyCode == 13) {
                that.attr('data-title', $(this).find("input").val()) // 保存标题到父元素上
                $(this).find("div").slideUp(); // 隐藏输入框
            }
        })

        return false;
    })
    // 给遮罩内的删除按钮绑定事件
    box.on('click', 'div i', function (e) {
        e.stopPropagation()
        // e.preventDefault()
        // box.children('img[data-index="' + $(this).attr('data-index') + '"]').attr({
        //     'data-count': '',
        //     'data-index': ''
        // })
        var img = box.children('img');

        img.attr('data-count',img.attr('data-count')-0+1)
        count++

        $(this).parent().unbind().remove() // 删除遮罩
        return false;
    })
}
// 创建遮罩    
// 参数: X: 坐标值, 
//       Y : 坐标值, 
//       width: 遮罩的宽度,
//       height:遮罩的高度, 
//       element:存放遮罩的元素,
//       index: 点击当前图片的索引，
//       inputText:图片的标题 
function createCircle(X, Y, width, height, element, index, inputText) {
    var div = document.createElement('div');
    var i = document.createElement('i')
    var div1 = document.createElement('div')
    var span = document.createElement('span')
    var input = document.createElement('input')

    var inputMsg = inputText || '';

    $(div).css({
        'position': 'absolute',
        'top': Y - height/2,
        'left': X - width/2,
        'width': width + 'px',
        'height': height + 'px',
        'background': '#0005',
        'color': '#fff',
        // "data-count": count
    }).attr({
        'data-x': X,
        'data-y': Y,
        'data-title': inputText
    })
    $(i).css({
        'position': 'absolute',
        'top': '5px',
        'right': '5px',
        'width': width / 4 + 'px',
        'height': height / 4 + 'px',
        'background': 'url(./关闭.png) no-repeat',
        'background-size':'100% 100%'
    }).attr('data-index', index)
    $(div1).css({
        'position': 'absolute',
        'top': '-0px',
        'right': '-155px',
        'width': '150px',
        'height': '30px',
        'background': '#fff',
        'box-sizing': 'border-box',
        'display': 'none'
    })
    $(span).css({
        'width': '49px',
        'height': '30px',
        'float': 'left',
        'color': '#000',
        'text-align': 'center',
        'line-height': '30px',
        'border-right': '1px solid #0001'
    }).text('标题')
    $(input).css({
        'width': '100px',
        'height': '30px',
        'border-width': '0',
        'outline': 'none',
        'float': 'left',
        'text-indent': '2px'
    })


    div1.appendChild(span)
    div1.appendChild(input)
    div.appendChild(div1)
    div.appendChild(i)
    element.append(div)
}