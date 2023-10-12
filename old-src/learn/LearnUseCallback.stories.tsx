import React, {useCallback, useState} from "react";

export default {
    title: "likeUseCallback",
};

export const Main = () => {
    console.log("Main rendered");
    const [users, setUsers] = useState(['Dimych', 'Katya', 'Masha', 'Petr']);
    const [counter, setCounter] = useState<number>(4)

    const onClickHandler = () => {
        console.log(users)
        setUsers([...users, 'Vasya'])
        console.log(users)
        // setCount((count) => count + 1);
    };

    const obj = {a1: 2, a2: 3}


    const exampleUseCallback = () => {
        console.log(obj.a1 + obj.a2)
    }

    return (
        <>
            <h1>UseCallback</h1>
            <p>{counter}</p>

            <Counter obj={obj} exampleUseCallback={exampleUseCallback}/>

            <Users onClickHandler={onClickHandler} users={users}/>
        </>
    );
};

type TUsers = {
    users: Array<string>;
    onClickHandler: () => void;
};
const Users = React.memo(({users, onClickHandler}: TUsers) => {
    console.log("Users rendered");

    return (
        <div>
            {users.map((user, index) => (
                user.endsWith('a') && <p key={index}>
                    {user}
                </p>
            ))}
            <button onClick={onClickHandler}> Add User Vasya</button>
        </div>
    );
});

type TCounter = {
    obj: {
        a1: number
        a2: number
    }
    exampleUseCallback: () => void
}

const Counter = ({obj, exampleUseCallback}: TCounter) => {
    console.log("Counter rendered");

    return (
        <div>
            <p>{obj.a2}</p>
            <button onClick={exampleUseCallback}>+1</button>
        </div>
    );
};
