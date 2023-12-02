import {reducer} from './accordion-reducer';

test('accordion should toggle collapsed', () => {
    const startState = {isCollapsed: true}
    const endState = reducer(startState, {type: 'TOGGLE-ACCORDION'})
    expect(endState.isCollapsed).toBe(false)
})