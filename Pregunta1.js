/*
Pregunta 1:
Ordena el arreglo:
1. Primero por edad ascendente.
2. Luego por fecha de creación descendente (más reciente primero) para aquellos con misma edad.
*/

const users = [
    { name: "Alice", age: 30, createdAt: "2023-05-01" },
    { name: "Bob", age: 25, createdAt: "2023-01-15" },
    { name: "Charlie", age: 30, createdAt: "2022-12-10" },
    { name: "Dana", age: 25, createdAt: "2023-06-20" },
  ]

// Solución:

function orderUsers(users){

    let ordered_users = users;

    ordered_users.sort((a, b) => {

        if(a.age === b.age){
            return Date.parse(b.createdAt) - Date.parse(a.createdAt); //orden por fecha de creación descendente para usuarios con la misma edad
        };

        return a.age - b.age; //orden por edad, ascendente
    })

    return ordered_users;
}

console.log(orderUsers(users));