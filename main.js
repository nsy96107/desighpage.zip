$(document).ready(function(){ // 실행틀 시작
    $(".tap-con > li").hide();
    
    $(".tap-btn > li").eq(0).addClass("active");
    $(".tap-con > li").eq(0).show();

    $(".tap-btn > li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var indexNum = $(this).index();
        $(".tap-con > li").eq(indexNum).fadeIn().siblings().hide();

        // 탭 콘텐츠 컨테이너 스크롤 위치를 맨 위로 초기화
        $(".tap-con").scrollTop(0);
    });
}); // 실행틀 끝