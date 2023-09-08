import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 450px;
  margin: 0 auto;
  padding: 12px 18px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 19px;
  box-shadow: -1px 15px 30px -12px black;
`;

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-right: 1px solid #bd7c2f;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 24px;
`;

export const FriendName = styled.p`
  border-bottom: 1px solid #ccc;
  margin-left: 24px;
  font-size: 36px;
`;
