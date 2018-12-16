import './scss/main.scss';

import 'bootstrap';

import './js/module.js';




document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});


jQuery(document).ready(function($) {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $(".active_first_block").removeClass("active_li").fadeIn('fast');
        } else {
            $(".active_first_block").addClass("active_li").fadeIn('fast');
        };

        if ($(this).scrollTop() > 100) {
            $(".active_sec_block").addClass("active_li").fadeIn('fast');
        } else {
            $(".active_sec_block").removeClass("active_li").fadeIn('fast');
        };




    });

    $(".nav-link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });;

});


