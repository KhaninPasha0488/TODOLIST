import React from 'react';

type  ButtonPropsType = {
    title: string
    onClickCallback:()=> void
    active:boolean
}
const Button:React.FC<ButtonPropsType> = ({
    title,
    onClickCallback
}) => {
    return (
        <button onClick={onClickCallback}>{title}</button>
    );
};

export default Button;