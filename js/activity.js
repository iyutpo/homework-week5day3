$(document).ready(function() {
    $('.available').click(function(event) {
        var bkcolor = $(this).css('background-color');
        console.log('bkcolor: ' + bkcolor);
        if (bkcolor === 'rgb(0, 255, 0)') {
            $(this).css({'background-color': '#eeffe6'});
        } else {
            $(this).css({'background-color': '#00ff00'});
        }
        event.stopPropagation();
    });
});