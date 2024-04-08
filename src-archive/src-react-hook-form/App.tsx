import { useForm, SubmitHandler, useController } from "react-hook-form";
//import {TextField} from "./components/TextField";
//import {CheckBoxRadix} from "./components/checkBoxRadix/CheckBoxRadix";
import { ControlledTextField } from "./components/componentsOUTcontrol/textField/ControlledTextField";
import { ControlledCheckBoxRadix } from "./components/componentsOUTcontrol/checkBoxRadix/ControlledCheckBoxRadix";
import { TextField } from "./components/componentsWithControl/textField/TextField";
import { CheckBoxRadix } from "./components/componentsWithControl/checkBoxRadix/CheckBoxRadix";

export type Inputs = {
  login: string;
  password: string;
  rememberMe: boolean;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  // const {
  //     field: {value, onChange},
  // } = useController({
  //     name: 'rememberMe',
  //     control,
  // })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data); // Выводим объект с ошибками
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/*<TextField {...register("login")} />*/}
        {/*<ControlledTextField name={"login"} control={control}/>*/}
        <TextField name={"login"} control={control} />
      </div>

      <div>
        <TextField name={"password"} control={control} />
        {/*<ControlledTextField name={"password"} control={control}/>*/}
        {/*<TextField {...register("password")} />*/}
      </div>

      <div>
        {/*<ControlledCheckBoxRadix control={control} name={'rememberMe'}/>*/}
        {/*<CheckBoxRadix value={value} onChange={onChange}/>*/}
        <CheckBoxRadix name={"rememberMe"} control={control} />
      </div>

      <input type="submit" />
    </form>
  );
}
//-----------------------------------------------------------------
// import {useForm, SubmitHandler, useController} from "react-hook-form";
// import {TextField} from "./components/TextField";
// import {CheckBoxRadix} from "./components/checkBoxRadix/CheckBoxRadix";
//
// type Inputs = {
//     login: string;
//     password: string;
//     rememberMe: boolean
// };
//
// export default function App() {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//         control
//     } = useForm<Inputs>();
//
//     const {
//         field: {value, onChange},
//     } = useController({
//         name: 'rememberMe',
//         control,
//     })
//
//
//
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         console.log(data); // Выводим объект с ошибками
//     };
//
//     return (
//
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <TextField {...register("login")} />
//             </div>
//
//             <div>
//                 <TextField {...register("password")} />
//                 {/*<input {...register("password", {minLength: 3})} />*/}
//                 {/*{errors.password && <div style={{color: 'red'}}>To short</div>}*/}
//             </div>
//
//             <div>
//                 <CheckBoxRadix value={value} onChange={onChange}/>
//             </div>
//
//             <input type="submit"/>
//         </form>
//     );
// }
