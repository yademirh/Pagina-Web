const ExpName=/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{3,15}$/;
const ExpApellido=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{3,30}$/;
const ExpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const ExpPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&]{8,15}$/;

// $("#form").validate({
//     rules:{
//         nombre: {
//             required: true, 
//             minlength: 3, 
//             maxlength: 20,
//             ExpName: true
//         },
//         apellido: {
//             required: true, 
//             minlength: 3, 
//             maxlength: 40
//         },
//         email: {
//             required: 'email' , 
//             minlength: 3, 
//             maxlength: 40,
//             equalTo: ExpEmail
//         },
//         contraseña: {
//             required: true, 
//             minlength: 8, 
//             maxlength: 20,
//         },
//         CFcontraseña: {
//             equalTo: "#contraseña",
//             required: true
//         },
//         sexo: {
//             required: true
//         },
//         terminos: {
//             required: true
//         },
//     },
//     messages:{
//         nombre: "",
//         apellido: "",
//         email: "",
//         contraseña: "",
//         CFcontraseña: "",
//         sexo: "",
//         terminos: ""
//     }
// });

var cont = [false,false,false,false,false];
var nombre
var apellido
var email
var contraseña
var CFcontraseña
function valid1(){
    nombre =$("#nombre").val();

    if(nombre.match(ExpName)){
        $("#bien_a").show();
        $("#mal_a").hide();
        $("#bien_a").css("transform","translateX(15px)");
        cont[0]=true;
    }else{
        $("#bien_a").hide();
        $("#mal_a").show();
        cont[0]=false;
    }
}
function valid2(){
    apellido =$("#apellido").val();

    if(apellido.match(ExpApellido)){
        $("#bien_b").show();
        $("#mal_b").hide();
        $("#bien_b").css("transform","translateX(15px)");
        cont[1]=true;
    }else{
        $("#bien_b").hide();
        $("#mal_b").show();
        cont[1]=false;
    }
}
function valid3(){
    email = $("#email").val();

    if(email.match(ExpEmail)){
        $("#bien_c").show();
        $("#mal_c").hide();
        $("#bien_c").css("transform","translateX(15px)");
        cont[2]=true;
    }else{
        $("#bien_c").hide();
        $("#mal_c").show();
        cont[2]=false;
    }
}
function valid4(){
    contraseña =$("#contraseña").val();

    if(contraseña.match(ExpPassword)){
        $("#bien_d").show();
        $("#mal_d").hide();
        $("#bien_d").css("transform","translateX(15px)");
        cont[3]=true;
    }else{
        $("#bien_d").hide();
        $("#mal_d").show();
        cont[3]=false;
    }
}
function valid5(){
    CFcontraseña =$("#CFcontraseña").val();

    if(CFcontraseña==contraseña){
        $("#bien_e").show();
        $("#mal_e").hide();
        $("#bien_e").css("transform","translateX(15px)");
        cont[4]=true;
    }else{
        $("#bien_e").hide();
        $("#mal_e").show();
        cont[4]=false;
    }
}
var x=1;
var y=1;
function sexo1(){
    y=0;
}
function checkbox(){
    x=0;
}
    
function Datos() {
    for(let i=0; i<cont.length; i++){
        if(cont[i]==false || x==1 || y==1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Asegurate de completar el formulario correctamente',
                footer: '<a href="https://support.google.com/accounts/thread/25868685/doy-mi-correo-y-siempre-me-dice-correo-invalido-qué-puedo-hacer?hl=es">¿Sigues con el error?</a>'
            })
            i=cont.length+1;
        }
        else{
            Swal.fire({
                icon: 'success',
                title: 'Perfecto! Registro completo',
                showConfirmButton: true,
                timer: 2500,
            })
            setTimeout(() => {
               document.location.reload()
            },2500)
        }
    }
}     
