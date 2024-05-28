function Send_info() {
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let name_com = name.toUpperCase() + last_name.toUpperCase();


    if (name == 0 || last_name == 0) {
        Swal.fire({
            title: "Campos vacios",
            text: "Algunos de los campos se encuentran vacios",
            icon: "error"
        });

        document.getElementById("name").style.border = "2px solid red";
        document.getElementById("last_name").style.border = "2px solid red";

    }
    else{
        document.getElementById("print").innerText = name + " " + last_name;
        Swal.fire({
            title: name_com,
            timer: 2000,
            showConfirmButton: false
            
        });
        for(let i = 0; i < name_com.length; i++){
            document.getElementById("print").innerText = i;
        }
    }

if(isNaN(name_com)==false){
    Swal.fire({
        title: "ERROR",
        text: "No se permiten numeros",
        icon: "error"
    });
    document.getElementById("print").innerText = "";

}



}

function Limpiar(){
    let name = document.getElementById("name").value = "";
    let last_name = document.getElementById("last_name").value = "";
    document.getElementById("name").style.border = "";
        document.getElementById("last_name").style.border = "";


}