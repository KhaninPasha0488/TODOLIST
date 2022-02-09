import React, {ChangeEvent, useState} from 'react';
type TodoListHeaderPropsType = {
    title:string
    callBack:(title:string)=>void
}
const EditableSpan = (props:TodoListHeaderPropsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }


    const onDoubleClickHandler=()=>{
        setEdit(true)
    }

    const onBlurHandler=()=>{
        setEdit(false)
        props.callBack(newTitle)
    }

    return (
        edit
            ? <input value={newTitle} autoFocus onBlur={onBlurHandler}   onChange={onChangeHandler}/>
            :  <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}

export default EditableSpan;