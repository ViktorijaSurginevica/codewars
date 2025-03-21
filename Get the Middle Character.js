// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {  
    const len = s.length; // Определяем длину строки  
    const middleIndex = Math.floor(len / 2); // Находим индекс среднего элемента  

    // Если длина строки четная, возвращаем 2 средних символа  
    // Если длина строки нечетная, возвращаем один средний символ  
    return len % 2 === 0 ? s[middleIndex - 1] + s[middleIndex] : s[middleIndex];  
}  

