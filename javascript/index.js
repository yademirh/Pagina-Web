var cont = 1;
var x;
x = setInterval(cambio_auto,20000);
function cambio_auto(){
    cont++;
    if(cont==8){
        cont=1;
    }
    $(".Vconten").hide();
    switch(cont){
        case 1: $(".V1").show(300); break;
        case 2: $(".V2").show(300); break;
        case 3: $(".V3").show(300); break;
        case 4: $(".V4").show(300); break;
        case 5: $(".V5").show(300); break;
        case 6: $(".V6").show(300); break;
        case 7: $(".V7").show(300); break;
    }
}
function pase_derecha(){
    cont++;
    if(cont==8){
        cont=1;
    }
    $(".Vconten").hide();
    switch(cont){
        case 1: $(".V1").show(300); break;
        case 2: $(".V2").show(300); break;
        case 3: $(".V3").show(300); break;
        case 4: $(".V4").show(300); break;
        case 5: $(".V5").show(300); break;
        case 6: $(".V6").show(300); break;
        case 7: $(".V7").show(300); break;
    }
}
function pase_izquierda(){
    cont--;
    console.log("soy boton izquierdo");
    if(cont==0){
        cont=7;
    }
    $(".Vconten").hide();
    switch(cont){
        case 1: $(".V1").show(300); break;
        case 2: $(".V2").show(300); break;
        case 3: $(".V3").show(300); break;
        case 4: $(".V4").show(300); break;
        case 5: $(".V5").show(300); break;
        case 6: $(".V6").show(300); break;
        case 7: $(".V7").show(300); break;
    }
}


 