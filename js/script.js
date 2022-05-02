$("#apple1").on("click", function(){

    $("#apple1").animate({left: "-550", top:"420", degree:360}, "slow") 
  
   
});

$("#apple2").on("click", function(){

    $("#apple2").animate({left: "-400", top:"460"}, "slow") //animation of the apples
});

$("#apple3").on("click", function(){

    $("#apple3").animate({left: "-950", top:"520"}, "slow") //animation of the apples
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
    $(this).stop();
    $(this).animate({left: Math.random() * (window.outerWidth-150), top: Math.random() * (window.outerHeight-150)},"fast");
    randomMovement(this);
});

$(document).ready(function() {
   

        $("#backgroundImage").attr("src",'images/night.jpg').delay(2000);
    });
 

