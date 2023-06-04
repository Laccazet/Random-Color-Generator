var rgb = [];

$("button").click(function() {

    colorGenerator();

    $(".one").css("background-color","rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
    $(".two").css("background-color","rgb("+rgb[3]+","+rgb[4]+","+rgb[5]+")");
    $(".three").css("background-color","rgb("+rgb[6]+","+rgb[7]+","+rgb[8]+")");
    $(".four").css("background-color","rgb("+rgb[9]+","+rgb[10]+","+rgb[11]+")");
    $(".five").css("background-color","rgb("+rgb[12]+","+rgb[13]+","+rgb[14]+")");
    $("button").css("border-color","rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
    $("button").css("background-color","rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
    $(".container").css("background-color","rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");

});


$(".color").hover(function(){
    $(this).children().css("height","100px");
    $(this).children().children().css("display","inline-block");
    $(this).children().css("background-color",$( this ).css("background-color"));
    $(this).children().children().eq(1).html(("#"+hexer($(this).css("background-color"))));
    $(this).children().children().eq(0).html($(this).css("background-color"));
},function(){
    $(this).children().css("height","0");
    $(this).children().children().css("display","none");
})


$(".color").click(function(){
    var text = $(this).children().children().eq(0).text();
    navigator.clipboard.writeText(text);
})


function colorGenerator(){
    rgb = [];

    for (let i = 0; i < 15; i++) {

        var num = Math.floor((Math.random() * 255) + 1);
        rgb.push(num);
    
    }
}



function hexer(value) {

    hex = [];
    let rgb = value.substring(4, value.length-1).replace(/ /g, '').split(',');
    
    for (let i = 0; i < rgb.length; i++) {

        all = rgb[i] / 16;
    
        int = Math.floor(all);
        decimal = all % 1;

        decimal = decimal * 16;

        hex.push(converter(int));
        hex.push(converter(decimal));
        
    }

    return hex.join("");
    
}

function converter(number) {
    switch (number) {
        case 10:
            return "A";
            break;

        case 11:
            return "B";
            break;

        case 12:
            return "C";
            break;

        case 13:
            return "D";
            break;

        case 14:
            return "E";
            break;

        case 15:
            return "F";
            break;

        default:
            return number;
            break
    }
}

