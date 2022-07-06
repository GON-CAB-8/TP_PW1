
let temporada1 = ['1','2','3','4','5','6'];
let temporada2 = ['1','2','3','4'];
let temporada3 = ['1','2','3','4','5','6','7','8'];
let temporada4 = ['1','2','3','4','5','6','7'];
let temporada5 = ['1','2','3','4','5','6','7','8','9','10'];

$(document).ready(function(){
    $('.similares').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
    });

    $("#temporada").change(function(){
        console.log($(this).val());
        llenarCombo($(this).val());
    })


});


// let temporada1 = [1,2,3,4,5,6];
// let temporada2 = [1,2,3,4];
// let temporada3 = [1,2,3,4,5,6,7,8];
// let temporada4 = [1,2,3,4,5,6,7];
// let temporada5 = [1,2,3,4,5,6,7,8,9,10];

function llenarCombo(valor){
    $("#capitulo").empty();
    switch(valor){
        case "1":
            temporada1.forEach((elem,index)=>{
                $("#capitulo").append("<option value="+index+">"+elem+"</option>")
            });
        break;
            
        case "2":
            temporada2.forEach((elem,index)=>{
                $("#capitulo").append("<option value="+index+">"+elem+"</option>")
            });
        break;

        case "3":
            temporada3.forEach((elem,index)=>{
                $("#capitulo").append("<option value="+index+">"+elem+"</option>")
            });
        break;

        case "4":
            temporada4.forEach((elem,index)=>{
                $("#capitulo").append("<option value="+index+">"+elem+"</option>")
            });
        break;

        case "5":
            temporada5.forEach((elem,index)=>{
                $("#capitulo").append("<option value="+index+">"+elem+"</option>")
            });
        break;

        default:
        break;

    }
}