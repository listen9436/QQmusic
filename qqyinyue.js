/**
 * Created by Administrator on 2016/11/6.
 */
$(function () {
    //顶部导航样式切换
    $(".header_nav li").find("a").click(function () {
        $(this).addClass("active").parents("li").siblings("li").children("a").removeClass("active");
    });
    //搜索框下面排行榜隐藏显示
    $(".search_top").click(function (ev) {
        var event = window.event || ev;
        $(".search_btm").stop().slideDown(200);
        event.cancelBubble = true;
    });
    $(document).click(function () {
        $(".search_btm").stop().delay(600).slideUp(200);
    });
    $(".search_btm").click(function (ev) {
        var event = window.event || ev;
        event.cancelBubble = true;
    });
    //导航栏切换
    $(".nav ul li").find("a").click(function () {
        $(this).addClass("nav_active").parents("li").siblings("li").children("a").removeClass("nav_active");
    });
    //新歌首发tab切换
    $(".music_tab").find("a").click(function () {
        $(this).addClass("tab_active").siblings().removeClass("tab_active");
    });
    //新歌首发轮播
    var index = 0;
    var open = true;//节流阀
    //小点
    $(".slide_num").find("a").click(function () {
        if (open) {
            open = false;
            $(this).children(".num_line").addClass("num_line_active");
            $(this).siblings("a").children(".num_line").removeClass("num_line_active");
            var i = $(this).index();
            $(".slide_box").stop().animate({left: -1200 * i}, 600, function () {
                open = true;
            });
            index = i;
        }
    });
    //左右按钮
    $("#left").click(function () {
        if (open) {
            open = false;
            prev();
        }
    });
    $("#right").click(function () {
        if (open) {
            open = false;
            next();
        }
    });
    // var nexttimer = null;
    // var prevtimer = null;
    // //添加setTimeout,200一个缓冲,防止恶意点击。
    // $("#left").click(function () {
    //     clearTimeout(prevtimer);
    //     prevtimer = setTimeout(prev,200);
    // });
    // $("#right").click(function () {
    //     clearTimeout(nexttimer);
    //     nexttimer = setTimeout(next,200);
    // });
    //方法
    var len = $(".slide_box").find("li").size() / 4;

    function prev() {
        index--;
        $(".slide_num a").find(".num_line").removeClass("num_line_active").eq(index).addClass("num_line_active");

        if (index == -1) {
            index = len - 2;//index = 2 ; （0,1,2----就是第三个小点）
            $(".slide_box").animate({left: -1200 * (len - 1)}, 0);//第三张图的位置
        }
        $(".slide_box").stop().animate({left: -1200 * index}, 600, function () {
            open = true;
        });
    }

    function next() {
        index++;
        $(".slide_box").stop().animate({left: -1200 * index}, 600, function () {
            if (index == len - 1) {
                index = 0;
                $(".slide_box").animate({left: 0}, 0);//此处不能写 stop()
            }
            $(".slide_num a").find(".num_line").removeClass("num_line_active").eq(index).addClass("num_line_active");
            open = true;
        });
    }

    //精彩推荐轮播


    //热门歌单轮播
    var index3 = 0;
    var open3 = true;//节流阀
    //小点
    $(".slide3_num").find("a").click(function () {
        if (open3) {
            open3 = false;
            $(this).children(".num_line2").addClass("num_line_active2");
            $(this).siblings("a").children(".num_line2").removeClass("num_line_active2");
            var i = $(this).index();
            $(".slide3_box").stop().animate({left: -1200 * i}, 600, function () {
                open3 = true;
            });
            index3 = i;
        }
    });
    //左右按钮
    $("#left3").click(function () {
        if (open3) {
            open3 = false;
            prev3();
        }
    });
    $("#right3").click(function () {
        if (open3) {
            open3 = false;
            next3();
        }
    });
    //方法
    var len2 = $(".slide3_box").find("li").size() / 4;

    function prev3() {
        index3--;
        $(".slide3_num a").find(".num_line2").removeClass("num_line_active2").eq(index3).addClass("num_line_active2");

        if (index3 == -1) {
            index3 = len2 - 2;//index = 2 ; （0,1,2----就是第三个小点）
            $(".slide3_box").animate({left: -1200 * (len2 - 1)}, 0);//第三张图的位置
        }
        $(".slide3_box").stop().animate({left: -1200 * index3}, 600, function () {
            open3 = true;
        });
    }

    function next3() {
        index3++;
        $(".slide3_box").stop().animate({left: -1200 * index3}, 600, function () {
            if (index3 == len2 - 1) {
                index3 = 0;
                $(".slide3_box").animate({left: 0}, 0);//此处不能写 stop()
            }
            $(".slide3_num a").find(".num_line2").removeClass("num_line_active2").eq(index3).addClass("num_line_active2");
            open3 = true;
        });
    }
    //MV首播 tab切换
    $(".MV_tab").find("a").click(function () {
        $(this).addClass("tab_active2").siblings().removeClass("tab_active2");
    });
    //尾部更多合作的显示
    $("#more").click(function (ev) {
        var event = window.event || ev;
        $(this).parent().hide();
        $(".more_item").show();
        event.cancelBubble = true;
    });
    $(document).click(function () {
        $("#more").parent().show();
        $(".more_item").hide();
    })
    //返回顶部
    $(window).scroll(function () {
       if ($(window).scrollTop() >= 500){
           $(".backTop").show();
       }else {
           $(".backTop").hide();
       }
    });
    $(".backTop").click(function () {
        $("html,body").animate({scrollTop:0},0);
    });
});
