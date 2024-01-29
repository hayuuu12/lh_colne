$(function(){
    $(window).scroll(function(){
        let top = $(window).scrollTop();
        if(top > 600){
            $("#new .row").addClass("animate__animated");
        }else if(top < 600){
            $("#new .row").addClass("animate__animated");
        }
    });
}); //