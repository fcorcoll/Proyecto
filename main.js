
// Primer test de la entrega de proyecto
//EN la siguiente entrega posiblemente cree un array con todas las configuraciones de pcs
//y con los metodos find y demás acceda a cada uno de ellos pero para esta no me da tiempo así que
//los datos del pc no serán coherentes del todo ya que es temporal.

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
    else if (resultado <= 500 && resultado >= 300){
        const configuracion1 = new Configuracion("Tipo Tier5","Procesador Intel Core i5-10400/i3, 8gbRam DDr4,Gráfica HDintel Integrada");
        console.log(configuracion1.tipo);
        console.log(configuracion1.equipacion);
        mostrarDatosPc(configuracion1.tipo,configuracion1.equipacion);
    }
    else if (resultado <= 800 && resultado > 500){
        const configuracion2 = new Configuracion("Tipo Tier4","Procesador Intel Core i5-10400, 16gbRam,Gráfica GTX1650/Gtx1050ti");
        console.log(configuracion2.tipo);
        console.log(configuracion2.equipacion);
        mostrarDatosPc(configuracion2.tipo,configuracion2.equipacion);
    }
    else if (resultado <= 1000 && resultado > 800){
        
        const configuracion3 = new Configuracion("Tipo Tier3","Procesador AMD Ryzen5/ o Intel core i5, 16gbRam,Gráfica GTX1650");
        console.log(configuracion3.tipo);
        console.log(configuracion3.equipacion);
        mostrarDatosPc(configuracion3.tipo,configuracion3.equipacion);
    }
    else if (resultado <= 1200 && resultado > 1000){
     
        const configuracion4 = new Configuracion("Tier 2","Procesador AMD Ryzen5/ o Intel core i7, 16gbRam,Gráfica 2060ti/2060super");
        console.log(configuracion4.tipo);
        console.log(configuracion4.equipacion);
        mostrarDatosPc(configuracion4.tipo,configuracion4.equipacion);
        }
    else if (resultado > 1200){
        
        const configuracion5 = new Configuracion("Tipo Premium","Procesador AMD Ryzen7/o, Intel core i7/i9, 16/32gbRam,Gráfica 3080,2080ti");
        //este console log lo uso para ver que me está entrando bien dentro del objeto, el usuario solo verá los datos por alert que se usan en la funcion.
        console.log(configuracion5.tipo);
        console.log(configuracion5.equipacion);
        mostrarDatosPc(configuracion5.tipo,configuracion5.equipacion);
    }

    else{
        console.warn("no se trata de un dato válido, ingrese otro valor.")

    }


    function mostrarDatosPc(tier,contenido){

        alert("Para este presupuesto te vamos a recomendar un pc de tipo"+ " " + tier +" "+ "y va a contener los siguientes componentes" + " " + contenido );
    }
   
   


   
    


    





