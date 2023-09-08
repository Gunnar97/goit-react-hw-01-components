import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileImg,
  ProfileInfo,
  ProfileName,
  ProfileStatItem,
  ProfileStatList,
  ProfileStatNameStat,
  ProfileStatValueStat,
} from './Profile.Styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsData = Object.entries(stats);

  const statsBlock = statsData.map(stat => {
    return (
      <ProfileStatItem key={stat[0]}>
        <ProfileStatNameStat>{stat[0]}</ProfileStatNameStat>
        <ProfileStatValueStat>{stat[1]}</ProfileStatValueStat>
      </ProfileStatItem>
    );
  });
  return (
    <>
      <ProfileCard>
        <ProfileDescription>
          <ProfileImg src={avatar} alt="User avatar" />
          <ProfileName>{username}</ProfileName>
          <ProfileInfo>@{tag}</ProfileInfo>
          <ProfileInfo>{location}</ProfileInfo>
        </ProfileDescription>
        <ProfileStatList>{statsBlock}</ProfileStatList>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
