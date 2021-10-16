import React from 'react';
import { AiFillCodeSandboxCircle } from "react-icons/ai";

interface Props {
    iconClick?: any;
}

const ServerIcon = (props: Props) => {
    const { iconClick } = props;

    const handleServerClick = (): void => iconClick();

    return (
        <div className="transform transition cursor-pointer scale-100 hover:scale-105">
            <AiFillCodeSandboxCircle onClick={handleServerClick} color={"white"} size={50}/>
        </div>
    )
};

export default ServerIcon;
