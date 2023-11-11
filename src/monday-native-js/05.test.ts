import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, greetinMessagesToPeople, ManType} from './05';
import {CityType} from './02';


let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('should get array getting messages', () => {
    const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome`)


    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome')
    expect(messages[1]).toBe('Hello Alexander. Welcome')
    expect(messages[2]).toBe('Hello Dmitry. Welcome')

})


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }],
        citizensNumber: 1000000
    }
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', () => {

    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);


    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('White street');
    expect(streetsNames[1]).toBe('Happy street');
    expect(streetsNames[2]).toBe('Happy street');
})

test('create greeting messages for people every streets', () => {
    let messagesToPeople = greetinMessagesToPeople(city.houses);

    expect(messagesToPeople.length).toBe(3);
    expect(messagesToPeople[0]).toBe('Hi people of White street');
    expect(messagesToPeople[1]).toBe('Hi people of Happy street');
    expect(messagesToPeople[2]).toBe('Hi people of Happy street');

})