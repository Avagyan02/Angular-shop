function generateSKU() {
  let codeSKU = '';
  for(let i = 0; i <= 5; i++) {
    codeSKU += Math.floor(Math.random() * 9);
  }
  return codeSKU;
}

export default generateSKU;