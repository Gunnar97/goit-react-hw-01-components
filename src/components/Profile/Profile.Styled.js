import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 400px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 19px;
  box-shadow: -1px 15px 30px -12px black;
  padding: 24px 0;
  text-align: center;
`;

export const ProfileDescription = styled.div`
  width: 100%;
  padding-bottom: 48px;
`;

export const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 50%;
  padding: 10px;
  object-fit: cover;
  display: block;
`;

export const ProfileName = styled.p`
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
  padding-bottom: 16px;
`;

export const ProfileInfo = styled.p`
  margin: 0;
  padding-bottom: 10px;
`;

export const ProfileStatList = styled.ul`
  display: flex;
  column-gap: 8px;
  width: 80%;
  padding: 0;
  margin: 0;
  color: black;
  font-weight: 700;
`;

export const ProfileStatItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #ec9b3b;
  border-right: 1px solid #bd7c2f;
  width: 33%;
  float: left;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ProfileStatNameStat = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const ProfileStatValueStat = styled.span`
  font-weight: 400;
  font-size: 16px;
`;
