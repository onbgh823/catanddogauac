

(function($){


    $('.slideInner').slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 간격시간
        dots: true, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        })


    $(window).scroll(function(){
        var sct = $(this).scrollTop()


        var pic4Near = $('.backcolor').offset().top - $(this).height()/2

        if(sct >= pic4Near) {
            $('.pic4menu').addClass('on')
        }else {
            $('.pic4menu').removeClass('on')
        }
        
        
        




    })

// 수정해야함 게시판 영역 notice영역이 2개일떄
    // $('.tabTit li').each(function(i){
    //     $(this).find('a').on('click', function(e){
    //         e.preventDefault()
    //         $(this).parent().addClass('on')
    //         .siblings().removeClass('on')
    //         $('.tabCont > div').eq(i).fadeIn(100)
    //         .siblings().fadeOut(100)
    //     })
    // })


    // 공지사항페이지 로드하는거 헤더와 풋터가 나타남
    $('.tabTit > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })
    
    $('.backcolor .pic4menu .costomer > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })

    // 버튼 소메뉴
    $('#notice .background_nd .costomenu a').on('click',function(e){
        e.preventDefault()
        var index = $(this).index()
        $(this).addClass('on')
        .siblings().removeClass('on')
        $('.group1 > div').eq(index).show()
        .siblings().hide()
        
    })

    // $('#notice .background_nd .costomenu button').each(function(i){
    //     $(this).find('button').on('click', function(e){
    //         e.preventDefault()
    //         $(this).parent().addClass('on')
    //         .siblings().removeClass('on')
    //         $('.notiPage .qnaBox').eq(i).fadeIn(100)
    //         .siblings().fadeOut(100)
    //     })
    // })



})(jQuery)

// if (sct >= pic4Near) {
//         $('.pic4menu').css({
//             animationDuration: '1s',
//             animationFillMode: 'both'
//         })
//         $('.pic4menu .column').eq(0).addClass('animate__fadeInLeft')
//         $('.pic4menu .column').eq(1).addClass('animate__fadeInRight')

//         } else {
//             $('.pic4menu .column').eq(0).removeClass('animate__fadeInLeft')
//             $('.pic4menu .column').eq(1).removeClass('animate__fadeInRight')
//         }
