$(document).ready(function() {
    $('.tdhighlight').click(function(event) {
        // var bkcolor = $(this).css('background-color');
        //     console.log('bkcolor: ' + bkcolor);
        //     if (bkcolor === 'rgb(0, 255, 0)') {
        //         $(this).css({'background-color': '#eeffe6'});
        //     } else {
        //         $(this).css({'background-color': '#00ff00'});
        //     }
        //     event.stopPropagation();

        var content = $(this).text();
        if (content != 'Not Available') {
            $(this).toggleClass('tdhighlight');
            if ($(this).hasClass('tdhighlight')) {
                var header = $(this).closest('table').find('th').eq($(this).index()).text()
                $('#displaySelected').css('visibility', 'visible');
                $('#displaySelected').css('margin-top', '2em');
                $('#result').append('<p>' + content + ' at ' + header + '</p>');
                $(this).css({'background-color': '#00ff00'});
            } else {
                $(this).css({'background-color': '#eeffe6'});
                $('#result p:contains(' + content + ')').remove();
                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css('visibility', 'hidden');
                    $('#displaySelected').css('margin-top', '0');
                }
            }
            
            
        }
       
    });
});