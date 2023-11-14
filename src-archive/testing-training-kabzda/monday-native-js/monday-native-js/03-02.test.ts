import {CityType} from './02';
import {
    addMoneyToBudget,
    demoListHousesOnTheStreet,
    greetingPeople,
    repairHouse,
    toFireStaff,
    toHireStaff
} from './03-02';

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
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
                buildAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: 'Hogwarts street'
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
                        title: 'Souths park str'
                    }
                }
            }],
        citizensNumber: 1000000
    }


})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);

    addMoneyToBudget(city.governmentBuildings[0], -200000);
    expect(city.governmentBuildings[0].budget).toBe(100000);

    addMoneyToBudget(city.governmentBuildings[1], 10);
    expect(city.governmentBuildings[1].budget).toBe(500010);
});

// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});

// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220);

    toHireStaff(city.governmentBuildings[1], 100);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
});

//06
test('Houses should be destroyed', () => {
    demoListHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[1].buildAt).toBe(2020)
})
//07
test('Houses should be destroyed', () => {
    const message = greetingPeople(city)

    expect(message).toBe('Hello New York! All the 1000000 men')
})