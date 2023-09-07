import React from 'react';
import { StatisticsSectionStayled } from './Statistics.Stylde';

const Statistics = props => {
  const data = props.data;
  const statsBlock = data.map(stat => {
    return (
      <li key={stat.id} class="item">
        <span class="label">{stat.label}</span>
        <span class="percentage">{stat.percentage}</span>
      </li>
    );
  });
  return (
    <>
      <StatisticsSectionStayled>
        <h2 class="title">{props.title || 'Upload stats'}</h2>

        <ul class="stat-list">{statsBlock}</ul>
      </StatisticsSectionStayled>
    </>
  );
};

export default Statistics;
