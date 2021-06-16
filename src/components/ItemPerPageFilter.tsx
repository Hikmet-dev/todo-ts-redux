import React from 'react';
import { Select, MenuItem } from "@material-ui/core";

export const ItemPerPageFilter = (props:{onChangeItemFilter: () => number, itemPerPage: number}) => {
  const {onChangeItemFilter, itemPerPage} = props;
  return(
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={itemPerPage}
      onChange={onChangeItemFilter}
    >
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
    </Select>
  )
}