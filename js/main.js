
var $ = jQuery; 

   function SignupClick(e) {
        e.preventDefault();
        localStorage.setItem('isCalledFromIndex', true);
        window.location = "index.html";
    }

$(document).ready( function () {

	// отслеживаем изменение инпута file
	$('#file').change(function(){
	// Если файл прикрепили то заносим значение value в переменную
	var fileResult = $(this).val();
	// И дальше передаем значение в инпут который под загрузчиком
	$(this).parent().find('.fileLoad').find('input').val(fileResult);
	});

    $('.tab-nav').children('li:nth-child(1)').children('a').click( function (){
       if($('.tab-nav').children('li:nth-child(3)').hasClass('ui-state-active') ||
          $('.tab-nav').children('li:nth-child(2)').hasClass('ui-state-active') ||
          $('.tab-nav').children('li:nth-child(4)').hasClass('ui-state-active')){
         console.log('Урррар111');

        $('.ui-state-default[aria-labelledby^=ui-id-1]').addClass('ui-tabs-active ui-state-active');
        $('.ui-state-default[aria-labelledby^=ui-id-1]').attr('tabindex', '0');
        $('.ui-state-default[aria-labelledby^=ui-id-1]').attr('aria-selected', 'true');
        $('.ui-state-default[aria-labelledby^=ui-id-1]').attr('aria-expanded', 'true');

        $('.tab-content[aria-labelledby^=ui-id-1]').css('display', 'block');
        $('.tab-content[aria-labelledby^=ui-id-1]').attr('aria-hidden', 'false');
       }

    });

    
    $('.nav-prof').click( function (){

    if($('.tab-nav').children('li:nth-child(3)').hasClass('ui-state-active')){
          console.log('Урррара');
          $('.ui-state-default[aria-labelledby^=ui-id-3]').removeClass('ui-tabs-active ui-state-active');
          $('.ui-state-default[aria-labelledby^=ui-id-3]').attr('tabindex', '-1');
          $('.ui-state-default[aria-labelledby^=ui-id-3]').attr('aria-selected', 'false');
          $('.ui-state-default[aria-labelledby^=ui-id-3]').attr('aria-expanded', 'false');

          $('.tab-content[aria-labelledby^=ui-id-3]').css('display', 'none');
          $('.tab-content[aria-labelledby^=ui-id-3]').attr('aria-hidden', 'true');
    }

    else if($('.tab-nav').children('li:nth-child(2)').hasClass('ui-state-active')){
          console.log('Урррара');
          $('.ui-state-default[aria-labelledby^=ui-id-2]').removeClass('ui-tabs-active ui-state-active');
          $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('tabindex', '-1');
          $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('aria-selected', 'false');
          $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('aria-expanded', 'false');

          $('.tab-content[aria-labelledby^=ui-id-2]').css('display', 'none');
          $('.tab-content[aria-labelledby^=ui-id-2]').attr('aria-hidden', 'true');
    }

    else if($('.tab-nav').children('li:nth-child(4)').hasClass('ui-state-active')){
          console.log('Урррара');
          $('.ui-state-default[aria-labelledby^=ui-id-4]').removeClass('ui-tabs-active ui-state-active');
          $('.ui-state-default[aria-labelledby^=ui-id-4]').attr('tabindex', '-1');
          $('.ui-state-default[aria-labelledby^=ui-id-4]').attr('aria-selected', 'false');
          $('.ui-state-default[aria-labelledby^=ui-id-4]').attr('aria-expanded', 'false');

          $('.tab-content[aria-labelledby^=ui-id-4]').css('display', 'none');
          $('.tab-content[aria-labelledby^=ui-id-4]').attr('aria-hidden', 'true');
    }

    

    console.log('Gwwww'); 
    });

    $('.tab_request').click(function(e){

        e.preventDefault();
        var elem = $('body');
        $('html, body').animate({ scrollTop: elem.offset().top }, 50);
        $('.tab-content').css('display', 'none');
        $('.tab-content[aria-labelledby^=ui-id-3]').css('display', 'block');
        $('.tab-content[aria-labelledby^=ui-id-3]').attr('aria-hidden', 'false');
        
        $('.ui-state-default').removeClass('ui-tabs-active ui-state-active');
        $('.ui-state-default').attr('tabindex', '-1');
        $('.ui-state-default').attr('aria-selected', 'false');
        $('.ui-state-default').attr('aria-expanded', 'false');

        $('.ui-state-default[aria-labelledby^=ui-id-3]').addClass('ui-tabs-active ui-state-active');
        $('.ui-state-default[aria-labelledby^=ui-id-3]').attr('tabindex', '0');
        $('.ui-state-default[aria-labelledby^=ui-id-3]').attr('aria-selected', 'true');
        $('.ui-state-default[aria-labelledby^=ui-id-3]').attr('aria-expanded', 'true');


    });

    $('.edit-profile').click(function(e){
    
        e.preventDefault();
        var elem = $('body');

        $('html, body').animate({ scrollTop: elem.offset().top }, 50);
        $('.tab-content').css('display', 'none');
        $('.tab-content[aria-labelledby^=ui-id-2]').css('display', 'block');
        $('.tab-content[aria-labelledby^=ui-id-2]').attr('aria-hidden', 'false');
        
        $('.ui-state-default').removeClass('ui-tabs-active ui-state-active');
        $('.ui-state-default').attr('tabindex', '-1');
        $('.ui-state-default').attr('aria-selected', 'false');
        $('.ui-state-default').attr('aria-expanded', 'false');

        $('.ui-state-default[aria-labelledby^=ui-id-2]').addClass('ui-tabs-active ui-state-active');
        $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('tabindex', '0');
        $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('aria-selected', 'true');
        $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('aria-expanded', 'true');


    });
    
    $('.see-details').click(function(e){
      
        e.preventDefault();
        var elem = $('body');

        $('html, body').animate({ scrollTop: elem.offset().top }, 50);
        $('.tab-content').css('display', 'none');
        $('.tab-content[aria-labelledby^=ui-id-4]').css('display', 'block');
        $('.tab-content[aria-labelledby^=ui-id-4]').attr('aria-hidden', 'false');
        
        $('.ui-state-default').removeClass('ui-tabs-active ui-state-active');
        $('.ui-state-default').attr('tabindex', '-1');
        $('.ui-state-default').attr('aria-selected', 'false');
        $('.ui-state-default').attr('aria-expanded', 'false');

        $('.ui-state-default[aria-labelledby^=ui-id-4]').addClass('ui-tabs-active ui-state-active');
        $('.ui-state-default[aria-labelledby^=ui-id-4]').attr('tabindex', '0');
        $('.ui-state-default[aria-labelledby^=ui-id-4]').attr('aria-selected', 'true');
        $('.ui-state-default[aria-labelledby^=ui-id-4]').attr('aria-expanded', 'true');

    });

    
    $('.up-fil-img').click(function(){
    $('#fileload-profil,#bg-form-fail').css('display','block');

    $('.file-load-block').children('input[type="file"]').change(function () {
        var file = this.files; //Files[0] = 1st file
        if (file[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(file[0], 'UTF-8');
            reader.onload = function (event) {
                var result = event.target.result;

                $('.img-save').click(function(){
                if($('#title-img').val() == ''){
                   $('#title-img').addClass('error');
                   return false;
                } else {
                   $('#fileload-img').attr('src', event.target.result);
                   $('.phot').attr('src', event.target.result);
                   $('#fileload-profil,#bg-form-fail').css('display','none');
                }

                });

            };
        }
    });

    });

    $('.img-cancell').click(function(){
    $('#fileload-profil,#bg-form-fail').css('display','none');
    });
    

    $('.signup-active').click(function(){
        $('.panel-body.signup').css('display', 'block');
        $('.panel-body.login').css('display', 'none');
    });

    $('.login-active').click(function(){
        $('.panel-body.signup').css('display', 'none');
        $('.panel-body.login').css('display', 'block');
    });

    $('#login-form-submit').click(function(e){
        e.preventDefault();
        window.location = "index.html";
    });

    $('#signup-form-submit').bind('click', SignupClick);


    var isCalledFromIndex = localStorage.getItem('isCalledFromIndex');
    var isCalledFromOtherPage = false;

        if (isCalledFromIndex) {
         isCalledFromOtherPage = true;
        } else {
         isCalledFromOtherPage = false;
        }

        if (isCalledFromOtherPage) {

        console.log('Ehhdhfhfffdf');

        $('.tab-content').css('display', 'none');
        $('.tab-content[aria-labelledby^=ui-id-2]').css('display', 'block');
        $('.tab-content[aria-labelledby^=ui-id-2]').attr('aria-hidden', 'false');
        
        $('.ui-state-default').removeClass('ui-tabs-active ui-state-active');
        $('.ui-state-default').attr('tabindex', '-1');
        $('.ui-state-default').attr('aria-selected', 'false');
        $('.ui-state-default').attr('aria-expanded', 'false');

        $('.ui-state-default[aria-labelledby^=ui-id-2]').addClass('ui-tabs-active ui-state-active');
        $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('tabindex', '0');
        $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('aria-selected', 'true');
        $('.ui-state-default[aria-labelledby^=ui-id-2]').attr('aria-expanded', 'true');

          isCalledFromOtherPage = false;
          localStorage.removeItem('isCalledFromIndex');

        } else {
            return false;
        }

	

});