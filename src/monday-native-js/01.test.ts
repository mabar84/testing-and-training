import {multiply, splitIntoWords, sum} from './01'

//data
// const a = 1, b = 2, c = 3

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    a = 100
    expect(sum(a, b)).toBe(102)
    expect(sum(a, c)).toBe(103)
    expect(sum(b, c)).toBe(5)
})

test('multiply should be correct', () => {

    expect(multiply(a, b)).toBe(2)
    expect(multiply(a, c)).toBe(3)
    expect(multiply(b, c)).toBe(6)
})

test('splitting into words should be correct', () => {

    //data
    const sent1 = 'Hello    my  friend!'
    const sent2 = 'JS - the best   programming language.'

    //acton
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')

})