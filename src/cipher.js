
const encode = (offset, string) => {
  let results = ""
  for (let i = 0; i < string.length; i++){
    let positionAscii = string.toUpperCase().charCodeAt(i)
    const formAscii = (positionAscii - 65 + offset) % 26 + 65
    const resultsAscii = String.fromCharCode(formAscii)
    results = results + resultsAscii

  } return results;

};

const decode = (offset, string) => {
  let resultado = ""
  for(let i = 0; i < string.length; i++){
    let datoEnAscii = string.toUpperCase().charCodeAt(i)
    const formulaAscii = (datoEnAscii - 90 - offset) % 26 + 90
    const resultadoAscii = String.fromCharCode(formulaAscii)
    resultado = resultado + resultadoAscii

  } return resultado;
};

window.cipher = {
  encode: (offset, string) => {
      return encode(offset, string)
  },
  decode: (offset, string) => {
    return decode(offset, string)
  },
}
