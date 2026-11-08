    //Se obtiene el ancho y alto de la ventana.
    let anchoPantalla = window.innerWidth;
    let altoPantalla = window.innerHeight;

     //Tipo de dispositivo según el ancho.
    let tipoDispositivo = "";
        if(anchoPantalla < 768) {
            tipoDispositivo = "movil";
        }else if(anchoPantalla >= 768 && anchoPantalla < 1024) {
            tipoDispositivo = "tablet";
        }else{
            tipoDispositivo = "escritorio";
        }

     //Resolución de pantalla formateada.
    let resolucionPantalla = `${anchoPantalla}x${altoPantalla}`;

     // 3. Orientación de la pantalla
    let orientacionPantalla = "";
        if(anchoPantalla >= altoPantalla) {
            orientacionPantalla = "horizontal";
        }else{
            orientacionPantalla = "vertical";
        }

    //Idioma principal.
    let idiomaNavegador = navigator.language || "es-ES";
    let idiomaPrincipal = idiomaNavegador.substring(0, 2).toLowerCase();

    //Protocolo seguro, comprobando si la conexión usa https.
    let esConexionSegura = window.location.protocol === "https:";
    let protocoloSeguro = esConexionSegura ? "https:" : "http:";

    //Se muestra la información en la página.
    document.write("<p><strong>Tipo de dispositivo:</strong> " + tipoDispositivo + "</p>");
    document.write("<p><strong>Resolución de pantalla:</strong> " + resolucionPantalla + "</p>");
    document.write("<p><strong>Orientación de pantalla:</strong> " + orientacionPantalla + "</p>");
    document.write("<p><strong>Idioma principal:</strong> " + idiomaPrincipal + "</p>");
    document.write("<p><strong>Protocolo seguro:</strong> " + protocoloSeguro + "</p>");
    