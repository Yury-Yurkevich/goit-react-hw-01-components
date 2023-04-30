import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 20px auto;
  text-align: center;
  vertical-align: middle;
  
`;

export const TableHeader = styled.th`
  background-color: #09e6e6;
  width: 200px;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-size: 14px;
  
`;

const getRowBackgroundColor = ({ rowNumber }) => {
  if (rowNumber % 2 === 0) {
    return '#efebebea';
  }
  return '#ffffff';
};

export const TableRow = styled.tr`
  color: gray;
  background-color: ${getRowBackgroundColor};
`;

export const TableData = styled.td`
  width: 200px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-transform: capitalize;
  font-size: 12px;
`;