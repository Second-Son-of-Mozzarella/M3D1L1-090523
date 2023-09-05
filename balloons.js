$(function () {


    $(document).ready(function () {
        const animations = ["animate__bounce", "animate__backInDown", "animate__backInRight", "animate__bounceInDown", "animate__bounceInRight", "animate__flip", "animate__flipInY", "animate__lightSpeedInRight", "animate__rotateIn", "animate__rollIn"];
        let AnimationClass = animations[getRandomInt(0, 9)];
        $('#header').addClass(AnimationClass);
    });

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });


    $('.form-group').hover(function () {

        let NewClass = $(this).data("colour");
        $('#header').addClass(NewClass);
    });


    $('.form-group').mouseleave(function () {
        $('#header').removeClass('hoverRed');
        $('#header').removeClass('hoverGreen');
        $('#header').removeClass('hoverBlue');
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('#clearBtn').on('click', function () {

        $('.form-check-input').each(function () {
            $(this).prop('checked', false);

            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

        });

    });


    $('#allBtn').on('click', function () {

        $('.form-check-input').each(function () {
            $(this).prop("checked", true);

            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

        });

    });



    $('#submitBtn').on('click', function (e) {
        e.preventDefault();
        if (AreAnyCheckboxesChecked) {
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });


    $(document).on('keyup', function (e) {

        if (e.key == "Escape") $('#liveToast').hide();
    });





    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    function AreAnyCheckboxesChecked() {
        $('.form-check-input').each(function () {
            if ($(this).checked) {
                return false;
            }
        })
        return true;
    }

});
