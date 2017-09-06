$(document).ready(function() {
    slider('.navibar-dots');
});
$('.navibar-dots .dot').each(function(index, val) {
    $(this).click(function(e) {
        clearInterval(setSlide);
        var length = $('.navibar-dots .dot').length - 1;
        var nextIndex = index;
        var nowIndex = $('.navibar-dots .dot.active ').index();
        var leftOffset = index * (-550) - 550;
        var imgLeftOffset = index * (-1920) - 1920;
        if (nextIndex === nowIndex)
            return false;
        if (nextIndex > nowIndex) {
            $('.Copywritings').animate({
                left: leftOffset
            }, 'slow', function() {});
            $('.bg-img').animate({
                left: imgLeftOffset
            }, 'slow', function() {});
        } else if (nextIndex < nowIndex) {
            $('.Copywritings').animate({
                left: leftOffset
            }, 'slow', function() {});
            $('.bg-img').animate({
                left: imgLeftOffset
            }, 'slow', function() {});
        }

        $('.navibar-dots .dot.active').removeClass('active');
        $('.navibar-dots .dot').eq(index).addClass('active');
        setSlide = setInterval(minSlide, 4000);
        setSlide;
    });
});
var minSlide = function() {
    bgImgs = $('.bg-img');
    dots = $('.navibar-dots .dot');
    var length = $('.bg-img img').length - 1;
    var activeDot = $('.navibar-dots .dot.active');
    var newImgleft = parseInt(bgImgs.css("left")) - 1920;
    newImgleft += "px";
    bgImgs.animate({
        left: newImgleft
    }, 'slow', function() {
        if (activeDot.index() == length - 2) {
            bgImgs.css('left', '-1920px');
            activeDot.removeClass("active");
            $('.navibar-dots .dot').eq(0).addClass('active');
        } else {
            activeDot.removeClass("active");
            activeDot.next().addClass("active");
        }
    });
}
var setSlide = setInterval(minSlide, 4000);

function slider() {
    fir = $('.navibar-dots .dot:first');
    firImg = $('.bgImgs .bg-img img:first');
    setSlide;
};