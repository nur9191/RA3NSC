//1.  Crea una página web, con la siguiente funcionalidad. Abre una ventana de tamaño 600 X 400, 
// en la ventana se escribirá la frase "Hoy es dia/mes/año y faltan XX días para fin de año", 
// siendo día, mes, y año , los actuales obtenidos a partir del objeto Date.

function abrirVentana(){//creo la funcion y el botón en html porque sino no me carga nada, se queda 
//la página en blanco.


//se crea la ventana 600 x 400
let nuevaVentana = window.open("","nueva","screen.width=600,screen.height=400");

//Se crea el objeto fecha.
let fechaActual = new Date();

let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() +1;// + 1 porque devuelve el método0 a 11.
let anio = fechaActual.getFullYear();

//fecha del 31 de diciembre del año actual
let finAnio = new Date(anio,11,31); //cuando se acaba el año.

//Se calcula el tiempo que falta restando fechas, que como devuelve en 
//milisegundos pues antes se hace la operación de cuántos milisegundos tiene un 
//dia y se divide al resultado de las fechas.
let milisegundosDia = 1000 * 60 * 60 * 24;
let diasRestantes = Math.ceil((finAnio - fechaActual) / milisegundosDia);

//se crea la frase de la ventana y le meto css para darle color.
nuevaVentana.document.write("<body style='margin:0; height:100vh; display:flex; align-items:center; justify-content:center; background:#0f172a; color:#e8eefb; font-family:Arial; text-align:center;'>" +
"<h2 style='font-size:22px;'>Hoy es " + dia + "/" + mes + "/" + anio +
" y faltan " + diasRestantes + " días para fin de año</h2>" +
"</body>");

    nuevaVentana.document.close();

}



