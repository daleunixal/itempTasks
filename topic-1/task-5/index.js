/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if(number.toString().length !== 4){
        throw new Error();
    }
    const set = new Set();
    [...number.toString()].forEach((char) => set.add(char))
    if(set.size === 1){
        throw new Error();
    }
    while (number !== 6174){
        const charArray = [...number.toString()]
        let higher = '';
        let lower = '';
        charArray.sort().forEach(char => lower += char)
        charArray.sort().reverse().forEach(char => higher += char)
        number = parseInt(higher) - parseInt(lower);
    }

    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;