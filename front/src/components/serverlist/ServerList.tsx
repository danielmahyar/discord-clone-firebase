import FriendsIcon from "./FriendsIcon";
import ServerIcon from "./ServerIcon";

interface Props {
}

const ServerList = (props: Props) => {
    return (
        <div className="h-full scrollbar-hide overflow-y-scroll bg-discord-dark w-16 flex-shrink-0">
            <div className="flex flex-col space-y-3 justify-center items-center p-2">
                <FriendsIcon />
                <div className="bg-discord-border w-[32px] h-[2px]"></div>
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
                <ServerIcon />
            </div>
        </div>
    )
};

export default ServerList;
