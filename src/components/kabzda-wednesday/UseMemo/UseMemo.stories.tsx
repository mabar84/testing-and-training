import type {Meta} from '@storybook/react';
import {UseMemo} from './UseMemo';
import React, {useMemo, useState} from 'react';

const meta: Meta<typeof UseMemo> = {
    component: UseMemo,
};

export default meta;

export const InputsWithDifficultCounting = () => <UseMemo/>


//===========================================================//


const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})


export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Fedia', 'Artem', 'Katya'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    // const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)

    const addUser = () => setUsers([...users, 'Sveta' + new Date().getTime()])

    return <>
        <h3>React.memo + useMemo</h3>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}


