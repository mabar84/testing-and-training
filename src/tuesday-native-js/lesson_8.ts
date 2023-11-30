// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    //@ts-ignore
    return [...arguments].reduce((a, b) => a + b)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b <= c || a + c <= b || b + c <= a) return '00'
    if (a === b && b === c) return '10'
    if (a === b || b === c || a === c) return '01'
    return '11'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString().split('').map(el => +el).reduce((a, b) => a + b)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let s0 = 0, s1 = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            s0 += arr[i]
        } else {
            s1 += arr[i]
        }
    }
    return s0 > s1
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(el => (el % 1 === 0) && (el > 0)).map(n => n * n)
    // return array.reduce((acc: Array<number>, el: number) => {
    //         if ((el % 1 === 0) && (el > 0)) {
    //             acc.push(el * el)
    //         }
    //         return acc
    //     }, []
    // )
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    // let s = 0;
    // let s = 0;
    // while (N > 0) {
    //     s += N
    //     N--
    // }
    // return s

    if (!N) return 0
    return N + sumFirstNumbers(N - 1);

    // return N * (N + 1) / 2;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const res = []
    const arr = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    for (let i = 0; i < arr.length; i++) {
        while (amountOfMoney >= arr[i]) {
            res.push(arr[i])
            amountOfMoney -= arr[i]
        }
    }
    return res
}