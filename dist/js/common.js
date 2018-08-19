;(function ($) {

    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {
        console.log($('.adapptive__img').scrollTop());
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1400) {
                $('.adapptive__img').addClass('slideInUp');
            } else {
                $('.adapptive__img').removeClass('slideInUp');
            }
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 3500) {
                $('.laptop__img').addClass('slideInUp');
            } else {
                $('.laptop__img').removeClass('slideInUp');
            }
        });
    });


    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function (e) {


    });
})(jQuery); // Fully reference jQuery after this point.
