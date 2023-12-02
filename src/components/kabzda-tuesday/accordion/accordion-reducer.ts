import {StateType} from './AccordionWithReducer';

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-ACCORDION': {
            return {
                ...state,
                isCollapsed: !state.isCollapsed
            }
        }
        default:
            throw new Error('bad action')
    }
}

type ActionType = ReturnType<typeof ToggleAccordionAC>

export const ToggleAccordionAC = () => {
    return {
        type: 'TOGGLE-ACCORDION'
    } as const
}