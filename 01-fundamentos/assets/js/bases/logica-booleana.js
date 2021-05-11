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

console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola ' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regrsaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5, });

if(regresaFalse() && regrsaTrue() && true || false || true){
    console.log('Hace algo');
} else {
    console.log('Hace otra cosa');
}