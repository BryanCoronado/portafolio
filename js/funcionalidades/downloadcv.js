let ruta = "documents/cv-2026.pdf";
let nombre = "cv-2026.pdf";

function Descargar_boton(ruta, nombre) {
  const enlace = document.createElement("a");
  enlace.href = ruta;
  enlace.download = nombre;
  enlace.click();
}

const boton_descargar = document.getElementById("download-cv");
if (boton_descargar) {
  boton_descargar.addEventListener("click", function () {
    Descargar_boton(ruta, nombre);
  });
}

const boton_descargar2 = document.getElementById("download-cv2");
if (boton_descargar2) {
  boton_descargar2.addEventListener("click", function () {
    Descargar_boton(ruta, nombre);
  });
}
