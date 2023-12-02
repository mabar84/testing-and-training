import {reducer} from './accordion-reducer';

test('accordion should toggle collapsed', () => {
    const startState = true
    const endState = reducer(startState, {type: 'TOGGLE-ACCORDION'})
    expect(endState).toBe(false)
})