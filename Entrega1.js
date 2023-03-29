alert("Elija que aplicacion usar")
let opcion= prompt("1-Calculo jubilacion 2-")




alert("Hola esta aplicacion va a calcular cuantos años les falta para jubilarse")
let edad = parseInt (prompt("ingrese su edad"));
let genero = prompt("ingrese su genero M o F")
genero.toUpperCase()
if (genero == "M") {
         alert("Le falta para jubilarse" + (65-edad))}
    else 
        {
             alert("Le falta para jubilarse" + (60-edad))
        }

