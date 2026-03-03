/*
López Pérez Juan Alberto    ID:4860
Exercise 3 - Interactive Counter
*/

//Primero declaro 2 variables, el contador y la opcion para el pprompt.
let counter = 0
let opcion
//Usando un do-while para que el programa se siga repitiendo hasta que el usuario quiera
do{
//Luego usare el prompt para que se muestre el contador y tambien se pueda ingresar la opcion que uno quiera.
    opcion = prompt("Counter: "+counter+"\nIngrese una opcion: \n1. Increment counter \n2. Decrement counter \n3. Exit")
//Uso el parseInt para convertir el string del ṕrompt a un numero entero.
    opcion = parseInt(opcion)
    switch(opcion){
        case 1:
//En cada opcion, aparte de la 3, usare una ecuacion simple para que el contador cambie
            counter++
            console.log("Counter: " + counter)
            break
        case 2:
            counter--
            console.log("Counter: " + counter)
            break
        case 3:
            break
        default:
            console.log("Opcion no valida")
    }
//Si la opcion es igual a 3, el programa se acaba.
} while(opcion != 3)