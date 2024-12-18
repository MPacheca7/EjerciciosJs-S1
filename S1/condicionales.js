// mayor > mayor igual >= menor < menor igual <=
let age = 18;
if(age >= 18) {
    console.log('eres adulto');
} else {
    console.log('eres niño');
}
//Si se cumple la condición, 
//ejecutará el código que esté entre las llaves del if, si no, del else


// igual == estrictamente igual === desigual != estrictamente desigual !==
// === Es que sea igual y del mismo tipo
let teacherName = 'Héctor';
if(teacherName == 'Héctor') {
    console.log('Que nombre más bonito');
} else {
    console.log('Cambiate el nombre a Héctor');
}
// '18' es == a 18. Nunca es recomendable usar el doble igual, siempre triple!

// && and
// || or
// true && true = true
// true && false = false
// false && false = false
// true || true = true
// true || false = true
// false || false = false
age = 15;
teacherName = 'Héctor';
if(age >= 18 || teacherName === 'Héctor') {
    console.log('genial!');
} else {
    console.log('fatal!');
}