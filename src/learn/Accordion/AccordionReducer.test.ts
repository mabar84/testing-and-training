import {AccordionReducer, action} from './AccordionReducer';

test('toggle collapsed', () => {
    const startState = {
        collapsed: false
    }
    const endState = AccordionReducer(startState, action)

    expect(endState.collapsed).toBe(!startState.collapsed)
})
