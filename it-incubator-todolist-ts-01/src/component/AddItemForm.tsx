import React, {useState} from 'react';
import button from "../Button";

export type AddItemFromType = {
    callBack: ( title: string) => void

}

const AddItemForm = (props: AddItemFromType) => {
    // const {callBack}=props
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.callBack( trimmedTitle)
        } else {
            setError(true)
        }

        setTitle("")
    }
    return (
        <div>
            <input value={title}
                   className={error ? "error" : ""}
                   onChange={(e) => {
                       setError(false)
                       setTitle(e.currentTarget.value)
                   }}
                // onClickAddTask={ onClickAddTask}

            />
            <button onClick={onClickAddTask}>+</button>
            {error && <div style={{color: "red"}}>Title is required</div>}
        </div>
    );
};

export default AddItemForm;