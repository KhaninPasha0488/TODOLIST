import React from 'react';

type  ButtonPropsType = {
    title: string
    onClickCallback: () => void
    active: boolean
}
const Button: React.FC<ButtonPropsType> = ({
       title,
       onClickCallback,
       active
   }) => {
    return (
        <button className={active ? "active" : ""} onClick={onClickCallback}>{title}</button>
    );
};

export default Button;