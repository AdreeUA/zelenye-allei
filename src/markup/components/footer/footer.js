var
    $trees = $('.map-tree'),
    $placeInput = $('#place-number'),
    $map = $('.map'),
    $mapPopup = $('.j-map-popup'),
    $mapBtn = $('.j-map-btn'),
    $mapNum = $('.j-map-num'),
    num;

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

