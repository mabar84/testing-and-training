import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    oldTitle: string
    callBack: (newTitle: string) => void
}

const EditableSpan: React.FC<EditableSpanPropsType> = ({oldTitle, callBack}) => {

    const [edit, setEdit] = useState(false)
    const [newTitle, setNemTitle] = useState(oldTitle)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNemTitle(e.currentTarget.value)
    }

    const switchEdit = () => {
        setEdit(!edit)
        if (edit) updateTask()
    }

    const updateTask = () => {
        callBack(newTitle)
    }


    return (
        edit
            ? <input onChange={onChangeHandler} autoFocus onBlur={switchEdit} value={newTitle}/>
            : <span onDoubleClick={switchEdit}>{oldTitle}</span>
    )
};

export default EditableSpan;