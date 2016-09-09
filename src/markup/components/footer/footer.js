var
    $trees = $('.map-tree'),
    $placeInput = $('#place-number');

$trees.click(function() {
    if ( !$(this).hasClass('map-tree_disabled') ) {
        var place = $(this).attr('data-num');
        $placeInput.val(place);
    }
    else {
        alert('К сожалению, данное место уже занято. Но вы можете выбрать другое.');
    }
});
