$(function(){
    //gnb all 메뉴 열기
    let count = 1 ;

    $('.btn-list').click(function(){
        $('#gnb').show();
    });
    $('.closebox').click(function(){
        $('#gnb').hide();
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
          $('.header-background').stop().slideDown(200);
          $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().addClass("black-font");
          $('.searchform,.btn-h-line').stop().addClass("black-border");
        }else{
          $('.header-background').stop().slideUp(200);
          $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().removeClass("black-font");
          $('.searchform,.btn-h-line').stop().removeClass("black-border");
        };
    });
    //main-nav
    $('.main-nav').hover(function(){
       $('.header-background').hide();
       $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').removeClass('black-font');
       $('.searchform,.btn-h-line').removeClass('black-border');
       $('.header-background').stop().slideToggle(200);
       $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
       $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
       $('.d-sub-title').find("span").removeClass("act");
       $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().toggleClass("black-font");
       $('.searchform,.btn-h-line').stop().toggleClass("black-border");
    });
  

    $('.main-nav>li').hover(function(){
        $(this).find('.d-submenu-main').toggle();
    });

    $('.d-sub-title').prepend('<div class="d-sub-title-before"></div>');  // prepend : 앞쪽에 박스 추가 jquery에서 before, after는 박스 앞, 뒤에 추가 되는 걸 의미.

    $('.d-sub-title').mouseenter(function(){
        $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
        $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
        $('.d-sub-title').find("span").removeClass("act");
        $(this).find(".d-sub-title-before").addClass('d-sub-title-before-hover');
        $(this).find("a").removeClass("black-font").addClass("act");
        $(this).find('span').addClass("act");
    });

    //배너 에니메이션
    //$('.banner-in').css('width', (504*4)+ "px"); //width 값 구하는 식

    setInterval(mySiie, 5000);  //무한 반복
    function mySiie(){
        count++;
        if(count > 4){
            count =1;
        }
        $('.count').text(count);
        $('.banner-in').animate({
            'left' : '-504px'
        }, 500, function(){
            $('.banner-in img:eq(0)').clone().appendTo('.banner-in'); //뒤에 복제한 거 갖다붙이기
            $('.banner-in img:eq(0)').remove();  // 앞에 남은 거 지우기
            $('.banner-in').css('left', 0);
        });
    }

}); //jquery
