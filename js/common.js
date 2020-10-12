(function($){
    



    $(window).load(function(){
        $('.introAni').delay(700).fadeOut(700)
        // paw 깜빡거림
        
    })

    
// 메뉴들 후버후 마우스 이동시 문제발생!!

    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )

    // 인덱스 introAni
    // setInterval 1초에 한번씩 가동 숫자를 -1씩 감소시키는 text method, clearInterval
    //setInterval을 1초에 한번씩 숫자를 -1씩 감소시키는 함수를 불러서 span에 감소된 숫자를 text()로 써줌. 숫자값이 0가 되면 clearInterval시키고, .introAni를 fadeOut(500)

    //54321 count
    // var minCnt = setInterval(minusCount, 1000)
    // var k = 5;
    // function minusCount() {
    //     k--;
    //     if (k===0) {
    //         clearInterval(minCnt)
    //         $('.introAni').fadeOut(500)
    //         return false
    //     }
    //     $('.introAni span').text(k+'sec');
    // }

    // 글자색 랜덤, 활용가능
    // var colorCode =['red','blue','green','yellow','lime']
    // var minCnt = setInterval(minusCount, 1000)
    // var i = 5;
    // function minusCount() {
    //     i--;
    //     if (i===0) {
    //         clearInterval(minCnt)
    //         $('.introAni').fadeOut(500)
    //         return false
    //     }
    //     $('.introAni i').text(k+'sec');
    //     $('.introAni i').css({
    //         color:colorCode[i]
    //     })
    // }
// paw 깜빡거리게
    // var colorCode =['tomato','white']
    // var minCnt = setInterval(blink, 500)
    // var k = 2
    // function blink() {
    //     k--;
    //     if (k===0) {
    //         clearInterval(minCnt)
    //         $('.introAni').fadeOut(100)
    //         return false
    //     }
    //     // $('.introAni span').text(k+'sec');
    //     $('.introAni i').css({
    //         color:colorCode[k]
    //     })
    // }


    $('#leeBox').load('main.html')

    // $('.topmenu .login > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })
    // 메뉴이동
    $('.topmenu .login > a').on('click', function(){
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
        return false
    })
    // 메뉴바에서 들어가기 공지사항
    $('.nav .depth1 .depth2 > li > a, .nav .depth1 > li > a, .sitemenu_box .depth1 .depth2 > li > a, .sitemenu_box .depth1 > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })

    // 로고부분
    // $('.logoNav > h1 > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })

// -------------------------------

// ----------------------------------



     //0922
    // 공지사항페이지 로드하는거 헤더와 풋터가 나타남
    // $('.tabTit > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })
    
    // $('.backcolor .pic4menu .costomer > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })
    // $('.backcolor .pic4menu .business > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })
    // $('.backcolor .pic4menu .company > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })
    // $('.backcolor .pic4menu .product > a').on('click', function(e){
    //     e.preventDefault()
    //     var url = $(this).attr('href')
    //     $('#leeContainer').remove()
    //     $('#leeBox').load(url)
    // })






// ---------------------------------

// 0922
// 스크롤이벤트는 html, body 태그가 있는 온전한 페이지 index.html에서만 작동되므로 common.js 파일로 합치는게 맞습니다.

    // common.js 에 모든 페이지의 스크롤이벤트를 합쳐 놓는다.
    // var sct;
    $(window).scroll(function(){
        sct = $(this).scrollTop()


        





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


        // if( $('#leeContainer').children().is('#section')) {
        //     mainScroll()
        // }
    })

    // function mainScroll() {
    //     var serviceNear = $('.service').offest().top -$(window).height()/2
    //     if (sct>= servicedNear){
    //         $(''.content')
    //     }
    // }
    




    // 0922
 //top scoll bar
	// 스크롤탑값에 따라 헤더아래쪽 선의 넓이 변경하기    
    var sct;
    var flag = true;
    $(window).on('scroll',function() {
        var scrollSize = $(document).height() - $('#header').height() - $(window).height();
        sct = $(this).scrollTop();
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

    if($('#leeContainer').children().is('#section')) {
        mainScroll()
    }

});

    function mainScroll(){

        var pic4Near = $('.backcolor').offset().top - $(this).height()/1.5

        if(sct >= pic4Near) {
            $('.pic4menu').addClass('on')
        }else if (sct===0) {
            $('.pic4menu').removeClass('on')
        }
        
        var pic4Near =$('.cscenter').offset().top - $(this).height()/1.5
        
        if(sct >= pic4Near) {
            $('.board, .youtube, .contact').addClass('on')
        }else if (sct===0){
            $('.board, .youtube, .contact').removeClass('on')
        }
        
        var pic4Near =$('.businessInfo').offset().top - $(this).height()/1.5
        if(sct >= pic4Near) {
            $('.businessInfo').addClass('on')
        }else if (sct===0){
            $('.businessInfo').removeClass('on')
        }

    }


     // 0922
    // gotop버튼을 클릭하면 맨위로 움직이게 하기
    // $('.gotop').on('click', function(){
    //     $('html, body').stop().animate({
    //         scrollTop : '0px'
    //     },700, 'linear')
    // })


     // 햄버거버튼 클릭시 네비박스 나타나기
  $('.logoNav .open_nav').on('click', function(){
    $(this).next().stop().slideDown(300)
    $(this).hide()
    $(this).nextAll('.close_nav').css({display:'block'})
  })

  // 닫기버튼 클릭시 네비박스 사라지기
  $('.logoNav .close_nav').on('click', function(){
    $(this).prev().stop().slideUp(300)
    $(this).hide()
    $(this).prevAll('.open_nav').css({display:'block'})
    $('.depth2').hide()
    $('.logoNav .nav .depth1 > li').removeClass('on')
  })

})(jQuery)


// index.html 의 js jq는 여기에