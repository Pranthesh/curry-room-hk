/* Language Dropdown */
$(document).ready(function(){
    // Toggle dropdown on globe click
    $(".lang-trigger").on("click", function(e){
        e.preventDefault();
        $("#langDropdown").fadeToggle(150);
    });

    // Close dropdown if user clicks anywhere else on the screen
    $(document).on("click", function(event){
        var $trigger = $(".lang-wrapper");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $("#langDropdown").fadeOut(150);
        }
    });
});

/* Language Dropdown Mobile*/
$(document).ready(function(){
    // Toggle dropdown on globe click
    $(".lang-trigger-mob").on("click", function(e){
        e.preventDefault();
        $("#langDropdownMob").fadeToggle(150);
    });

    // Close dropdown if user clicks anywhere else on the screen
    $(document).on("click", function(event){
        var $trigger = $(".lang-wrapper-mob");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $("#langDropdownMob").fadeOut(150);
        }
    });
});

/* Hero Slider */
$(".banner-slider").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    arrows: false
});

/* Inner page Hero Slider */
$(".inner-banner-slider").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    arrows: false
});


$(".dish-slider").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    arrows: true
});

function initSlick() {
    $(".our-menu-slider").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true, 
        arrows: false
    });
}

// initial load
initSlick();
 
$('.menu-tabs li').on('click', function () {
  if ($('.our-menu-slider').hasClass('slick-initialized')) {
    $('.our-menu-slider').slick('unslick'); // destroy
  }
    setTimeout(() => {
        initSlick(); // re-init
    }, 100); 
});


$(".about-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    arrows: true,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1400, // large laptops
            settings: {
                centerPadding: '200px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 991, // tablets / small laptops
            settings: {
                centerPadding: '120px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767, // tablets
            settings: {
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

jQuery(document).ready(function ($) {
    var header = $('.site-header');
    var stickyOffset = header.offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > stickyOffset) {
            header.addClass('is-sticky');
        } else {
            header.removeClass('is-sticky');
        }
    });
});

jQuery(document).ready(function ($) {
    $(document).on("click", ".tabler-menu", function (e) {
        e.stopPropagation();
 
        $("body").toggleClass("menu-fixed");
        $(".site-header-open").toggleClass("header-open");
    });
});

// Menu Tabs
$(document).ready(function () {
  $('.menu-tabs .tab').on('click', function () {
    const tab = $(this).data('tab');

    $('.menu-tabs .tab').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('active');
    $('#' + tab).addClass('active');

    // Auto scroll active tab into view (mobile)
    this.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  });
});


// Cookie Popup
(function ($) {
 
    $.cookieModel = {
        set: function(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        },
        get: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
            }
            return null;
        }
    };
 
    function openCookieModal() {
 
        // prevent duplicate modal
        if ($("#cookieOverlay").length) {
            $("#cookieOverlay").fadeIn();
            $("body").addClass("popup-open");
            return;
        }
 
        var en_content = 'We use cookies to enhance your experience on our website. By continuing to browse this website, you agree to the use of these cookies. If you do not consent to the use of such cookies, please modify your browser privacy settings. Please note that restricting cookies may impact the functionality of our website. For more details, please read our <a href="/privacy-policy.html" target="_blank">Privacy Policy</a>.';
 
        var zh_content = `我們使用 cookies 以提升閣下在本網站的體驗。 如繼續瀏覽本網站，即表示閣下允許使用 cookies。 如閣下不同意使用此類 cookies，請更改閣下的瀏覽器私隱設定。 請注意，如果限制 使用 cookies，可能會影響本網站的功能。如欲了解更多詳情，請參閱我們的 <a href="/zh/privacy-policy.html" target="_blank">私隱政策</a>`;
 
        var isZh = window.location.href.includes("/zh/");
        var content = isZh ? zh_content : en_content;
        var btnText = isZh ? "接受" : "Accept";
 
        $("body").append(`
            <div id="cookieOverlay">
                <div id="cookieModal">
                    <p>${content}</p>
                    <button id="acceptBtn" class="btn-secondary">${btnText}</button>
                </div>
            </div>
        `);
 
        $("#acceptBtn").on("click", function () {
            $.cookieModel.set("cookieConsent", "accepted", 30);
            $("#cookieOverlay").fadeOut();
            $("body").removeClass("popup-open");
        });
 
        $("body").addClass("popup-open");
    }
 
    // Show on first visit
    $(document).ready(function () {
        if (!$.cookieModel.get("cookieConsent")) {
            openCookieModal();
        }
    });
 
    $(document).on("click", ".cookies-setting", function (e) {
        e.preventDefault();
        openCookieModal();
    });
 
})(jQuery);