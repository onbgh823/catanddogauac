(function($){

    $(window).load(function(){
        $('.introAni').delay(700).fadeOut(700)
        // paw 깜빡거림
        
    })

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
    var colorCode =['red','blue','green','yellow','lime']
    var minCnt = setInterval(minusCount, 1000)
    var i = 5;
    function minusCount() {
        i--;
        if (i===0) {
            clearInterval(minCnt)
            $('.introAni').fadeOut(500)
            return false
        }
        $('.introAni i').text(k+'sec');
        $('.introAni i').css({
            color:colorCode[i]
        })
    }
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

    $('.topmenu .login > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })
    // 메뉴바에서 들어가기 공지사항
    $('.nav .depth1 .depth2 > li > a, .nav.depth1 > li > a, .sitemenu_box .depth1 .depth2 > li > a').on('click', function(e){
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

 

})(jQuery)


// index.html 의 js jq는 여기에