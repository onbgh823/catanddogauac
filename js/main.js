

(function($){

    

    //top scoll bar
	// 스크롤탑값에 따라 헤더아래쪽 선의 넓이 변경하기    
    var scrollSize = $(document).height() - $('#header').height() - $(window).height();
    var flag = true;
    $(window).on('scroll',function() {
        var sct = $(this).scrollTop();
        var wid = (sct/scrollSize)*100 + '%';
            //스트롤할때 가로로 바가 이동
            $('.scrolling-bar')
            .css({
                zIndex : 99999999,
                opacity : 1, 
                width : wid
            });
    // 스크롤탑값에 따라 헤더구역 고정시키기
        if (sct >= 131 && flag) {
            $('#header').css({
                position:'fixed',
                opacity:'0',
                height:'0px',
                backgroundColor:'rgb(255,99,71)'
            }).stop().animate({
                height:'131px',
                opacity:'1'
            },500)
            flag = false;
    } else if (sct===0 && !flag) {
        $('#header').css({
            position:'relative',
            height:'0',
            opacity:'0'
        }).stop().animate({
            opacity:1,
            height:'131px',
            backgroundColor:'rgb(255,99,71)'
        },500)
        flag=true
    }
//  not working

    

});



// 슬라이더 
    $('.slideInner').slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 5000, // 간격시간
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

        // $(".plpau").toggle(
        //     function(){
        //         $(this).find('i').removeClass('fa-pause')
        //         .addClass('fa-play')
        //         $(".slideInner").slick("slickPause")
        //     },
        //     function(){
        //         $(this).find('i').removeClass('fa-play')
        //         .addClass('fa-pause')
        //         $(".slideInner").slick("slickPlay")
        //     } 
        // )



//메뉴 4개 
    $(window).scroll(function(){
        var sct = $(this).scrollTop()


        var pic4Near = $('.backcolor').offset().top - $(this).height()/1.5

        if(sct >= pic4Near) {
            $('.pic4menu').addClass('on')
        }else {
            $('.pic4menu').removeClass('on')
        }
        
        var pic4Near =$('.cscenter').offset().top - $(this).height()/1.5
        
        if(sct >= pic4Near) {
            $('.board, .youtube, .contact').addClass('on')
        }else {
            $('.board, .youtube, .contact').removeClass('on')
        }
        
        var pic4Near =$('.businessInfo').offset().top - $(this).height()/1.5
        if(sct >= pic4Near) {
            $('.businessInfo').addClass('on')
        }else {
            $('.businessInfo').removeClass('on')
        }





        var sct = 0;
        sct=$(this).scrollTop();
        if (sct>=100) {
            $('.gotop').addClass('on').stop().animate({
                opacity: '1'
            },500)
        } else {
            $('.gotop').removeClass('on').stop().animate({
                opacity:'0'
            },500)
        }
    })

    // gotop버튼을 클릭하면 맨위로 움직이게 하기
    $('.gotop').on('click', function(){
        $('html, body').stop().animate({
            scrollTop : '0px'
        },700, 'linear')
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
    $('.backcolor .pic4menu .business > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })
    $('.backcolor .pic4menu .company > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })
    $('.backcolor .pic4menu .product > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })

    

    // // 버튼 소메뉴
    // $('#notice .background .costomenu a').on('click',function(e){
    //     e.preventDefault()
    //     var index = $(this).index()
    //     $(this).addClass('on')
    //     .siblings().removeClass('on')
    //     $('.notiPage > div').eq(index).show()
    //     .siblings().hide()
        
    // })

    // $('#notice .background_nd .costomenu button').each(function(i){
    //     $(this).find('button').on('click', function(e){
    //         e.preventDefault()
    //         $(this).parent().addClass('on')
    //         .siblings().removeClass('on')
    //         $('.notiPage .qnaBox').eq(i).fadeIn(100)
    //         .siblings().fadeOut(100)
    //     })
    // })



    // 미니슬라이드
    $(".profile_ullist").slick({
        autoplay:true,  // 자동재생
        autoplaySpeed:3000, // 간격시간
        dots:false, // 동그라미버튼
        speed:600, // 바뀌는시간(생략가능)
        centerMode:true,
        centerPadding:"90px",
        slidesToShow:3, // 보여질슬라이드수
        slidesToScroll:1, // 이동슬라이드수
        pauseOnHover:true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover:true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus:false,  // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase:'linear', // 속도함수(생략가능)
        draggable:true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade:false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows:true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
        responsive:[{
                breakpoint: 800,
                settings:{
                        centerMode:true,
                        centerPadding:"100px",
                        slidesToShow:1, // 보여질슬라이드수(생략가능)
                }
        }]
})



// main product
var lieq;   // 전역변수
$(".product_list > li > a").on("click", function(e){
        e.preventDefault();
        lieq = $(this).parent().index()
        var href = $(this).attr("href")
        var src = $(this).attr("data-src")
        var text = $(this).find("h3").text()
        var info = $(this).find("p").text()
        var alt = $(this).find("img").attr("alt")
        $(".popupBox").addClass("on")
        if (winWidth <= 799 ) {
                var litop = $(this).parent().offset().top;
                $(".popupBox  .inner").css({
                        top:litop,
                        width:"80%",
                        left:"0%",
                        transform:"translate(0%)",
                        margin:"0  10%"
                })
        }
        $(".popupBox   .inner  h3").text(text)
        $(".popupBox   .inner   p").text(info)
        $(".popupBox   .inner   div  a").attr("href", href)
        $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
})

$(".popupBox  button.close").on("click", function(){
        $(this).parents(".popupBox").removeClass("on")
})

$(".popupBox   button.next").on("click", function(){
       ++lieq;     //   0, 1, 2, 0, 
       if ( lieq == $(".place_list >li").length ) {
               lieq = 0;
       }
       var href = $(".product_list > li").eq(lieq).find("a").attr("href")
        var src = $(".product_list > li").eq(lieq).find("a").attr("data-src")
        var text = $(".product_list > li").eq(lieq).find("a").find("h3").text()
        var info = $(".product_list > li").eq(lieq).find("a").find("p").text()
        var alt = $(".product_list > li").eq(lieq).find("a").find("img").attr("alt")
       $(".popupBox   .inner  h3").text(text)
       $(".popupBox   .inner   p").text(info)
       $(".popupBox   .inner   div  a").attr("href", href)
       $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
})

$(".popupBox   button.prev").on("click", function(){
        --lieq;     //   2, 1, 0, 2, 1, 0
        if ( lieq < 0 ) {
                lieq = 2;
        }
        var href = $(".product_list > li").eq(lieq).find("a").attr("href")
         var src = $(".product_list > li").eq(lieq).find("a").attr("data-src")
         var text = $(".product_list > li").eq(lieq).find("a").find("h3").text()
         var info = $(".product_list > li").eq(lieq).find("a").find("p").text()
         var alt = $(".product_list > li").eq(lieq).find("a").find("img").attr("alt")
        $(".popupBox   .inner  h3").text(text)
        $(".popupBox   .inner   p").text(info)
        $(".popupBox   .inner   div  a").attr("href", href)
        $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
 })

















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
