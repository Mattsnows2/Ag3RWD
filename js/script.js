$("#apple1").on("click", function () {

    var dim1 = $(".basket");
    var positionToBasket = dim1[0].getBoundingClientRect().top
    var positionToBasketLeft = dim1[0].getBoundingClientRect().left
    console.log(positionToBasketLeft);

    $("#apple1").animate({ left: positionToBasketLeft + 30, top: positionToBasket + 150 }, "slow")


});

$("#apple2").on("click", function () {

    var dim1 = $(".basket");
    var positionToBasket = dim1[0].getBoundingClientRect().top
    var positionToBasketLeft = dim1[0].getBoundingClientRect().left
    $("#apple2").animate({ left: positionToBasketLeft + 30, top: positionToBasket + 150 }, "slow")  //animation of the apples
});

$("#apple3").on("click", function () {

    var dim1 = $(".basket");
    var positionToBasket = dim1[0].getBoundingClientRect().top
    var positionToBasketLeft = dim1[0].getBoundingClientRect().left
    $("#apple3").animate({ left: positionToBasketLeft + 30, top: positionToBasket + 150 }, "slow")
});
//MAKE THE MAGIC HAPPEN
$(document).mousemove(function (e) {
    $('#net').offset({
        left: e.pageX - 60,
        top: e.pageY - 100
    });

    if (e.pageX > oldx && e.pageY == oldy) {
        direction = "East";
    }
    else if (e.pageX == oldx && e.pageY > oldy) {
        direction = "South";
    }
});

$(document).ready(function () {
    var date = new Date()
    var dimTree = $('#tree');
    var minLeft = dimTree[0].getBoundingClientRect().left+300;
    var maxLeft = dimTree[0].getBoundingClientRect().left +500;
    console.log(minLeft, maxLeft);
    var minHeight = dimTree[0].getBoundingClientRect().top+200;
    var maxHeidht = dimTree[0].getBoundingClientRect().top+50;
    var random1 = Math.ceil(Math.random() * (maxLeft - minLeft) + minLeft);
    var random2 = Math.ceil(Math.random()*(maxHeidht- minHeight) + minHeight);
    console.log(random1, random2);

   var random3 = Math.ceil(Math.random() * (maxLeft - minLeft) + minLeft);
    var random4 = Math.ceil(Math.random() * (maxHeidht-minHeight) + minHeight);

    var random5 = Math.ceil(Math.random() * (maxLeft - minLeft) + minLeft);
    var random6 = Math.ceil(Math.random() * (maxHeidht-minHeight) + minHeight);
    console.log(date.getHours())
    randomMovement($("#butterfly"));


    if (date.getSeconds() > 15 && date.getSeconds() < 45) {
        $("#backgroundPicture").fadeIn();
        $("#backgroundPicture").attr("src", "../AG3RWD/images/day.jpg");
    } else {
        $("#backgroundPicture").fadeIn();
        $("#backgroundPicture").attr("src", "../AG3RWD/images/night.jpg");
    }


    $("#apple1").css('top', random2);
    $("#apple1").css('left', random1);

    $("#apple2").css('top', random4);
    $("#apple2").css('left', random3);

    $("#apple3").css('top', random6);
    $("#apple3").css('left', random5);


    $("#backgroundImage").attr("src", 'images/night.jpg').delay(2000);



});



function randomMovement(IdRef) {
    $(IdRef).animate({ left: (Math.random() * (window.outerWidth - 100)), top: (Math.random() * (window.outerHeight - 100)) }, 5000, function () { randomMovement(IdRef) });
}

$("#butterfly").mouseenter(function () {
    $(this).stop().animate({ left: Math.random() * (window.outerWidth - 150), top: Math.random() * (window.outerHeight - 150) }, "fast");
    randomMovement(this);
});

//Move caterpillar with the arrow keys
var Xpos = $("#caterpillar").offset().left;
var Ypos = $("#caterpillar").offset().top;
var movement = 100;
$(document).keydown(function (e) {
    $("#caterpillar").stop();
    if (e.keyCode == 38) {
        $("#caterpillar").animate({ top: -movement + Ypos }); Ypos = Ypos - movement;
    }
    if (e.keyCode == 39) {
        $("#caterpillar").animate({ left: movement + Xpos }); Xpos = Xpos + movement;
    }
    if (e.keyCode == 40) {
        $("#caterpillar").animate({ top: movement + Ypos }); Ypos = Ypos + movement;
    }
    if (e.keyCode == 37) {
        $("#caterpillar").animate({ left: -movement + Xpos }); Xpos = Xpos - movement;
    }
});

//WATERINGCAN
let degrees = 0;
let tiltSt = false;
$('#wateringcan').on('mousedown', function (e) {
    degrees = -45;
    tiltSt = true;
    $('#wateringcan').css({
        'transform': 'rotate(' + degrees + 'deg)',
    });
    waterdrops($(this).position(), 0)

});

$('#wateringcan').on("mouseleave mouseup", function () {
    degrees = 0;
    tiltSt = false;
    $('#wateringcan').css({
        'transform': 'rotate(' + degrees + 'deg)',
    });
});
function waterdrops(post, num) {
    if (num != 0) {
        $("#waterdrop" + num).offset({
            left: post.left,
            top: post.top + 100,

        });
    } else {
        $(".waterdrop").stop();
        $(".waterdrop").offset({
            left: post.left,
            top: post.top + 100,

        });
    }
    $("#waterdrop1").animate({ left: Math.floor(Math.random() * 990), top: window.innerHeight - 250 }, Math.random() * (2000 - 1900) + 1900, function () {
        if (tiltSt) {
            waterdrops(post, 1)
        }
    });
    $("#waterdrop3").animate({ top: window.innerHeight - 250 }, Math.random() * (2000 - 1900) + 1900, function () {
        if (tiltSt) {
            waterdrops(post, 3)
        }
    });
    $("#waterdrop2").animate({ left: Math.floor(Math.random() * 990), top: window.innerHeight - 250 }, Math.random() * (2000 - 1900) + 1900, function () {
        if (tiltSt) {
            waterdrops(post, 2)
        }
    });
}