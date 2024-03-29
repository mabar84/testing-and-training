import React, {memo, useState} from 'react';

// const NewMessageCounter = (props: { count: number }) => {
//     console.log('NewMessageCounter')
//     return <div>{props.count}</div>
// }
//
//
// const Users = memo((props: { users: Array<string> }) => {
//     console.log('Users')
//     return <div>
//         {props.users.map((u, i) => <div key={i}>{u}</div>)}
//     </div>
// })


const UsersPrimitive = memo(() => {
    console.log('UsersPrimitive')
    return <div>

        <p>UsersPrimitive</p>
    </div>
})

export const ReactMemoDemo = () => {
    console.log('ReactMemoDemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <h3>React.memo</h3>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        {/*<button onClick={addUser}>add user</button>*/}
        {/*<NewMessageCounter count={counter}/>*/}
        {/*<Users users={users}/>*/}
        <UsersPrimitive/>
    </>
}
