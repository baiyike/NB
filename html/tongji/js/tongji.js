//页面切换
$("#ultab li").on('tap',function () {
    var index = $(this).index();
//					console.log(index);
    //页面显示隐藏
    $(".divtab").css("display", "none");
//        $('.div').eq(index).addClass('animated bounceInRight');//添加类名
    $(".divtab").eq(index).css("display", "block");
});



$("#header_xx").on('tap',function () {
    $("#xian").css('display','block');
    $("#cang").css('display','block');
});

//下标切换
$("#ultab li").on('tap',function () {
    var index = $(this).index();
//	console.log(index);
    //下标显示隐藏
    $(".dixia").css("display", "none");
    $(".dixia").eq(index).css("display", "block");
});


$("#cang").on('tap',function () {
    $("#xian").css('display','none');
    $("#cang").css('display','none');
});
$("#fanhui").on('tap',function () {
    $("#xian").css('display','none');
    $("#cang").css('display','none');
});
