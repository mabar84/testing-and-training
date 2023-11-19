export type UserType = {
    [key: string]: { id: number, name: string }
}

let users: UserType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232': {id: 3232, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    expect(users['101'].name).toBe('Dimych')

    expect(users['101']).toEqual({id: 101, name: 'Dimych'})

    expect(users['1'].name).toBe('Katya')

    users['1'].name = 'Eketerina'
    expect(users['1'].name).toBe('Eketerina')

})
test('should delete corresponding user', () => {
    delete users['101']
    expect(users['101']).toBe(undefined)
    expect(users['101']).toBeUndefined()


})