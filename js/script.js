$("#apple1").on("click", function(){

    var dim1=$(".basket");
    var positionToBasket = dim1[0].getBoundingClientRect().top
    var positionToBasketLeft = dim1[0].getBoundingClientRect().left
    console.log(positionToBasketLeft);
   
    $("#apple1").animate({left: positionToBasketLeft+30, top:positionToBasket+150}, "slow") 
  
   
});

$("#apple2").on("click", function(){

    var dim1=$(".basket");
    var positionToBasket = dim1[0].getBoundingClientRect().top
    var positionToBasketLeft = dim1[0].getBoundingClientRect().left
    $("#apple2").animate({left: positionToBasketLeft+30, top:positionToBasket+150}, "slow")  //animation of the apples
});

$("#apple3").on("click", function(){

    var dim1=$(".basket");
    var positionToBasket = dim1[0].getBoundingClientRect().top
    var positionToBasketLeft = dim1[0].getBoundingClientRect().left
    $("#apple3").animate({left: positionToBasketLeft+30, top:positionToBasket+150}, "slow")  
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
   

    var minLeft=900;
    var maxLeft=1200;
    var minHeight=200;
    var maxHeidht=500;
    var random1 = Math.ceil(Math.random() * (maxLeft- minLeft)+minLeft);
    var random2 = Math.ceil(Math.random() * 350);

    var random3 = Math.ceil(Math.random() * (maxLeft- minLeft)+minLeft);
    var random4 = Math.ceil(Math.random() * 350);

    var random5 = Math.ceil(Math.random() * (maxLeft- minLeft)+minLeft);
    var random6 = Math.ceil(Math.random() * 350);


    $("#apple1").css('top', random2);
    $("#apple1").css('left', random1);

    $("#apple2").css('top', random4);
    $("#apple2").css('left', random3);

    $("#apple3").css('top', random6);
    $("#apple3").css('left', random5);

  
        $("#backgroundImage").attr("src",'images/night.jpg').delay(2000);
    });
 

