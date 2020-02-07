import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';

interface ContainerProps {
    backgroundColor?: string;
    y: number;
    x: number;
}

const AspectObjectContainer = styled.div<ContainerProps>`
    background: ${props => props.backgroundColor};
    margin-bottom: 0;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        display: block;
        width: 100%;
        padding-top: ${props => (props.y / props.x) * 100}%;
    }

    & > * {
        margin: 0;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
    }

    & > iframe,
    & > embed,
    & > video {
        height: 100%;
    }
`;

interface Props {
    backgroundColor?: string;
    x: number;
    y: number;
    children?: ReactNode;
    className?: string;
}

const AspectRatio: FunctionComponent<Props> = ({
    x,
    y,
    backgroundColor = 'transparent',
    className,
    children = null,
}) => {
    return (
        <AspectObjectContainer
            className={className}
            x={x}
            y={y}
            backgroundColor={backgroundColor}
        >
            {children}
        </AspectObjectContainer>
    );
};

export default AspectRatio;
