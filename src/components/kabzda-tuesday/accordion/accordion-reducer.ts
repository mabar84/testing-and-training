export const reducer = (state: boolean, action: ActionType): boolean => {
    switch (action.type) {
        case 'TOGGLE-ACCORDION': {
            return !state
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