import FriendOnlineListField from './FriendOnlineListField';

interface Props {
}

const friends = [
    {
        friendID: 'friend',
    },
    {
        friendID: 'test'
    }
]

const friendsOnlineList = (props: Props) => {
    return (
        <div className="p-6 pr-8 w-full h-full z-0 bg-discord-light flex flex-col scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-600 scrollbar-thumb-gray-900 overflow-y-visible">
            <div className="px-3">
                <h2 className="font-semibold mb-2 text-gray-300 text-sm rounded uppercase">Online - 12</h2>
            </div>


            <div className="flex flex-col ">
                {friends.length > 0 && friends.map((friend, index) => (
                    <FriendOnlineListField key={index} {...friend} />
                ))}

            </div>
        </div>
    );
};

export default friendsOnlineList;
