//Se comprueba si el usuario ya guardió un idioma anteriormente en el navegador.
let idiomaGuardado = localStorage.getItem("idioma");
let entrada = idiomaGuardado; //entrada vacia.
//si es la primera vez que entra se le pide el idioma.
if(!idiomaGuardado){
    //bucle que se repite hasta que introduzca EN o ES.
    while (entrada !== "EN" && entrada !== "ES"){
        entrada = prompt("Introduce EN (ingles) o ES (español)");

        if(entrada != null){
            entrada = entrada.trim().toUpperCase();
        }       
    }

    localStorage.setItem("idioma", entrada);//se le da el valor de entrada al item idioma.

}

if (entrada == "ES"){
    document.write("Bienvenido/a a la página web");
}else{
    document.write("Welcome to the website");
}