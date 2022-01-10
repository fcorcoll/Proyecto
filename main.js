
// Primer test de la entrega de proyecto

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

    





