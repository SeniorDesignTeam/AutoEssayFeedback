$(document).ready(function() {

    $('#register_form').form({
        on: 'blur',
        inline: true,
        fields: {
            firstname: {
                identifier  : 'firstname',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'First name cannot be empty.'
                    }
                ]
            },
            lastname: {
                identifier  : 'lastname',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Last name cannot be empty.'
                    }
                ]
            },
            email: {
                identifier  : 'email',
                rules: [
                    {
                        type   : 'email',
                        prompt : 'Please enter a valid e-mail address'
                    },
                    {
                        type   : 'empty',
                        prompt : 'Email cannot be empty.'
                    }
                ]
            },
            password: {
                identifier  : 'register_password',
                rules: [
                    {
                        type   : 'minLength[8]',
                        prompt : 'Your password must be at least {ruleValue} characters'
                    }
                ]
            },
            confirm: {
                identifier   : 'confirm',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Confirm password cannot be empty.'
                    }
                ]
            },
            match: {
                identifier  : 'confirm',
                rules: [
                    {
                        type   : 'match[register_password]',
                        prompt : 'Make sure that both passwords match.'
                    }
                ]
            }
        },
        onSuccess: function() {
            console.log('success!')
        }
    });

    function go_to_next() {
        $("#step_one_complete").click(function() {

            console.log('success')

            $("#step_one").removeClass("active");
            $("#step_two").addClass("active");

            $("#class_registration_segment").addClass("hidden");
            $("#class_registration_segment").removeClass("hidden");


        });
    }


});
