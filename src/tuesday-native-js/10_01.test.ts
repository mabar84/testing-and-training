import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser, romeveBook, updateBook, updateCompany2, updateCompanyName,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
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
    let user: UserWithLaptopType = {
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
    let user: UserWithLaptopType = {
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
    let user: UserWithLaptopType & UserWithBooksType = {
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

test('update book js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
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

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books.length).toBe(3)
    expect(userCopy.books.length).toBe(3)
    expect(user.books[2]).toBe('js')
    expect(userCopy.books[2]).toBe('ts')
})


test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
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

    const userCopy = romeveBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books.length).toBe(3)
    expect(userCopy.books.length).toBe(2)
    expect(user.books[2]).toBe('js')
    expect(userCopy.books[1]).toBe('html')
})

test('add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Huawei'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }
    const newCompany = 'Coogle'
    const userCopy = addCompany(user, newCompany)

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe(newCompany)
})
test('update company name', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Huawei'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }
    const newCompanyName = 'EPAM123'
    const userCopy = updateCompanyName(user, 1, newCompanyName) as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(2)
    expect(userCopy.companies[0].title).toBe(newCompanyName)
})
test('update company', () => {
    let companies = {
        'Dimych': [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ],
        'Artem': [
            {id: 1, title: 'Google'}
        ],
    }

    const newCompanyName = 'EP404'
    const companiesCopy = updateCompany2(companies, 'Dimych', 1, newCompanyName)

    expect(companies).not.toBe(companiesCopy)
    expect(companies['Dimych']).not.toBe(companiesCopy['Dimych'])
    expect(companies['Artem']).toBe(companiesCopy['Artem'])
    expect(companies['Dimych'][0].title).toBe('Epam')
    expect(companiesCopy['Dimych'][0].title).toBe('EP404')
})

