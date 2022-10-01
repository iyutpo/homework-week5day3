$(document).ready(function() {
    $('.tdhighlight').click(function(event) {
        var content = $(this).text();
        if (content != 'Not Available') {
            $(this).toggleClass('tdhighlight');
            if ($(this).hasClass('tdhighlight')) {
                $('#displaySelected').css('visibility', 'visible');
                $('#displaySelected').css('margin-top', '2em');
                $('#result').append('<p>' + content + '</p>');
            } else {
                $('#result p:contains(' + content + ')').remove();
                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css('visibility', 'hidden');
                    $('#displaySelected').css('margin-top', '0');
                }
            }
            var bkcolor = $(this).css('background-color');
            console.log('bkcolor: ' + bkcolor);
            if (bkcolor === 'rgb(0, 255, 0)') {
                $(this).css({'background-color': '#eeffe6'});
            } else {
                $(this).css({'background-color': '#00ff00'});
            }
            event.stopPropagation();
            
        }
       
    });
});