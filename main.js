
// Este programa simula un loggin, dentro del bucle te dice
// los intentos disponibles y solo te muestra el ok si no se trata del
// usuario reservado o de un espacio nulo.
//porfavor
const reservado = "stop"


for (let i =1 ; i < 10 ; i++ ){

        let nombre = prompt("Ingrese tu nombre: ")
        let apellido = prompt("Ingresa tu apellido:")

        if (((nombre != "") && (apellido != "")) && (apellido != reservado)  && (nombre != reservado)) {
            alert ("Saludos "+ nombre + " " + apellido + " " + "dispones de" + " " + (10 - i) + " " + "intentos")
       
        }
        else  {
            alert ("No puedes acceder con el usurario reservado o sin credenciales.")
        }
        }

    





