import React, {useState, useEffect} from "react";

export default {
    title: "8seconds",
};

export const Main = () => {
    console.log("Main rendered");
    const [count, setCount] = useState(8);

    const onClickHandler = () => {
        setCount((count) => count + 1);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount((count) => count - 1);
            } else {
                clearInterval(timer);
                setCount(0);
                alert("Time is end");
                return;
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [count]);

    return (
        <>
            <h1>Remainder</h1>
            <Counter onClickHandler={onClickHandler} count={count}/>
        </>
    );
};

type TCounter = {
    count: number;
    onClickHandler: () => void;
};
const Counter = ({count, onClickHandler}: TCounter) => {
    console.log("Counter rendered");

    return (
        <div>
            <button onClick={onClickHandler}> + {count} </button>
        </div>
    );
};
