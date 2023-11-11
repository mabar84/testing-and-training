export function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superUser = user
    superUser.age = 200
    expect(superUser.age).toBe(200)
})
test(
    'array reference test', () => {
        const users: UserType[] =
            [
                {
                    name: 'Dima',
                    age: 32,
                    address: {
                        title: 'Minsk'
                    }
                },
                {
                    name: 'Valera',
                    age: 52,
                    address: {
                        title: 'Minsk'
                    }
                }
            ]

        const admins = users
        admins.push({name: 'Bob', age: 10})

        expect(users.length).toBe(3)
        expect(users[2].name).toBe('Bob')
        expect(users[2]).toEqual({name: 'Bob', age: 10})

    })

test(
    'value type test', () => {
        let usersCount = 100
        let adminsCount = usersCount

        adminsCount++
        expect(adminsCount).toBe(101)
        expect(usersCount).toBe(100)


    })


test('reference type test with address', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dima',
        age: 32,
        address: address
    }
    address.title = 'Minsk City'

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    // user2.address.title = 'Canary'
    expect(user.address.title).toBe('Minsk City')
})

test('reference type test with arrays', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dima',
        age: 32,
        address: address
    }
    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    const users = [user, user2, {name: 'Misha', age: 4, address: address}]
    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})
