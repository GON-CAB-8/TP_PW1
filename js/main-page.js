$(document).ready(function(){
    $("#logout").click(function(){
        localStorage.removeItem("usuario")
    });

    
    $("#pelicula").click(function(){
        let posters = $(".poster");
        let id = $(this).attr("id")
        
        posters.each(function(i,item){
            $(this).removeClass("none");
            let arrayNombresClases = item.className.split(" ");
            let nombreClase = arrayNombresClases[1];

            if(id != nombreClase){
                $(this).addClass("none");
            }
        })
    })

    
    $("#serie").click(function(){
        let posters = $(".poster");
        let id = $(this).attr("id");

        posters.each(function(i,item){
            $(this).removeClass("none");
            let arrayNombresClases = item.className.split(" ");
            let nombreClase = arrayNombresClases[1];

            if(id != nombreClase){
                $(this).addClass("none");
            }
        })
    })
    

    $("#todo").click(function(){
        let posters = $(".poster");
        
        posters.each(function(i,item){
            $(this).removeClass("none");
        })

    })
    
    $("#categorias").change(function(){
        let cat = $("#categorias").val();
        let count = 0;
        console.log(cat)
        let posters = $(".poster");
        // console.log(posters)
        posters.each(function(i,item){
            $(this).removeClass("none");

            let arrayNombresClases = item.className.split(" ");
            let nombreClase = arrayNombresClases[2];

            // if(cat == nombreClase){
            //     count++
            // }
            
            if(cat != nombreClase){
                $(this).addClass("none"); 
            }

            if(cat == '0'){
                $(this).removeClass("none");
            }
        })
    })
});