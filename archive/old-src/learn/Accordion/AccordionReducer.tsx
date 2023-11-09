import {TState} from "./AccordionWithUseReducer";

type TAction = {
    type: string
}
export const action = {
    type: 'TOGGLE-COLLAPSED'
}

export const AccordionReducer = (state: TState, action: TAction) => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad action type')
    }

}