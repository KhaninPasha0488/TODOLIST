import React from 'react';

type  ButtonPropsType = {
    title: string
}
const Button = (props: ButtonPropsType) => {
    return (
        <button>{props.title}</button>
    );
};

export default Button;