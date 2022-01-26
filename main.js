
//FRANCESC CORCOLL 
//CODIGO DE LA PÁGINA GAMING PARA CONFIGURAR EL PC
//************************************************************************************************************************************* */

precio = 0;
precioProgramas = 0;

//no me entraba dentro del evento, he tenido que buscar por internet y con este onload me accede al evento al ejecutarlo

//window.onload=function(){

const botonClick = document.querySelector("#boton-click");
const input = document.querySelector("#input-precio");
const resultado = document.querySelector("#resultado");

botonClick.addEventListener("click",()=>{

    
    if (input.value < 300){
    
        console.log("Configuración no disponible");
        resultado.textContent = `Lo sentimos pero no es posible jugar con una tostadora`
    }
    else if (input.value <= 500 && input.value >= 300){
        const configuracion1 = new ConfiguracionGaming("Tipo Tier5","Procesador Intel Core i5-10400/i3", "Memória 8gbRam DDr4", "Gráfica HDintel Integrada ","Disco Sólido 1TB HDD");
        console.log(configuracion1.tipo);
        //console.log(configuracion1.equipacion);
        resultado.textContent=mostrarDatosPc(configuracion1.tipo,configuracion1.procesador,configuracion1.grafica,configuracion1.ram,configuracion1.memoria);
       
    }
    else if (input.value <= 800 && input.value > 500){
        const configuracion2 = new ConfiguracionGaming("Tipo Tier4","Procesador Intel Core i5-10400","Gráfica GTX1650/Gtx1050ti"," Memória 16gbRam 2600Mhz"," Disco duro 1TBHDD / 512SSD");
        console.log(configuracion2.tipo);
       // console.log(configuracion2.equipacion);
       resultado.textContent=mostrarDatosPc(configuracion2.tipo,configuracion2.procesador,configuracion2.grafica,configuracion2.ram,configuracion2.memoria);
    
    }
    else if (input.value <= 1000 && input.value > 800){
        
        const configuracion3 = new ConfiguracionGaming("Tipo Tier3","Procesador AMD Ryzen5/ o Intel core i5", "Gráfica Gtx 1650/Gtx2050ti/1650Super","Memória 16gbRam 3200Mhz","Disco duro 1tbHDD +512SSd");
        console.log(configuracion3.tipo);
        //console.log(configuracion3.equipacion);
        resultado.textContent= mostrarDatosPc(configuracion3.tipo,configuracion3.procesador,configuracion3.grafica,configuracion3.ram,configuracion3.memoria);
       // resultado.textContent = "Tipo Tier3: Procesador AMD Ryzen5/ o Intel core i5, Gráfica Gtx 1650/Gtx2050ti/1650Super , Memória 16gbRam 3200Mhz, Disco duro 1tbHDD +512SSd" ;
       
    }
    else if (input.value <= 1200 && input.value > 1000){
     
        const configuracion4 = new ConfiguracionGaming("Tier 2","Procesador AMD Ryzen5/ o Intel core i7"," Gráfica 2060ti/2060Super", "Memória 16gbRam3600Mhz","Disco duro1TbHDD + 1tbSSD ");
        console.log(configuracion4.tipo);
        //console.log(configuracion4.equipacion);
        resultado.textContent=mostrarDatosPc(configuracion4.tipo,configuracion4.procesador,configuracion4.grafica,configuracion4.ram,configuracion4.memoria);
        
        }
    else if (input.value > 1200){
        
        const configuracion5 = new ConfiguracionGaming("Tipo Premium","Procesador AMD Ryzen7/o, Intel core i7/i9 + Refrigeración Líquida","Gráfica 3080,2080ti", "Memória 16/32gbRam custom","2TbHDD + 1tbSSD");
        //este console log lo uso para ver que me está entrando bien dentro del objeto, el usuario solo verá los datos por alert que se usan en la funcion.
        console.log(configuracion5.tipo);
       //console.log(configuracion5.equipacion);
       resultado.textContent=mostrarDatosPc(configuracion5.tipo,configuracion5.procesador,configuracion5.grafica,configuracion5.ram,configuracion5.memoria);
       
       
    }

    else{
        console.warn("no se trata de un dato válido, ingrese otro valor.")
        resultado.textContent  = `El dato no es valido`

    }
});

//}
const softwares = [{id :"windows10", valor: 50},
                   {id :"nvidia", valor: 10},
                   {id :"office", valor: 100},
                   {id :"chrome", valor: 0},
                   {id :"driversPack", valor: 25}]; 


    //let programas = prompt("Desea obtener algún tipo de software con la configuración?:");

    if(programas == "si" || programas == "SI"){

        for (const producto of softwares){
            alert("software disponible" + " " +producto.id + " " + " con un precio de " + " "+  producto.valor);
            console.log(producto.id);
            console.log(producto.valor);
        }
        let respuesta = prompt("Que software quieres incluir en la configuración?");

        if (respuesta != ""){
       // const softwareFiltro = softwares.find((producto) => producto.id == respuesta);
        //console.log(softwareFiltro);
        //alert("Se te sumara un precio de" + " "+ softwareFiltro.valor + "$" + " "+ "al total");
        buscarPrograma(respuesta);

        let otroPrograma = prompt("Quieres otro software?")
        if (otroPrograma == "si"){
            let programaExtra = prompt ("Ingresa el nombre del programa deseado");
            buscarPrograma(programaExtra);
        }
        else {
            alert("Ya tienes lista tu configuración");
        }

        }
        else{
            alert("Programa no disponible o no deseas ningún sofware");
        }
    

    }
    else{
        alert ("Entonces el precio de tu producto no se verá alterado.");
    }
   
    //Buscaremos dentro del array de objetos el producto por su id para ponerlo dentro de la config del pc.
    function buscarPrograma(respuesta){
        const softwareFiltro = softwares.find((producto) => producto.id == respuesta);
        console.log(softwareFiltro);
        alert("Se te sumara un precio de" + " "+ softwareFiltro.valor + "$" + " "+ "al total");
    }

    //Mostraremos la configuracion del pc con su hardware propio, definidos en el objeto.
    function mostrarDatosPc(tier,proces,grafico,rams,discoduro){
        let pc;
        pc = "Para este presupuesto te vamos a recomendar un pc de tipo"+ " " + tier +" "+ "y va a contener los siguientes componentes:" +  "\n" +" " + proces + " " + "\n" + " "  + grafico + " " + "\n" + " "  + rams + " " + "\n" + " "  + discoduro;
        return pc;
        
        }
   
   


   
    


    





