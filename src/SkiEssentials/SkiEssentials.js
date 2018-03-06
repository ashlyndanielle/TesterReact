import React from 'react';
import styled from 'styled-components';

const SkiEssentials = () => {
  return (
    <div class="main-container">
      <Table>
        <TableHeader>
          <CellHeader>Rent</CellHeader>
          <CellHeader>Bring</CellHeader>
          <CellHeader>Optional</CellHeader>
        </TableHeader>
        <TableRow>
          <Cell>Ski's</Cell>
          <Cell>Action</Cell>
          <Cell>Action</Cell>
        </TableRow>
        <TableRow>
          <Cell>Boots</Cell>
          <Cell>Action</Cell>
          <Cell>Action</Cell>
        </TableRow>
        <TableRow>
          <Cell></Cell>
          <Cell>Action</Cell>
          <Cell>Action</Cell>
        </TableRow>
        <TableRow>
          <Cell></Cell>
          <Cell>Action</Cell>
          <Cell>Action</Cell>
        </TableRow>
      </Table>
    </div>
  );
};

export default SkiEssentials;

const Table = styled.table`
  background: purple;
  width: 100%;
  color: white;
  border-collapse: separate;
`
const TableHeader = styled.tr`
  box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
`
const TableRow = styled.tr`

`
const CellHeader = styled.th`
  padding: 9px 0;
  text-transform: uppercase;
`
const Cell = styled.td`
  padding: 5px 0;
  margin-right: 5px;
`