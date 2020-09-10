(function($){

    $('#leeBox').load('main.html')

    $('.topmenu > .login > a').on('click', function(e){
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