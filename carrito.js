
//FRANCESC CORCOLL 
//CODIGO DE LA PÁGINA DEL CARRITO
//************************************************************************************************************************************* */

$(document).ready(()=>{
    console.log("se cargó la pagina");
}); 


let StoragePc = localStorage.getItem('ValorInput');
let StorageConfig = localStorage.getItem('Config');
let StoragePrograma = localStorage.getItem('NombrePrograma');
let StorageSoft = localStorage.getItem('ValorPrograma');
let StorageMonitor = localStorage.getItem('ValorMonitor');

let NumeroPc = parseInt(StoragePc);
let NumeroSoft = parseInt(StorageSoft);
let NumeroMoni = parseInt(StorageMonitor);
const input = document.getElementById("Presupuesto");
const inputPeri = document.getElementById("extra");
const inputSoft = document.getElementById("programa");
const BotonPc = document.getElementById("botonPc");
const BotonPeri = document.getElementById("botonPerifericos");
const BotonSoft = document.getElementById("botonSoftwares");
const Preciofinal = document.getElementById("TotalPrecio");
const BotonFinal = document.getElementById("botonFinal");
const URLGET = "notas.json";

let total = 0;
input.textContent = StorageConfig + " " + " con un precio de"+ " " + StoragePc + "$";

if(NumeroMoni > 0){
inputPeri.textContent = "El precio del periferico extra es de " + NumeroMoni + "$";}
else{
    inputPeri.textContent = "No has puesto ningún periferico extra";
}

inputSoft.textContent = "Has elegido el software:" + " " + StoragePrograma + " " + "con un valor de " + " "+ StorageSoft + "$";

$("#botonPc").on('click',()=>{
    //let StoragePrecioPc = localStorage.getItem('valorInput');
   
    total = total + NumeroPc;
    console.log(total);
    Preciofinal.textContent = "El presupuesto asciende a :" +" " + total ;
    //console.log(StoragePrecioPc);

});
$("#botonPerifericos").on('click',()=>{
    //let StoragePrecioPc = localStorage.getItem('valorInput');
   
    total = total + NumeroSoft;
    console.log(total);
    Preciofinal.textContent = "El presupuesto asciende a :" +" " + total;
    //console.log(StoragePrecioPc);

});
$("#botonSoftwares").on('click',()=>{
    //let StoragePrecioPc = localStorage.getItem('valorInput');
   
    total = total + NumeroMoni;
    console.log(total);
    Preciofinal.textContent = "El presupuesto asciende a :" +" " + total;
    //console.log(StoragePrecioPc);

});
Preciofinal.textContent = "El valor de tu presupuesto es :" + " " + total;


$("#botonFinal").on('click',()=>{
    
    $.get(URLGET,function(respuesta,estado){
        if(estado === "succes"){
            console.log(respuesta);
        }
    });
    
    fetch(URLGET)
        .then((Response) => Response.json())
        //.then((json) => console.log(json));
        .then((json) =>{
            $("div:last").append(`<p> ${json.name} </p>
            <p>${json.location}</p>`);
        
            console.log(json);
            });


});


localStorage.clear();
