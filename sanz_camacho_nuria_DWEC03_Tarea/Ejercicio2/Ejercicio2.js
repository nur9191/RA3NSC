
//validación.
let cadena= "";
cadena = prompt("Introduce una cadena de texto");
validacion(cadena);//se realiza el método, abajo solo se crea.

let comprimido = comprimir(cadena);//se crea variable para poder mostrar por pantalla:
document.write("<strong>Resultado Comprimido: </strong>" + comprimido + "<br>");

function validacion(cadena){
    for(let i = 0; i < cadena.length; i++){
        let caracter = cadena.charAt(i);
        if(!/^[a-zA - Z\s]$/.test(caracter)){
            return alert("Carácteres inválidos, solo puede introducir texto")
        }
    }
    return alert("texto correcto")
}

//COMPRIMIR CADENA.
function comprimir(texto){
    //Sustituir espacios por ?.
    texto = texto.replaceAll(' ','?');

    texto = texto + 1;//añado 1 para que pueda compara con el último carácter sin que se rompa.
    let textoNuevo = "";
    let contador = 1;
    let letraAnterior = texto.charAt(0); // se empieza tomando la primera letra.
    
    //bucle for para  recorrer y guardar carácteres.
    for(let i = 1; i < texto.length; i++){ //i empieza en uno para coger la segunda letra y poder compara con la anterior.
        let letraActual = texto.charAt(i);
        
        if(letraActual == letraAnterior){
            contador++;
            
        }else if(contador > 1){//si ha contado mas de una letra se añade el número y la letra.
            textoNuevo = textoNuevo + contador;
            textoNuevo = textoNuevo + letraAnterior;
            
            contador = 1;//se reinicia contador para siguientes repeticiones de carácteres iguales.
        }else{
            textoNuevo = textoNuevo + letraAnterior; //si solo se repite la letra una vez solo añadimos la letra al texto
            
        }
        letraAnterior = letraActual;

    }
    return textoNuevo;
}
    



//DESCOMPRESIÓN DE CADENA.
let cadenaComprimida= "";
cadenaComprimida = prompt("Introduce una cadena de texto comprimida");
validacion(cadenaComprimida);//se realiza el método de validación, abajo solo se crea.

let descompresionTexto = descompresion(cadenaComprimida);//se crea variable para poder mostrar por pantalla:
document.write("<strong>Resultado Descomprimido: </strong>" + descompresionTexto + "<br>");
//se verifica si el formato que se pide es correcto.
function validacion(texto){
    for(let i = 0; i < texto.length; i++){
        let caracter = texto.charAt(i);

        //la Expresión regular igual que en comprimir pero añadiendo números del 0 al 9.
        if (!/^[a-zA-Z0-9\s?]$/.test(caracter)){
            return alert ("Caracteres inválidos"); //NO SALTA ERROR SI METO OTROS CARACTERES.
        }
    }
    return alert("texto correcto");
}

function descompresion(texto){
    texto = texto.replaceAll('?',' '); //sustituimos ? por espacios.

    let textoNuevo = "";
    let numero = ""; //variable para acumular número de dos cifras.

    for(i = 0; i < texto.length; i++){
        let caracterActual = texto.charAt(i);//se empieza por el primer caracter.
        if (caracterActual >= 0 && caracterActual <=9 ){
            numero = numero + caracterActual;
        }else if (numero != ""){ //si encuentra un caracter que ya no es un número, significa que esa letra o (?)vse va a repetir las veces del número anterior captado.
            let caracterRepetido = Number(numero);
            for(let j = 0; j < caracterRepetido; j++){
                textoNuevo = textoNuevo + caracterActual;
            }
            numero = "";
        }else { //si no hay número significa que esa letra aparece por primera vez.
            textoNuevo = textoNuevo + caracterActual;

        }
    }
    return textoNuevo;
}

























