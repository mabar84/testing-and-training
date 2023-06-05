import React, { ChangeEvent, useRef, useState, memo } from "react";

export default {
  title: "ForReactMemo",
};

export const Main = () => {
  console.log("Main rendered");
  return (
    <>
      <h1>Studying React.Memo</h1>
      <Counter />
    </>
  );
};
const Counter = () => {
  console.log("Counter rendered");

  const [value, setValue] = useState(0);
  const onClickHandler = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <button onClick={onClickHandler}> +</button>
      <p>{value}</p>
      <SomeText />
    </div>
  );
};
const SomeText = memo(() => {
  console.log("SomeText rendered");
  return (
    <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolores eius inventore obcaecati omnis quam rerum, sapiente sed ut!</>
  );
});
