import {ChangeEvent, FC, memo, useCallback, useState} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

// type PropsType = { value: string, onChange: (text:string) => void };

// Task 1
// If change value on input Title component not re-render
// If change value on input Task_1 component not re-render

export const Task_1 = () => {
  console.log('Task_1')

  //
  // const handleChange =useCallback ((text:string) => {
  //   setValue(text);
  // },[setValue])

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      {/*<Input value={value} onChange={setValue} />*/}
      <Input   />
      <Title title="I am a title" />
    </div>
  );
}

const Title =  (props: { title: string }) => {
  console.log('Title')
  return <>
    <h3>{props.title}</h3>
  </>
}

const Input =  memo(  () => {
 const onChangeHandler= useCallback ((e: ChangeEvent<HTMLInputElement>)=>{
   setValue(e.currentTarget.value)
 },[])


  const [value, setValue] = useState('');

  console.log('Input')
  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={onChangeHandler} />
  );
})
