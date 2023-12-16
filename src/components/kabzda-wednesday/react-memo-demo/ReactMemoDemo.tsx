import React, {useState} from 'react';

const NewMessageCounter = (props: { count: number }) => {
    // console.log('NewMessageCounter')
    return <div>{props.count}</div>
}


const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const ReactMemoDemo = () => {
    // console.log('ReactMemoDemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}
