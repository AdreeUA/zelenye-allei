import 'magnific-popup/dist/jquery.magnific-popup';

$('.cond-popup').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        //mainClass: ''
});


var
    $trees = $('.map-tree'),
    $placeInput = $('#place-number'),
    $map = $('.map'),
    $mapPopup = $('.j-map-popup'),
    $condPopup = $('.j-map-popup'),
    $mapBtn = $('.j-map-btn'),
    $mapNum = $('.j-map-num'),
    num;

    $condPopup = $('.j-cond-popup'),

$trees.mouseenter(function(e) {
    if ( !$(this).hasClass('map-tree_disabled') ) {
        var
            $this = $(this);

        num = $this.attr('data-num');

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
});



