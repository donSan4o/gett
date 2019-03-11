// Page init function
$(document).ready(initPage);

function initPage() {
    if(localStorage.getItem('popState') != 'shown') {
        localStorage.setItem('popState','shown');
        var counter = 0;
        function updateCounter(){
            if(counter == 101){
                clearInterval(foo);
                $('.loadingpage').show().addClass("pageisloaded");
            }
            else{
                $('.counter span').html(counter);
                counter++;
            }
        }
        
    } else {
        $('.loadingpage').hide().removeClass("pageisloaded");
    }
    var foo = setInterval(updateCounter , 20);

    $('#fullpage').fullpage({
        responsiveHeight: '700',
        responsiveWidth: '769',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        fixedElements: '#header, #fixed-bg',
        anchors: ['main', 'about', 'conditions', 'contacts', 'connect'],
        menu: '#myMenu, #footer-menu',
        offsetSections: true,
        scrollOverflow: true
    });
    $('.menu-mobile').click(function () {
        $(this).toggleClass('back');
    	$('.fader').toggleClass('show');
    	$('#myMenu').toggleClass('show-menu');
    });
    $('.fader').click(function () {
    	$('.fader').removeClass('show');
    	$('#myMenu').removeClass('show-menu');
        $('.menu-mobile').removeClass('back');
    });
    $('#myMenu a').click(function() {
    	$('#myMenu').removeClass('show-menu');
    	$('.fader').removeClass('show');
        $('.menu-mobile').removeClass('back');
    });
    $('.slider-about').owlCarousel({
        animateOut: 'animated',
        animateIn: 'animated',
        items:1,
        nav:true,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
    $('.slider-conditions').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        nav:false,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
    $('.slider-about .owl-dot').each(function(){
        $(this).children('span').text($(this).index()+1);
    });
}