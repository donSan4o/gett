
// Page init function
$(document).ready(initPage);

function debounce(func, delay) {
    // debounce onScroll preventDefault issue
    var timer;
    if (delay === undefined) {
        delay = 100;
    }
    return function() {
        var self = this, args = arguments;
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function() {
            func.apply(self, args);
        }, delay);
    };
};

var owl = $('.owl-carousel');

$.fn.proxyMoveAllowed = false;

var fullpage_opts = {
    // responsiveHeight: '700', //// turn on if need
    responsiveWidth: '769',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    fixedElements: '#header, #fixed-bg',
    anchors: ['main', 'about', 'conditions', 'contacts'],
    menu: '#myMenu, #footer-menu',
    scrollOverflow: true,
    normalScrollElements: '.slider-about, .slider-conditions',
    onLeave: function (origin, destination, direction) {
        current_slider = $(origin.item).has('.owl-carousel');
        if (current_slider.length) {
            return $.fn.proxyMoveAllowed;
        }
    }
};

function initPage() {
    // $.fn.fullpage
    $('#fullpage').fullpage(fullpage_opts);
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

    var connect_form_opts = {
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
    };
    $(".connect-form").validate(connect_form_opts);
}

$('.slider-about').owlCarousel({
    animateOut: 'fadeOutDown',
    animateIn: 'fadeInUp',
    items: 1,
    nav: false,
    margin: 0,
    stagePadding: 0,
    mouseDrag: false,
    loop: false,
    smartSpeed: 550,
});

$('.slider-about .owl-dot').each(function(){
    $(this).children('span').text($(this).index()+1);
});

$('.slider-conditions').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    nav: false,
    margin: 0,
    stagePadding: 0,
    mouseDrag: false,
    loop: false,
    dots: false,
    smartSpeed: 450,
});

var scrollStateM = {
    scheduledFrame: false,
    delta: 0,
    target: [],
    readAndUpdatePage: function (target) {
        self = this;
        self.scheduledFrame = true;
        current_slider = $(target);
        stage = $('.owl-stage', current_slider);
        if (self.delta < 0) {
            if (stage.children().last().hasClass('active')) {
                $.fn.proxyMoveAllowed = true;
                $.fn.fullpage.moveSectionDown();
            } else {
                $.fn.proxyMoveAllowed = false;
                current_slider.trigger('next.owl');
            }
        } else {
            if (stage.children().first().hasClass('active')) {
                $.fn.proxyMoveAllowed = true;
                $.fn.fullpage.moveSectionUp();
            } else {
                $.fn.proxyMoveAllowed = false;
                current_slider.trigger('prev.owl');
            }
        }
        this.unfreeze();
    },
    lastScrollY: function () {
        this.unfreeze();
        return window.scrollY;
    },
    unfreeze: function () {
        self = this;
        setTimeout(function () {
            self.scheduledFrame = false;
        }, 1000);
        // 1000 == animate.css: duration: 1s
    },
}
function mousewheel_owl_stage(event, pos, slider) {
    scrollStateM.delta = event.deltaY;
    if (scrollStateM.scheduledFrame) {return;}
    scrollStateM.readAndUpdatePage(slider);
    event.preventDefault();
}
owl.each(function(i, slider) {
    $(slider).closest('.section').on('mousewheel', function (event, pos) {
        mousewheel_owl_stage(event, pos, slider);
    });
})

