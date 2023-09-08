import React from 'react';
import PropTypes from 'prop-types';
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
        {props.title && (
          <StatisticsSectionTitle>{props.title}</StatisticsSectionTitle>
        )}

        <StatisticsSectionList>{statsBlock}</StatisticsSectionList>
      </StatisticsSectionStayled>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
