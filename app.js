//Declaracion de constantes
const contenedorqr = document.getElementById('contenedorqr');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorqr);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = formulario.name.value;
    const area = formulario.area.value;
    const dispositivo = formulario.descripcion.value;
    // La variable combinada es el resultado de la interpolacion de las variables definidas anteriormente
    const valorCombinado = `${nombre} - ${area} - ${dispositivo}` ;

    // Aqui se genera el codigo QR que se utilizara
    formulario.reset();
    QR.makeCode(valorCombinado);
});
