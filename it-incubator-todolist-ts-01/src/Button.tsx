import React from 'react';

type  ButtonPropsType = {
    title: string
    onClickCallback:()=> void
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