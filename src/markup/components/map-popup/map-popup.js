(function ($) {
    $(document).ready(function () {
        var
            $placeInput = $('#number'),
            $mapBtn = $('.j-map-btn');

        var $icon = $('.map__icon'),
            $mapPopup = $('.j-map-popup'),
            $mapPopupText = $('.map-popup__header'),
            $mapNum = $('.j-map-num'),
            $map = $('.map'),
            num;

        $icon.mouseenter(function(e) {

            var $this = $(this),
                $iconTitle = $this.attr('data-title');

            num = $this.attr('data-num');

            if ( $(this).hasClass('map__icon_disable') ) {
                return;
            }


            $mapNum.html(num);
            $mapPopupText.html($iconTitle);
            $mapPopup.css('top', $(this).offset().top - $mapPopup.height()).css('left', $(this).offset().left - $mapPopup.width() / 2);
            $mapPopup.show();

        });

        $map.mouseleave(function(e) {
            // $mapPopup.hide();
        });

        $mapBtn.click(function() {
            $placeInput.val(num);
            $('html, body').animate({
                scrollTop: 9999
            }, 1000);
        });

    })
})(jQuery);