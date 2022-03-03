
$(document).ready(function(){

    window.sr = ScrollReveal({ duration: 1000 });
    sr.reveal('h1');
    sr.reveal('h2');
    sr.reveal('p');
    sr.reveal('h3');


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#to-top-button').fadeIn();
        } else {
            $('#to-top-button').fadeOut();
        }
    });
    $('#to-top-button').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('.border').modal();

    });







