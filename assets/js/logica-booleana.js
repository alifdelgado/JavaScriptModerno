const regrsaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Rergesa false');
    return false;
};

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);
console.log(true && !false);
console.log('=============');
console.log(regresaFalse() && regrsaTrue());
console.log(regrsaTrue() && regresaFalse());

console.log('======&&=======');
regresaFalse() && regrsaTrue();

console.log('4 condiciones: ', true && true && true && false);

console.warn('OR');
console.log(true || false);
console.log(false || false);
console.log(regrsaTrue() || regresaFalse());
console.log('4 condiciones: ', true || true || true || false);