

class ConfiguracionGaming {
    constructor(tipo,procesador, grafica, ram, memoria){
    this.tipo = tipo;
    this.procesador = procesador;  
    this.grafica = grafica;  
    this.ram = ram;  
    this.memoria = memoria;  
    }

    mostrarPc(){
        return `${this.tipo} ${this.procesador} ${this.procesador} ${this.grafica} ${this.ram} ${this.memoria}`;
    }
   


    

}