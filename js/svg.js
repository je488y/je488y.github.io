document.getElementById("colorButton").addEventListener("click", function() {
    // Obtener el SVG y el path
    const svgPath = document.getElementById("svgPath");
    const contenedorImagen = document.getElementById("contenedorImagen");

    // Generar colores aleatorios
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const randomBgColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    // Cambiar color del path y del fondo
    svgPath.setAttribute("fill", randomColor);
    contenedorImagen.style.backgroundColor = randomBgColor;
});
