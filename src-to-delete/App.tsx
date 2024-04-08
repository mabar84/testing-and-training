import {useForm, SubmitHandler, useController} from "react-hook-form";
import {TextField} from "./components/TextField/TextField";
import {CheckBoxRadix} from "./components/Checkbox/Checkbox";
import {ControlTextField} from "./components/componentsOUTcontrol/ControlTextField";

export type Inputs = {
    login: string;
    password: string;
    rememberMe: boolean
};

export default function App() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm<Inputs>();

    const {
        field: {value, onChange},
    } = useController({
        name: 'rememberMe',
        control,
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data); // Выводим объект с ошибками
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/*<input {...register("login")} />*/}

                {/*<TextField   {...register("login")}  />*/}
                <ControlTextField name={'login'} control={control}/>
            </div>

            <div>
                <input {...register("password")} />
            </div>

            <div>
                <CheckBoxRadix value={value} onChange={onChange}/>
                {/*<input type="checkbox"  {...register("rememberMe", {required: true})}/>*/}
            </div>

            <input type="submit"/>
        </form>
    );
}


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
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         console.log(data); // Выводим объект с ошибками
//     };
//
//     return (
//
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 {/*<input {...register("login")} />*/}
//
//                 <TextField   {...register("login")}  />
//
//             </div>
//
//             <div>
//                 <input {...register("password")} />
//             </div>
//
//             <div>
//                 <CheckBoxRadix value={value} onChange={onChange}/>
//                 {/*<input type="checkbox"  {...register("rememberMe", {required: true})}/>*/}
//             </div>
//
//             <input type="submit"/>
//         </form>
//     );
// }