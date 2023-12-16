import {v1} from 'uuid';

type InitialType = {
    [key: string]: TaskType[]
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

let initialState: InitialType = {
    ['todolistID1']: [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ],
    ['todolistID2']: [
        {id: v1(), title: 'HTML&CSS2', isDone: true},
        {id: v1(), title: 'JS2', isDone: true},
        {id: v1(), title: 'ReactJS2', isDone: false},
        {id: v1(), title: 'Rest API2', isDone: false},
        {id: v1(), title: 'GraphQL2', isDone: false},
    ]
}

export const tasksReducer = (state: InitialType = initialState, action: any) => {
    switch (action.type) {
        case 'xxx': {
            return state
        }
        default:
            return state
    }

}