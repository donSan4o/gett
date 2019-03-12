// Page init function
$(document).ready(initPage);

function initPage() {
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
    	$('.fader').toggleClass('show');
    	$('#myMenu').toggleClass('show-menu');
    });
    $('.fader').click(function () {
    	$('.fader').removeClass('show');
    	$('#myMenu').removeClass('show-menu');
    });
    $('#myMenu a').click(function() {
    	$('#myMenu').removeClass('show-menu');
    	$('.fader').removeClass('show');
    });
    $('.slider-about').owlCarousel({
        animateOut: 'fadeOutDown',
        animateIn: 'fadeInUp',
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