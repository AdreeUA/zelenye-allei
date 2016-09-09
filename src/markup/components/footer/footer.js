var
    $trees = $('.map-tree'),
    $placeInput = $('#place-number');

$trees.click(function() {
    var place = $(this).attr('data-num');
    $placeInput.val(place);
});
