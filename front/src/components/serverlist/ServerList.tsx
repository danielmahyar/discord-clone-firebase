import FriendsIcon from "./FriendsIcon";
import ServerIcon from "./ServerIcon";

interface Props {
    serverlist: Array<any>;
}

const ServerList = (props: Props) => {
    const { serverlist } = props;

    return (
        <div className="h-full scrollbar-hide overflow-y-scrol overflow-x-hiddenl z-50 bg-discord-dark w-16 relative flex-shrink-0">
            <div className="flex flex-col space-y-3 justify-center items-center p-2">
                <FriendsIcon />
                <div className="bg-discord-border w-[32px] h-[2px]"></div>
                {serverlist.length > 0 && serverlist.map((server, index) => (
                    <ServerIcon key={index} {...server} />
                ))}
            </div>
        </div>
    )
};

export default ServerList;
