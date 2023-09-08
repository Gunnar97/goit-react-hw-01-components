import React from 'react';

const Profile = props => {
  const data = props.data;

  const statsBlock = data.map(stat => {
    return (
      <ProfileStatItem key={stat[0]}>
        <ProfileStatNameStat>{stat[0]}</ProfileStatNameStat>
        <ProfileStatValueStat>{stat[1]}</ProfileStatValueStat>
      </ProfileStatItem>
    );
  });
  return (
    <>
      <ul class="friend-list"></ul>
    </>
  );
};

export default Profile;
