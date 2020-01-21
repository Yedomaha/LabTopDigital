'use strict';

jQuery(window).bind('load', function () {
    console.log('hello!');

    var windowinnerHeight = $(window).innerHeight();
    var pageBottom = $(this).scrollTop() + windowinnerHeight - 100;

    function animations(){
        $('.showAnimation--hidden').each(function () {
            showAnim($(this), 'showAnimation', 'showAnimation--hidden');
        });

        $('.line-animation--hidden').each(function () {
            showAnim($(this), 'line-animation', 'line-animation--hidden');
        });

        $('.beforeAnim--hidden').each(function () {
            showAnim($(this), 'beforeAnim', 'beforeAnim--hidden');
        });
    }

    function showAnim($this, firstClass, secondClass){
        var currentOffsetTop = $this.offset().top;
        if(currentOffsetTop < pageBottom){
            $this.addClass(firstClass).removeClass(secondClass);
        }
    }

    animations();

    $(window).scroll(function () {
        console.log(pageBottom);
        windowinnerHeight = $(window).innerHeight() + 100;
        pageBottom = $(this).scrollTop() + windowinnerHeight;
        animations();

    });
  
});