 $(function () {
     var imgList = $('.img')
     $.each(imgList, function (index, value) {
         $(value).attr('src', $(value).attr('data-img'))
     });
 })