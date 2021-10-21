import { useContext } from 'react';
import { CommContext, FriendInformation } from '../../../pages/IndexPage';
import FriendOnlineListField from './FriendOnlineListField';


const FriendsOnlineList = ({ site }: any) => {
    const { friends }: { friends: Array<FriendInformation> } = useContext(CommContext)
    const filteredFriends = filterSiteReq(site, friends);


    return (
        <div className="p-6 pr-8 w-full h-full z-0 bg-discord-light flex flex-col scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-600 scrollbar-thumb-gray-900 overflow-y-visible">
            <div className="px-3">
                <h2 className="font-semibold mb-2 text-gray-300 text-sm rounded uppercase">{(site === "all" ? "All friends" : site)} - {filteredFriends.length}</h2>
            </div>

            <div className="flex flex-col ">
                {filteredFriends.length > 0 && filteredFriends.map((friend, index) => (
                    <FriendOnlineListField key={index} {...friend} />
                ))}

                {filteredFriends.length === 0 && friends.length === 0 && (
                    <p>You have no friends</p>
                )}

            </div>
        </div>
    );
};

export default FriendsOnlineList;

const filterSiteReq = (site: string, friends: Array<FriendInformation>): Array<FriendInformation> => {
    switch (site) {
        case "all":
            return friends
        case "online":
            return friends.filter(friend => friend.status === "online")
        case "pending":
            return friends.filter(friend => friend.status === "pending")
        case "blocked":
            return friends.filter(friend => friend.status === "blocked")
        default:
            return []
    }
}