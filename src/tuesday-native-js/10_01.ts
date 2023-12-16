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
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{
        id: number
        title: string
    }>
}

export const makeHairStyle = (u: UserType, power: 2) =>
    ({...u, hair: u.hair / power})

export const moveUser = (u: UserWithLaptopType, title: string) =>
    ({...u, address: {...u.address, title}})

export const upgradeUserLaptop = (u: UserWithLaptopType, title: string) =>
    ({...u, laptop: {...u.laptop, title}})

export const addNewBooksToUser = (u: UserWithBooksType & UserWithLaptopType, books: string[]) =>
    ({...u, books: [...u.books, ...books]})

export const updateBook = (u: UserWithBooksType & UserWithLaptopType, book1: string, book2: string) =>
    ({...u, books: u.books.map(b => b === book1 ? book2 : b)})

export const romeveBook = (u: UserWithBooksType & UserWithLaptopType, book: string) =>
    ({...u, books: u.books.filter(b => b !== book)})

export const addCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: string) =>
    ({...u, companies: [...u.companies, {id: u.companies.length + 1, title: newCompany}]})

export const updateCompanyName = (u: WithCompaniesType, id: number, title: string) =>
    ({...u, companies: u.companies.map(el => el.id === id ? {...el, title} : el)})

type companiesType = {
    [key: string]: Array<{
        id: number
        title: string
    }>
}

export const updateCompany2 = (companies: companiesType, userName: string, companyId: number, newTitle: string) =>
    ({
        ...companies, [userName]: companies[userName]
            .map(el => el.id === companyId ? {...el, title: newTitle} : el)
    })
