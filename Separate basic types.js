// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

function separateTypes(input) {  
    const result = {};  

    // Перебираем каждый элемент входного массива  
    for (const value of input) {  
        // Определяем тип значения  
        const type = typeof value;  

        // Если у объекта еще нет свойства для этого типа, создаем его  
        if (!result[type]) {  
            result[type] = [];  
        }  

        // Добавляем текущее значение в соответствующий массив  
        result[type].push(value);  
    }  

    // Удаляем любые типы, которые не представляют интерес  
    const finalResult = {};  
    if (result.string) finalResult.string = result.string;  
    if (result.number) finalResult.number = result.number;  
    if (result.boolean) finalResult.boolean = result.boolean;  

    return finalResult;  
}  

// Пример использования  
const input = ['a', 1, 2, false, 'b'];  
const output = separateTypes(input);  
console.log(output);  