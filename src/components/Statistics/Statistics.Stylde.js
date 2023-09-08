import styled from 'styled-components';

export const StatisticsSectionStayled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 19px;
  box-shadow: -1px 15px 30px -12px black;
`;

export const StatisticsSectionTitle = styled.h1`
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 8px;
  text-align: center;
  font-size: 36px;
`;

export const StatisticsSectionList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 80%;
  padding: 16px;
  color: black;
  font-weight: 700;
`;

export const StatisticsSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  background: ${props => {
    const bgColor = getRandomColor();
    return bgColor;
  }};
  color: ${props => {
    const bgColor = getRandomColor();
    const textColor = getTextColor(bgColor);
    return textColor;
  }};
  border-right: 1px solid #bd7c2f;
  width: 33%;
  float: left;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const getTextColor = backgroundColor => {
  const threshold = 128;
  const hexColor = backgroundColor.replace('#', '');
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > threshold ? '#000' : '#fff';
};

export const StatisticsSectionItemLabel = styled.span`
  font-size: 18px;
`;

export const StatisticsSectionPercentage = styled.span`
  font-size: 24px;
`;
