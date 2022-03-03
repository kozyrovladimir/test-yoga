/**
 * Created by server-pc on 10.06.2015.
 */
/**
 * Created by server-pc on 04.06.2015.
 */
/**
 * @preserve jQuery modal plugin v1.0
 * @email ongi.ua@gmail.com
 * (c) 2014, Alexandra Bespalova
 */
(function($) {

    var methods = {
        init:function() {
            var modal = $(this).data('modal');
            $('#' + modal).addClass('open-modal').append('<span class="modal-close">X</span>').after('<div class="overlay"></div>').find('button').before('<div class="result"></div>');

            $('body').on('click', '.modal-close', function() {
                var modal = $(this).parent().attr('id');
                $('#' + modal).removeClass('open-modal');
                $('.overlay').remove();
                $('.modal-close').remove();
                $('.result').remove();
            }).on('click', '.overlay', function() {
                $('.modal-close').trigger('click');
            });
        },
        destroy:function() {
            $('.modal').removeClass('open-modal');
            $('.overlay').remove();
            $('.modal-close').remove();
            $('.result').remove();
            //todo: need to clear form
        }

    };

    $.fn.modal = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else {
            this.click(function () {
                return methods.init.apply( this, arguments );
            });
        }

    };

})(jQuery);