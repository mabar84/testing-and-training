import {AccordionReducer, action} from './AccordionReducer';

test('switch collapsed on true', () => {
    const startState = {collapsed: false}
    const endState = AccordionReducer(startState, action)
    expect(endState.collapsed).toBe(true)
})
test('switch collapsed on false', () => {
    const startState = {collapsed: true}
    const endState = AccordionReducer(startState, action)
    expect(endState.collapsed).toBe(false)
})
test('should throw error', () => {
    const startState = {collapsed: true}
    expect(() => {
        AccordionReducer(startState, {type: 'FAKE'})
    }).toThrowError()
})
