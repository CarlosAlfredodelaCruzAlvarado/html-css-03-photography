function mostrarTexto(contenedorId) {
    var contenedor = document.getElementById(contenedorId);
    var txt = contenedor.querySelector(".txt");
    var img = contenedor.querySelector(".img");

    txt.style.opacity = "1";
    img.style.opacity = "0.4";
  }
  
  function ocultarTexto(contenedorId) {
    var contenedor = document.getElementById(contenedorId);
    var txt = contenedor.querySelector(".txt");
    var img = contenedor.querySelector(".img");
    txt.style.opacity = "0";
    img.style.opacity = "1";
  }