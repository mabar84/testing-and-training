//Happy street

import {CityType, GovernmentBuildingsType} from './02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}
export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], count: number) => {
    return buildings.filter(b => b.staffCount > count)
}