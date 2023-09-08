import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendList,
  FriendName,
  FriendStatus,
} from './FriendListStyled';

const FriendsList = props => {
  const data = props.data;

  const friendsList = data.map(stat => {
    return (
      <FriendItem key={stat.id}>
        <FriendStatus $status={stat.isOnline}></FriendStatus>
        <img src={stat.avatar} alt="User avatar" width="48" />
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

FriendsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
