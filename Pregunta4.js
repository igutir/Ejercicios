/*
Pregunta 4:
Reglas:
- Dos empleados se consideran duplicados si:
  1. Tienen el mismo nombre, o
  2. Sus correos base (ignorando alias con '+') son iguales.

Extras:
- ¿Qué harías con combinaciones cruzadas como Ana usando el correo de Luis y viceversa?
R:// Si me rijo por las reglas impuestas al principio, realmente no necesito hacer nada, porque aunque hubiesen correos intercambiados, los empleados pueden ser eliminados por nombre.

- ¿Cómo manejarías variaciones como 'car.los' vs 'carlos' o dominios distintos?
R:// Si existiera la regla de que las variaciones 'car.los' deben ser abordadas, habría que regularizarlo, para este caso específico, al igual que se quitan los alias, se podrían quitar los ".".
    Para el caso de los diminios, considero que carlos@example.com y carlos@example.org son correos distintos y no deben ser intervenidos.

- ¿Es necesario aplicar normalización de nombres y correos? Justifica.
R:// Depende si interviene de alguna manera en algún proceso importante del negocio. Al igual que los alias son ignorados, es posible que variaciones en los nombres del correo también sean ignoradas.
    En caso de no serlo (por ejemplo, para este ejercicio sería importante, ya que car.los y carlos se consideran distintos), sería necesaria la normalización


Desafío adicional:
- Implementa dos versiones:
  1. `dedupeByNameOrEmailBase`: elimina si coincide nombre o correo base.
  2. `dedupeByNameAndEmailBase`: elimina solo si coinciden ambos.
- Explica en qué contexto usarías cada una.
R:// En un contexto deseable, normalizado, sin irregularidades, 'dedupeByNameAndEmailBase' sería apropiado. Por ejemplo, puede haber más de un Carlos, y en ese caso, sus correos deberían ser distintos,
        por lo que validar nombre y correo respetaría estas situaciones e impediría borrar a un Carlos de manera injusta.
    En un contexto con irregularidades como el presentado en el ejercicio, donde hay empleados con correos intercambiados, el 'dedupeByNameOrEmailBase' es más apropiado, ya que se hace cargo
        de esos detalles.
*/

const employees = [
    { id: 1, name: "Ana", email: "ana@example.com" },
    { id: 2, name: "Luis", email: "luis@example.com" },
    { id: 3, name: "Ana", email: "ana@example.com" },
    { id: 4, name: "Carlos", email: "carlos@example.com" },
    { id: 5, name: "Luis", email: "luis+ventas@example.com" },
    { id: 6, name: "Ana", email: "ana+hr@example.com" },
    { id: 7, name: "Pedro", email: "pedro+dev@example.com" },
    { id: 8, name: "Pedro", email: "pedro@example.com" },
    { id: 9, name: "Ana", email: "luis@example.com" },
    { id: 10, name: "Luis", email: "ana@example.com" },
    { id: 11, name: "Carlos", email: "carlos+admin@example.com" },
    { id: 12, name: "Carlos", email: "car.los@example.com" },
    { id: 13, name: "Anna", email: "ana@example.com" },
    { id: 14, name: "Luis", email: "l.uis@example.com" },
    { id: 15, name: "Carlos", email: "carlos@example.org" }
  ];

//Solución

//Funcion que retorna un email sin el alias
function getBaseEmail(email){

    if(email.indexOf("+") < 0){
        return email;
    }

    const first_half = email.substring(0, email.indexOf("+"));
    const second_half = email.substring(email.indexOf("@"), email.length);

    return first_half + second_half;
}

//Funcion que elimina empleados duplicados validando el nombre O email
function dedupeByNameOrEmailBase(employees){

    const new_employees = [];

    employees.forEach((employee, index) => {

        if(index == 0){
            new_employees.push(employee);
            return
        }

        const found_employee = new_employees.find((new_employee) => {

            return (new_employee.name == employee.name) || (getBaseEmail(new_employee.email) == getBaseEmail(employee.email));
        });

        if(found_employee === undefined){
            new_employees.push(employee);
        }
    })

    return new_employees;
}

//Funcion que elimina empleados duplicados validando el nombre Y email
function dedupeByNameAndEmailBase(employees){

    const new_employees = [];

    employees.forEach((employee, index) => {

        if(index == 0){
            new_employees.push(employee);
            return
        }

        const found_employee = new_employees.find((new_employee) => {

            return (new_employee.name == employee.name) && (getBaseEmail(new_employee.email) == getBaseEmail(employee.email));
        });

        if(found_employee === undefined){
            new_employees.push(employee);
        }
    })

    return new_employees;
}

console.log(dedupeByNameOrEmailBase(employees));
console.log(dedupeByNameAndEmailBase(employees));
