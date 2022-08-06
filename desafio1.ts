
/*
Questão: Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee = {};
employee.code = 10;
employee.name = "John";
*/

/*
Correção: Basta atribuir os tipos usando alguma técnica apresentada no bootcamp
*/

//Solucão possível

interface Employee{
    code: number,
    name: string
}

let employee: Employee = {
    code: 10,
    name: "John"
}