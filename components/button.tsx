import React, { ReactNode, FunctionComponent } from 'react';

interface Props {
    children?: ReactNode;
}

const Button: FunctionComponent<Props> = ({ children }) => {
    return <button>{children}</button>;
};

export default Button;
