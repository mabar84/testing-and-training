import {CityType, GovernmentBuildingsType, HouseType} from './02';


export const addMoneyToBudget = (building: GovernmentBuildingsType, sum: number) => {
    building.budget += sum
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, people: number) => {
    building.staffCount -= people
}
export const toHireStaff = (building: GovernmentBuildingsType, people: number) => {
    building.staffCount += people
}

export const demoListHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter((el) => el.address.street.title !== street)
}

export function greetingPeople(city: CityType) {
    return `Hello ${city.title}! All the ${city.citizensNumber} men`
}