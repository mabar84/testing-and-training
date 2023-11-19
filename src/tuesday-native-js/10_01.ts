export type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export const makeHairStyle = (u: UserType, power: 2) =>
    ({...u, hair: u.hair / power})

export const moveUser = (u: UserWithLaptop, title: string) =>
    ({...u, address: {...u.address, title}})

export const upgradeUserLaptop = (u: UserWithLaptop, title: string) =>
    ({...u, laptop: {...u.laptop, title}})
export const addNewBooksToUser = (u: UserWithBooksType & UserWithLaptop, books: string[]) =>
    ({...u, books: [...u.books, ...books]})
