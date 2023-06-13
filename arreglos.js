const arreglo = ['texto', 452.54, false, {propiedad: 'valor'}, [1, 1, 2, 3]];
console.log(arreglo);

const amigos = ['Uriel', 'Carolina', 'Cecilia'];
//para acceder a un elemento en epecifico solo se coloca la posición 
console.log('Accedemos a la posición 3: '+ amigos[2]);

const colores = [];
// de esta manera se asignan valores a un arreglo que ya existe
//y el usuario lo agregue de forma dinamica (NO ES COMÚN)
colores[0] = 'Azul';
colores[1] = 'Amarillo';
colores[2] = 'Negro';
colores[3] = 'Verde';
console.log(colores);
//length es un apropiedad de los arreglos que nos permite ver cuantos elementos existen dentro de este
console.log('El arreglo colores contiene: ' +colores.length +' colores en total');

//existen métodos diferentes que nos permiten el manejo de los arreglos
//como lo es push -> permite agregar al final del rreglo uno nuevo

colores.push('Blanco');
console.log('agregamos un nuevo elemto con el método push: '+colores);
