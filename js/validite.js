(function($){

        // val() : input 상자에 입력된 값을 추출
    // length : 변수에 담긴 글자수나 배열의 갯수 추출(카운트)
    // minlength 속성 : 최소글자수(호환성 낮음)
    // maxlength 속성 : 최대글자수
    // focus() : 커서를 위치시킴
    // select() : 범위를 지정함
    // charAt() : 해당 위치의 문자를 반환(p.128~p.129)

    $('form').submit(function(){  // submit 이벤트는 폼에서 발생함
        

        // 이메일 유효성 체크
        var email = $('#email_lbl').val()
        var emailchk = /^[a-zA-Z0-9]+$/   // 특수문제 제외 
        if ( !emailchk.test(email) ) {
            alert('이메일 형식이 틀립니다.')
            $('#email_lbl').focus()
            $('#email_lbl').select()
            return false
        }

         // 도메인타입 유효성 체크
         var domain = $('.domain').val()
         var domainchk = /^[a-zA-Z0-9]+[\.][a-z]+$/
         if ( domain.length === 0 ) {
             alert('도메인을 선택해 주세요.')
             $('#email_choisi').focus()
             return false
         } else {
             if ( !domainchk.test(domain) ) {
                 alert('형식에 맞지 않습니다.')
                 $('#email_choisi').focus()
                 return false
             }
         }



        // 아이디 유효성 체크 : 글자수는 3~5, 특수문자제외
        var idtxt = $('#id_lbl').val()   // tsalt
        if ( idtxt.length>=3 && idtxt.length<=10 ) {
            for ( var i=0; i<idtxt.length; i++ ) {
                var ch = idtxt.charAt(i);
                if ( !(ch>='0' && ch<='9') && !(ch>='a' && ch<='z') && !(ch>='A' && ch<='Z')  ) {
                    alert('아이디는 대소문자, 숫자만 가능합니다.')
                    $('#id_lbl').css({
                        border:'1px solid #f00'
                    })
                    $('#id_lbl').focus()
                    $('#id_lbl').select()
                    return false
                }
            }
        } else {
            alert('아이디는 3~10글자 범위입니다.')
            $('#id_lbl').css({
                border:'1px solid #f00'
            })
            $('#id_lbl').focus()
            $('#id_lbl').select()
            return false
        }


        // 이름은 한글만 입력(정규표현식 p.612~p.613)
        // ^ : 시작 표시
        // $ : 끝 표시
        // + : 한번 이상 포함
        // 정규표현식.test(입력한내용) : 정규표현식에 맞는지 내용을 검사
        var corirum = $('#name_lbl').val()
        var corirumch = /^[가-힣]+$/
        if ( !(corirumch.test(corirum)) ) {
            alert('한글이 아닙니다.')
            $('#name_lbl').focus()
            $('#name_lbl').select()
            return false
        }

        var alpairum = $('#en_name_lbl').val()
        var alpairumch = /^[a-zA-Z0-9]+$/
        if ( !(alpairumch.test(alpairum)) ) {
            alert('영문이 아닙니다.')
            $('#en_name_lbl').focus()
            $('#en_name_lbl').select()
            return false
        }

        

       
        

        //비밀번호 유효성 체크 : 첫글자는 대소문자만, 영문, 반드시 숫자, 특수문자 중 2가지 이상 조합해서 10~12글자 범위
        var pass1 = $('#motdepasse_lbl').val()
        var pass2 = $('#motdepasseok_lbl').val()
        var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/ //대소문자,특수문자,숫자
        //첫글자는 영문 대소문자만  ?= :이라는 뜻은 처음부터 조사해라
        // . : 임의의 모든 문자(숫자, 특수문자, 대소문자)
        // * : 0번 이상 나올 수 있음 
        // ^ : 대괄호([]) 안의 ^는 not을 의미함
        if(pass1.length>=10 && pass1.length<=12) {    //범위
            if(!check1.test(pass1)) {
                alert('비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.')
                $('#motdepasse_lbl').css({
                    border:'1px solid #f00'
                })
                $('#motdepasse_lbl').focus()
                $('#motdepasse_lbl').select()
                return false
            }
        } else {
            alert('비밀번호 글자수는 10글자~12글자 범위입니다')
            $('#motdepasse_lbl').css({
                border:'1px solid #f00'
            })
            $('#motdepasse_lbl').focus()
            $('#motdepasse_lbl').select()
            return false
        }

        //비밀번호와 비밀번호확인 일치여부 점검
        //비밀번호 확인란이 비어있으면 "비밀번호 확인을 입력하지 않있습니다." 경고창 띄우고, 다른 오류표시 동일하게 할것
        //일치하지 않으면 "비밀번호를 정확히 입력해 주세요." 경고창 띄우고, 나머지는 다른 오류표시와 동일하게 할것
        
        if( pass2.length ===0) {
            alert('비밀번호 확인을 입력하지 않있습니다.')
            $('#motdepasseok_lbl').css({
                border:'1px solid #f00'
            })
            $('#motdepasseok_lbl').focus()
            $('#motdepasseok_lbl').select()
            return false
        } else if( pass1 !== pass2) {
            alert('비밀번호를 정확히 입력해 주세요.')
            $('#motdepasseok_lbl').css({
                border:'1px solid #f00'
            })
            $('#motdepasseok_lbl').focus()
            $('#motdepasseok_lbl').select()
            return false
        }



        // //성별을 선택하지 않으면 '성별을 선택해 주세요.라는 문구를 .gender에 표시하고 글자색상을 #f00 으로 할것
        // //성별을 선택하고 나면 .gender의 문구를 '성별'로 표시하고 글자색상을 #000으로 할것
        // var gender = $('input[name="gender"]:checked').length // 체크된 라디오버튼 갯수 추출
        //     if (gender===0) {
        //         $('.gender_area').text('성별을 선택해 주세요.').css({color:'#f00',paddingLeft:'200px'})
        //         return false
        //     } else {
        //         $('.gender_area').text('성별').css({color:'#000'})
        //         // else문은 return false 빼야합니다
        //     }

            //휴대폰번호, 첫번째칸은 01(0~9), 두번째칸은 숫자(3~4)개, 세번째칸은 숫자4개
            var tel1 = $('#tel1').val()
            var tel2 = $('#tel2').val()
            var tel3 = $('#tel3').val()
            if ( !/^01\d{1}$/.test(tel1) ) {
                alert('번호형식에 맞지 않습니다.')
                $('#tel1').focus()
                $('#tel1').select()
                return false
            } else if (!/^\d{3,4}$/.test(tel2) ) {
                alert('번호형식에 맞지 않습니다.')
                $('#tel2').focus()
                $('#tel2').select()
                return false
            } else if (!/^\d{4}$/.test(tel3)) {
                alert('번호형식에 맞지 않습니다.')
                $('#tel3').focus()
                $('#tel3').select()
                return false
            }






        return false  // 유효성 체크후에는 제거할 것
    })


















    $('input').focus(function(){
        $(this).css({
            background:'#afd0db'
        })
    }).blur(function(){
        if ( $(this).val().length === 0 ) {
            $(this).css({
                border:'4px solid #afd0db',
                background:''
            })
        } else {
            $(this).css({
                border:'3px solid #000',
                background:''
            })
        }
    })
    
// 이메일 선택변경 내용채우기
$('#email_choisi').on('change',function(){
    $('#email_choisi option:selected').each(function () {
        if($(this).val()==='nonschoisi') {
            $('.domain').val('')
            $('.domain').attr('disabled', true)
        }else if ( $(this).val()==='self' ) {
            $('.domain').val('')
            $('.domain').attr('disabled', false)
        } else {
            $('.domain').val( $(this).val() )
            $('.domain').attr('disabled', true)
        }
    })
})

// email입력상자만 포커스 했을때 뒤에 "특수문자제외" 문구 표시하기
$('#email_lbl').focus(function(){
    $(this).after('<strong>특수문자제외</strong>')
}).blur(function(){
    $(this).next().remove()
})

// id입력상자만 포커스 했을때 뒤에 "필수항목입니다.글자수 3~10, 특수문자제외" 문구 표시하기
$('.idch').focus(function(){
    $(this).after('<strong>필수항목입니다. 글자수 3~10, 특수문자제외</strong>')
}).blur(function(){
    $(this).next().remove()
})

// 비밀번호 입력상자만 포커스 했을때 뒤에 "첫글자는 대소문자만, 영문, 반드시 숫자, 특수문자 중 2가지 이상 조합해서 10~12글자 범위" 문구 표시하기
$('.mdpch').focus(function(){
    $(this).after('<strong>첫글자는 대소문자만, 영문, 반드시 숫자, 특수문자 중 2가지 이상 조합해서 10~12글자 범위</strong>')
}).blur(function(){
    $(this).next().remove()
})
$('.mdpokch').focus(function(){
    $(this).after('<strong>비밀번호를 한번 더 입력해주세요</strong>')
}).blur(function(){
    $(this).next().remove()
})

// textarea 박스에서 키보드이벤트(keydown, keyup, keypress) 입력된 글자수를 카운트해서 남은글자 표시하기
$('textarea').on('keyup', function(){
    var maxlen = 100
    var count = $(this).val().length
    var remain = maxlen - count
    $(this).next().text(remain)
})

// 통신사 선택변경 
$('#local_choisi').on('change',function(){
    $('#local_choisi option:selected').each(function () {
        if($(this).val()==='nonschoisi') {
            $('#local').val('')
            $('#local').attr('disabled', true)
        } else {
            $('#local').val( $(this).val() )
            $('#local').attr('disabled', true)
        }
    })
})
// 통신사 선택변경 
$('#telecom_choisi').on('change',function(){
    $('#telecom_choisi option:selected').each(function () {
        if($(this).val()==='nonschoisi') {
            $('#telecom').val('')
            $('#telecom').attr('disabled', true)
        } else {
            $('#telecom').val( $(this).val() )
            $('#telecom').attr('disabled', true)
        }
    })
})



// 생년월일에 datepicker 연결하기
$('#datenaissance').datepicker({ //jqueryui.com 에서 ui.css, ul.js images 파일로 옮겨라 main- stable 파일 다운로드
    dateFormat: 'yy-mm-dd', //날짜형식
    changeMonth: 'true', //월 선택가능
    changeYear: 'true', // 년도 선택가능
    yearRange: '1900:2020'//연도범위
})



// 취미 전체선택하기
$("#all").on("click", function () {
    var bool = $(this).prop("checked")
    $(".hobby_area > input:checkbox").prop("checked", bool);
})

// 스킬 전체선택하기
$("#tout").on("click", function () {
    var cool = $(this).prop("checked")
    $(".hobby_area > input:checkbox").prop("checked", cool);
})




})(jQuery)