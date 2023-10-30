export function sum(a: number, b: number) {
    return a + b
}

export function multiply(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.filter(el => el !== '' && el !== '-')
        .map(w => w.replace('!', '')
            .replace('.', '')
            .replace(',', ''))
}


