(function($){

    $('#leeBox').load('main.html')

    $('.topmenu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#leeContainer').remove()
        $('#leeBox').laod(url)
    })

    

})(jQuery)