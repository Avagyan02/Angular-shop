function codeGenerator() {
  const val = 'asdfghlkj1234567890';
  let code = '';

  for(let i = 0; i <= 5; i++) {
    code += val[Math.floor(Math.random() * val.length)];
  }

  return code;
}

export default codeGenerator;