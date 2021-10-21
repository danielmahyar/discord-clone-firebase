import { useHistory } from 'react-router-dom';

interface Props {
    uid: string;
    name: string;
    img_url: string;
}

const ServerIcon = (props: Props) => {
    const { uid, name, img_url } = props;
    const history = useHistory()

    const handleServerClick = (): void => {
        history.push(`/server/${uid}`)
    };

    return (
        <div 
            className="h-full w-full items-center justify-center relative cursor-pointer group z-20"
            onClick={handleServerClick}
        >
            <span className="absolute rounded top-1.5 z-50 -right-20 text-white p-2 font-bold bg-discord-dark transform scale-0 transition-all ease-in origin-left group-hover:scale-100">{name}</span>
            <div className="h-full w-full relative ">
                <span className="h-4 w-4 absolute transition-all ease-in transform rounded-full bg-white group-hover:rounded group-hover:h-6 -left-5 top-4 group-hover:top-6"></span>
                <img src={img_url} className="transition-all ease-in h-full w-full rounded-3xl group-hover:rounded-2xl object-cover" alt="server con"/>
            </div>
        </div>
    )
};

export default ServerIcon;
