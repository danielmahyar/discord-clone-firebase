import React from 'react';
import FriendOnlineListField from './FriendOnlineListField';
import FriendsHeader from './FriendsHeader';

interface Props {
}

const friendsOnlineList = (props: Props) => {
    return (
        <div className="p-6 w-full h-full bg-gray-500 flex flex-col scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-600 scrollbar-thumb-gray-900 overflow-y-scroll">
            <div className="px-3">
                <h2 className="font-semibold mb-2 text-gray-300 text-sm rounded uppercase">Online - 12</h2>
            </div>


            <div className="flex flex-col ">
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
                <FriendOnlineListField />
            </div>
        </div>
    );
};

export default friendsOnlineList;
