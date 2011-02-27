$(document).ready(function() { 
    // jquery stash
    var $$ = {};

    $$.overlay = $('#overlay');
    $$.dialog_container = $('#dialog-container');
    $$.dialog_new_widget = ($('#dialog-new-widget')
        .find('[name=create]')
            .click(function() { 
                var w = parseInt($$.dialog_new_widget.find('[name=width]').val(), 10),
                    h = parseInt($$.dialog_new_widget.find('[name=height]').val(), 10);
                $$.mydesk.jsdeskgrid('new_window', {width: w, height: h});
                $$.overlay.hide();
                $$.dialog_container.hide();
            })
        .end()
    );

    $$.window_options = $('#window-options');
    $('#window-options-move').click(function() { 
        $(this).trigger('jsdesk-move');
    });
    $('#window-options-delete').click(function() { 
        $(this).trigger('jsdesk-delete');
    });

    $$.mydesk = $('#mydesk').jsdeskgrid({
        window_options: $$.window_options
    });

    $$.toolbar = ($('#toolbar')
        .mouseenter(function() { 
            $$.toolbar.removeClass('shrunk', 'fast');
        })
        .mouseleave(function() { 
            $$.toolbar.addClass('shrunk', 'fast');
        })
    );
    $('#toolbar-new-widget').click(function() { 
        $$.overlay.show('fast');
    
        $$.dialog_new_widget.appendTo($$.dialog_container).show();
        $$.dialog_container.show();

        //$$.mydesk.jsdeskgrid('new_window', {width: 2, height: 2});
    });
});
