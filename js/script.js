//MAKE THE MAGIC HAPPEN
$(document).mousemove(function(e) {
    $('#net').offset({
        left: e.pageX -60,
        top: e.pageY -100
    });
});


$('#butterfly').mouseenter(function() {
    $(this).animate({left: Math.random() * window.outerWidth - 100, top: Math.random() * window.outerHeight - 150},"slow");
});