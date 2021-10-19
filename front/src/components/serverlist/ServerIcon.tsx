import React from 'react';
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import img from "../../assets/template.jpg"

interface Props {
    iconClick?: any;
}

const ServerIcon = (props: Props) => {
    const { iconClick } = props;
    const history = useHistory()

    const handleServerClick = (): void => {
        history.push("/server/antikim")
    };

    return (
        <div 
            className="h-full flex items-center justify-center cursor-pointer relative group"
            onClick={handleServerClick}
        >
            <span className="h-4 w-4 absolute transition-all ease-in transform rounded-full bg-white group-hover:rounded group-hover:h-6 -left-5 top-4 group-hover:top-6"></span>
            <img src={img} width="100%" className="transition-all ease-in rounded-3xl group-hover:rounded-xl" />
        </div>
    )
};

export default ServerIcon;
