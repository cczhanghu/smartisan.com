! function($) {
    const $lunbo = $('.lunbo');
    const $piclist = $('.lunbo ul li');
    const $btnlist = $('.lunbo ol li');
    const $left = $('#left');
    const $right = $('#right');
    let $num = 0;
    let $timer1 = null;
    let $timer2 = null;
    //1.小圆圈切换
    $btnlist.on('mouseover', function() {
        $num = $(this).index();
        $timer1 = setTimeout(function() {
            tabswitch()
        }, 300);


    });

    $btnlist.on('mouseout', function() {
        clearTimeout($timer1);
    });

    //2.左右箭头切换
    $right.on('click', function() {
        $num++;
        if ($num > $btnlist.length - 1) {
            $num = 0;
        }

        tabswitch()
    });

    $left.on('click', function() {
        $num--;
        if ($num < 0) {
            $num = $btnlist.length - 1;
        }

        tabswitch()
    });

    function tabswitch() {
        $btnlist.eq($num).addClass('active').siblings().removeClass('active');
        $piclist.eq($num).stop(true).animate({
            opacity: 1
        }).siblings().stop(true).animate({
            opacity: 0
        });
    }

    //3.自动轮播
    $timer2 = setInterval(function() {
        $right.click();
    }, 3000);

    //4.鼠标控制定时器停止和开启。
    $lunbo.hover(function() {
        clearInterval($timer2);
    }, function() {
        $timer2 = setInterval(function() {
            $right.click();
        }, 3000);
    });

}(jQuery);