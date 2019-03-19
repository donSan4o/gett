
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
        scrollOverflow: true,
        normalScrollElements: '.slider-about, .slider-conditions',
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

    

    $(".connect-form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
            city: "required",
            
        },
        messages: {
            name: "Заполните полностью ФИО",
            email: "Введите свой email",
            phone: "Введите номер телефона",
            city: "Введите Ваш город",
            driveId: "Введите номер водительского удостоверения",
            autonum: "Ddtlbnt Гос. номер А/М",
            numberLicense: "Введите номер разрешения на перевозку",
            color: "Выберите цвет",
            autobrand: "Выберите марку авто",
            model: "Выберите модель",
            year: "Выберите год",
            paspname: "Введите фамилию имя отчество",
            date: "Введите дату рождения",
            country: "Выберите страну выдачи паспорта",
            passport: "Укажите серию и номер паспорта",
            bank: "Укажите БИК банка",
            numbercart: "Укажите номер счета получателя (Р/C)"
        }
    });
}

var owl = $('.owl-carousel');

$('.slider-about').owlCarousel({
    animateOut: 'fadeOutDown',
    animateIn: 'fadeInUp',
    items:1,
    nav:true,
    margin:0,
    stagePadding:0,
    smartSpeed: 550,
    loop: false
});
$('.slider-about .owl-dot').each(function(){
    $(this).children('span').text($(this).index()+1);
});

$('.slider-conditions').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    nav:false,
    margin:0,
    stagePadding:0,
    loop: false,
    smartSpeed: 450
});

owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});        