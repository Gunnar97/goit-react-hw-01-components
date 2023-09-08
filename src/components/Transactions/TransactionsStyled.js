import styled from 'styled-components';

export const Table = styled.table`
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead`
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #ededed;
  font-size: 18px;
  border-top: 1px solid #ddd;
`;

export const TrComp = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;
`;
export const ThComp = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
`;

export const TableBody = styled.tbody`
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #ededed;
  font-size: 14px;
  border-top: 1px solid #ddd;
`;

export const TableBodyItem = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
