import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop
} from './10_01';


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Huawei'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.address.title).not.toBe(movedUser.address.title)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')
})

test('upgrade user laptop', () => {
    let user: UserWithLaptop = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Huawei'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.laptop.title).not.toBe('Macbook')
    expect(upgradedUser.laptop.title).toBe('Macbook')
})
test('add new books to user', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Huawei'
        },
        books: ['css', 'html', 'js']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books.length).toBe(3)
    expect(userCopy.books.length).toBe(5)
    expect(userCopy.books[3]).toBe('ts')
})

