$(".apple").on("click", function(){

    $(".apple").animate({right: "-500", top:"500"}, "slow")
});
//MAKE THE MAGIC HAPPEN
$(document).mousemove(function(e) {
    $('#net').offset({
        left: e.pageX -60,
        top: e.pageY -100
    });
});

$(document).ready(function() {
    randomMovement($("#butterfly"));
});

function randomMovement(IdRef) {
    $(IdRef).animate({left: (Math.random() * (window.outerWidth-100)), top: (Math.random() * (window.outerHeight-100))},5000, function() {randomMovement(IdRef)});
}

$('#butterfly').mouseenter(function() {
<<<<<<< HEAD
    $(this).stop();
    $(this).animate({left: Math.random() * (window.outerWidth-150), top: Math.random() * (window.outerHeight-150)},"fast");
    randomMovement(this);
});
=======
    $(this).animate({left: Math.random() * window.outerWidth - 100, top: Math.random() * window.outerHeight - 150},"slow");
});
>>>>>>> c1308b3fd548d5e4fbc6532cb49aa95565a9654c
