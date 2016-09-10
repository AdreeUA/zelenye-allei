import 'magnific-popup/dist/jquery.magnific-popup';

$('.cond-popup').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true
        //mainClass: ''
});


var
    $trees = $('.map-tree'),
    $placeInput = $('#place-number'),
    $map = $('.map'),
    $mapPopup = $('.j-map-popup'),
    $mapPopupText = $('.map-popup__header'),
    $mapBtn = $('.j-map-btn'),
    $mapNum = $('.j-map-num'),
    $condPopup = $('.j-cond-popup'),
    $mapTabs = $('.j-map-tabs'),
    num;

$trees.mouseenter(function(e) {
    if ( !$(this).hasClass('map-tree_disabled') ) {
        var
            $this = $(this),
            $icon = $this.find('.icons');

        num = $this.attr('data-num');

        if ( $icon.hasClass('icons_thuja') ) {
            $mapPopupText.html('Туя колоновидная');
        }
        else if ( $icon.hasClass('icons_maple') ) {
            $mapPopupText.html('Клен роял ред');
        }
        else if ( $icon.hasClass('icons_rowan') ) {
            $mapPopupText.html('Рябина обыкновенная');
        }
        else if ( $icon.hasClass('icons_sugar') ) {
            $mapPopupText.html('Липа евпопейская');
        }
        else if ( $icon.hasClass('icons_chestnut') ) {
            $mapPopupText.html('Каштан конский');
        }
        else if ( $icon.hasClass('icons_spruce') ) {
            $mapPopupText.html('Ель');
        }
        else if ( $icon.hasClass('icons_linden') ) {
            $mapPopupText.html('Липа евпопейская');
        }

        $mapNum.html(num);
        $mapPopup.show();
        $mapPopup.css('top', $(this).position().top ).css('left', $(this).position().left);
    }
});
$map.mouseleave(function(e) {
    $mapPopup.hide();
});

$mapBtn.click(function() {
    $placeInput.val(num);
    $('html, body').animate({
        scrollTop: 9999
    }, 1000);
});

$mapTabs.find('a').click(function(e) {
    var
        $this = $(this),
        link = $this.attr('href');

    $this.addClass('active').siblings().removeClass('active');
    $mapPopup.hide();
    $('.map, .map2').hide();
    $(link).fadeIn();

    e.preventDefault();

});
