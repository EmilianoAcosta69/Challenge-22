// Un hospital queire una app donde el paciente ponga sus datos, su dolencia y se determine que tipo de estudio debe realizarse.
// Dolencia: Dolor abdominal.
// A tenes en cuenta: A las mujeres embarazadas no se le pude hacer una tomografia o una plca porque puede tener efectos teratogenicos.

let nombreYAp = prompt('Ingrese su Nombre y Apellido: ');
let genero = prompt('Indique su genero (Masculino o Femenino): ').toLowerCase();
let dolencia = prompt('Indique su dolencia: ').toLowerCase();
let embarazo = true;


if(genero == 'masculino' && dolencia == 'dolor abdominal'){
    alert(`${nombreYAp} Usted debe realizarse una tomografia.`);
}
else if (genero =="femenino" && dolencia == "dolor abdominal") {
    embarazo = confirm('Usted esta embarazada? ');
}
else if (genero == 'femenino' && dolencia == 'dolor abdominal' && embarazo){
    alert(`${nombreYAp} Usted no debe realizarse una tomografia. Por favor consulte con un medico especializado para seguir otro tipo de tratamiento `);
}
else{
    alert(`${nombreYAp} Usted debe realizarse una tomografia.`);
}
    