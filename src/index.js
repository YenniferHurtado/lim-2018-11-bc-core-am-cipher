// secciones de pantalla
const firstScreen = document.getElementById("first-screen");
const secondScreen = document.getElementById("second-screen");
const thirdScreen = document.getElementById('third-screen');

//ocultar pantallas, muestro la primera
secondScreen.style.display = "none";
thirdScreen.style.display = "none";

//Tomando datos de los forms
const descifrado = document.getElementById("txt-descifrado");
const cifrado = document.getElementById("txt-cifrado");
const number = document.getElementById("number-code");

//innerHTML
const descuento = document.getElementById("discount");
const code = document.getElementById("code");

//Declarando botones
const btnDescifrar = document.getElementById("btn-descifrar");
const btnCifrar = document.getElementById("btn-cifrar");

//botón del cifrado

btnCifrar.addEventListener("click", () => {

  firstScreen.style.display = "none";
  thirdScreen.style.display = "block";
  code.innerHTML = cipher.encode(parseInt(number.value), cifrado.value);
})

//botón del descifrado

btnDescifrar.addEventListener("click", () => {

    firstScreen.style.display = "none";
    thirdScreen.style.display = "none";
    secondScreen.style.display = "block";
    descuento.innerHTML = cipher.decode(parseInt(number.value), descifrado.value);

 })

//Botones de regreso

const btnSegundaPantalla = document.getElementById("come-back");
const btnTerceraPantalla = document.getElementById("come-back2");


btnSegundaPantalla.addEventListener("click", () => {

    secondScreen.style.display = "none";
    firstScreen.style.display = "block";
})

btnTerceraPantalla.addEventListener("click", () => {

    thirdScreen.style.display = "none";
    firstScreen.style.display = "block";
})

//BOTON DE COPIAR



