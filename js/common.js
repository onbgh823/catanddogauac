(function($){

    $('#leeBox').load('main.html')

    $('.topmenu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').laod(url)
    })
    // 로고부분
    $('.logoNav > h1 > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').load(url)
    })


})(jQuery)