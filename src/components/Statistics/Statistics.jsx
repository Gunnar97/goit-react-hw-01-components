import React from 'react';
import {
  StatisticsSectionItem,
  StatisticsSectionItemLabel,
  StatisticsSectionList,
  StatisticsSectionPercentage,
  StatisticsSectionStayled,
  StatisticsSectionTitle,
} from './Statistics.Stylde';

const Statistics = props => {
  const data = props.data;
  const statsBlock = data.map(stat => {
    return (
      <StatisticsSectionItem key={stat.id}>
        <StatisticsSectionItemLabel>{stat.label}</StatisticsSectionItemLabel>
        <StatisticsSectionPercentage>
          {stat.percentage}
        </StatisticsSectionPercentage>
      </StatisticsSectionItem>
    );
  });
  return (
    <>
      <StatisticsSectionStayled>
        <StatisticsSectionTitle>
          {props.title || 'Upload stats'}
        </StatisticsSectionTitle>

        <StatisticsSectionList>{statsBlock}</StatisticsSectionList>
      </StatisticsSectionStayled>
    </>
  );
};

export default Statistics;
