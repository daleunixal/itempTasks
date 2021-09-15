/** Задача 2 - работа с циклом */

// Дан массив [1, 2, 3, 4, 5, 0, 0, 0, 0, 0] такого вида. 
// Необходимо привести его к виду [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
// То есть, удвоить количество каждого элемента.
// Где элемент со значением 0 - свободная ячейка.
// Для массива, состоящего из нулей(свободных ячеек), верните пустой.

/**
 * 
 * @param {*} array массив
 * @returns удвоенный массив
 */
 function calculateDoubleArray(array) {
    const set = new Set(array);
    if(set.has(0) && set.size === 1){
       return []
    }
    set.delete(0);
    const res = []
    Array.from(set.entries()).forEach((value) => {
        res.push(value[1]);
        res.push(value[1]);
    })
    return res;
}

module.exports.calculateDoubleArray = calculateDoubleArray;