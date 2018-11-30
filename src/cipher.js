
const encode = (string, offset) => {
  let results = ""
  for (let i = 0; i < string.length; i++){
    let positionAscii = string.toUpperCase().charCodeAt(i)
    const formAscii = (positionAscii - 65 + offset) % 26 + 65
    const resultsAscii = String.fromCharCode(formAscii)
    results = results + resultsAscii

  } return results;

};

const decode = (mensaje, offset) => {
  let resultado = ""
  for(let i = 0; i < mensaje.length; i++){
    let datoEnAscii = mensaje.toUpperCase().charCodeAt(i)
    const formulaAscii = (datoEnAscii - 90 - offset) % 26 + 90
    const resultadoAscii = String.fromCharCode(formulaAscii)
    resultado = resultado + resultadoAscii

  } return resultado;
};

window.cipher = {
  encode: (string, offset) => {
      return encode(string, offset)
  },
  decode: (mensaje, offset) => {
    return decode(mensaje, offset)
  },
}
