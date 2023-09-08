import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableBodyItem,
  TableHead,
  ThComp,
  TrComp,
} from './TransactionsStyled';

const TransactionHistory = props => {
  const data = props.items;

  const transactionTabl = data.map(stat => {
    return (
      <TrComp key={stat.id}>
        <TableBodyItem>{stat.type}</TableBodyItem>
        <TableBodyItem>{stat.amount}</TableBodyItem>
        <TableBodyItem>{stat.currency}</TableBodyItem>
      </TrComp>
    );
  });
  return (
    <>
      <Table>
        <TableHead>
          <TrComp>
            <ThComp>Type</ThComp>
            <ThComp>Amount</ThComp>
            <ThComp>Currency</ThComp>
          </TrComp>
        </TableHead>
        <TableBody>{transactionTabl}</TableBody>
      </Table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
