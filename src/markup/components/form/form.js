import 'select2/dist/js/select2.min.js'
import 'static/js/plugins/jquery-validate/jquery.validate';
import 'static/js/plugins/jquery-validate/jquery.validate.extend';

$(document).ready(function () {
    var $form = $('.form'),
        $selects = $('.form__select');

    $selects.select2();

    $form.validate({
        rules: {
            phone: {
                required: true,
                tel: true
            },
            number: {
                required: true,
                number: true
            }
        }
    });
});