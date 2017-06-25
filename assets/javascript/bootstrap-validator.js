$(document).ready(function() {
    $('#registrationForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        err: {
            // You can set it to popover
            // The message then will be shown in Bootstrap popover
            container: 'tooltip'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The e-mail address is required'
                    },
                    emailAddress: {
                        message: 'Is not a valid email address'
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Invalid e-mail address'
                    }
                }
            },
        }
    })
        .on('err.field.fv', function(e, data) {
            // Get the tooltip
            var $icon = data.element.data('fv.icon'),
                title = $icon.data('bs.tooltip').getTitle();

            // Destroy the old tooltip and create a new one positioned to the right
            $icon.tooltip('destroy').tooltip({
                html: true,
                placement: 'bottom',
                title: title,
                container: 'body'
            });
        });


});
