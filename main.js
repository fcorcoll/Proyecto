
// Primer test de la entrega de proyecto

percio = 0;

function Configuracion (tipo,equipacion){
this.tipo = tipo;
this.equipacion =equipacion;  
}

function solicitarPresupuesto(){

let precio = prompt("Ingresa el presupuesto estimado:");

            console.log("Presupuesto estimado del cliente es: " + precio);
            return precio;
}

let resultado = solicitarPresupuesto();

    if (resultado < 300){
        console.log("Configuración no disponible");
    }
    else if (resultado < 500 && resultado > 300){
        const configuracion1 = new Configuracion("Tipo Tier4","En este caso ofrecemos la siguiente configuración:");
        console.log(configuracion1.tipo);
        console.log(configuracion1.equipacion);
    }
    else if (resultado < 800 && resultado > 500){
        const configuracion2 = new Configuracion("Tipo Tier3","En este caso ofrecemos la siguiente configuración:");
        console.log(configuracion2.tipo);
        console.log(configuracion2.equipacion);
    }
    else if (resultado < 1000 && resultado > 800){
        alert("recomendamos esta configuración 3 personalizada");
        const configuracion3 = new Configuracion("Tipo Tier3","En este caso ofrecemos la siguiente configuración:");
        console.log(configuracion3.tipo);
        console.log(configuracion3.equipacion);
    }
    else if (resultado < 1200 && resultado > 1000){
        alert("recomendamos esta configuración 4 personalizada");
        const configuracion4 = new Configuracion("Tipo Tier2","En este caso ofrecemos la siguiente configuración:");
        console.log(configuracion4.tipo);
        console.log(configuracion4.equipacion);
    }
    else if (resultado > 1200){
        alert("recomendamos esta configuración 5 personalizada");
        const configuracion5 = new Configuracion("Tipo Premium","Realizaremos una configuración a medida para adaptarnos al máximo");
        console.log(configuracion5.tipo);
        console.log(configuracion5.equipacion);
    }

    else{
        console.warn("no se trata de un dato válido, ingrese otro valor.")
    }
   
   


   
    


    





