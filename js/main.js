jQuery(document).ready(function(){
    //메뉴 버튼 클릭하면 주메뉴(nav)나옴
    $('.menu_btn').click(function(){
       //nav영역이 보여진 후에 function다음의 명령어 실행(메뉴 페이드인)
        $('nav').animate({'right':0},function(){
           $('nav ul li').each(function(){
               var indexNum=$(this).index();
               $(this).delay(indexNum*300).fadeIn();
           });
        });
    });
    //메뉴의 닫기 버튼을 클릭하면 주메뉴 안보임
    $('nav .close').click(function(){
       $('nav').animate({'right':'-100%'}); 
    });
    //주메뉴를 클릭하면 해당 section으로 이동
    $('nav ul li a').click(function(){
        $('nav').animate({'right':'-100%'});
       var menu_attr=$(this).attr('href');
        $('html,body').animate({
            scrollTop:$(menu_attr).offset().top
        },1000);
    });
    //웹디자인 홈페이지 클릭할때 메인 홈으로 돌아가지 않게
    $('a').click(function(e){
       e.preventDefault(); 
    });
    //스킬바
    $(window).scroll(function(){
        //화면 맨위쪽 위치 : 0을 변수에 저장
        var winTop=$(window).scrollTop();
        //화면 아래쪽 위치를 변수에 저장
        var winBottom=winTop+$(window).height();
        
        //두번째 section의 시작 위치값을 변수에 저장
        var secTop=$('.profile').offset().top+100;
        var secBottom=secTop+$('.profile').height()-700;
        
        //top < wBottom && bottom > wTop
        if(secTop<winBottom && secBottom>winTop){
            $('.skillbar').each(function(){
		          $(this).find('.skillbar-bar').addClass('active');
	        });
        }else{
            $('.skillbar').each(function(){
		          $(this).find('.skillbar-bar').removeClass('active');
	        });
        }
    });
    //swiper 슬라이드(웹 포트폴리오)
    var swiper = new Swiper('.swiper-container', {
      cssMode: true,
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
    });
    //light_box(편집디자인)
    var swiper = new Swiper('.swiper-container', {
      cssMode: true,
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
    });
    //편집디자인 팝업 갤러리 
    var focus_img=$('.popup .swiper-slide a');
    var focus=$('.focus');
    var container=$('.focus .container');
    //이미지에 클릭 이벤트 설정
    focus_img.click(function(e){
       //a태그의 속성 제거
       e.preventDefault();
       //container 비우기
       container.empty();
       //클릭한 a태그의 href속성값을 view_img변수에 저장
       var view_img=$(this).attr('href');
        //view_img값을 container에 추가
        container.append('<img src="'+view_img+'">');
        //focus영역 보임
        focus.fadeIn();
    });
    //닫기 버튼 누르기
    $('.focus_close').click(function(e){
       e.preventDefault();
        container.empty();
        focus.hide();
    });
});