/**
 * Created by doriniosifescu on 25/06/2017.
 */
$(document).ready(function() {
    $('#signupForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                row: '.col-lg-6 col-xs-6',
                validators: {
                    notEmpty: {
                        message: 'Input field is required.'
                    }
                }
            },
            last_name: {
                row: '.col-lg-6 col-xs-6',
                validators: {
                    notEmpty: {
                        message: 'Input field is required.'
                    }
                }
            },
            company: {
                validators: {
                    notEmpty: {
                        message: 'Input field is required'
                    }
                }
            },
            email_address: {
                err: 'tooltip',
                validators: {
                    notEmpty: {
                        message: 'Email field is required'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$'
                    }
                }
            }
        }
    })
        .on('err.validator.fv', function (e, data) {
            // data.bv        --> The FormValidation.Base instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            if (data.field === 'email') {
                // The email field is not valid
                data.element
                    .data('fv.messages')
                    // Hide all the messages
                    .find('.help-block[data-fv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                    .filter('[data-fv-validator="' + data.validator + '"]').show();
            }
        });
});