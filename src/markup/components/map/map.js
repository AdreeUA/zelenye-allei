import 'static/js/plugins/panzoom/dist/jquery.panzoom';

$(document).ready(function () {
    var mapPlus = $('.js-map-plus'),
        mapMinus = $('.js-map-minus'),
        mapInner = $('.map__inner'),
        $mapPopup = $('.j-map-popup');

    mapInner.panzoom({
        increment: 0.4,
        minScale: 0.1,
        maxScale: 2,
        duration: 500,
    });

    mapPlus.click(function(){
        mapInner.panzoom("zoom");
        $mapPopup.hide();
    });

    mapMinus.click(function(){
        mapInner.panzoom("zoom", true);
        $mapPopup.hide();
    });
});