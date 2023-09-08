import React from 'react';
import {
  FriendItem,
  FriendList,
  FriendName,
  FriendStatus,
} from './FriendListStyled';

const Profile = props => {
  const data = props.data;

  const friendsList = data.map(stat => {
    return (
      <FriendItem key={data.id}>
        <FriendStatus isOnline={stat.isOnline}></FriendStatus>
        <img class="avatar" src={stat.avatar} alt="User avatar" width="48" />
        <FriendName>{stat.name}</FriendName>
      </FriendItem>
    );
  });
  return (
    <>
      <FriendList>{friendsList}</FriendList>
    </>
  );
};

export default Profile;
