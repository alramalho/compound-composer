import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {SELECT_OPTIONS} from "./styled-components";
import Select from "@material-ui/core/Select";

const CssSelect = withStyles({
  root: {
    "& .MuiSelect-select	": {
      color: `#f1a208`,
      borderColor: `#f1a208`
    },
  }
})(Select);


const XAxisSelect = (value, onChange) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-x-select">X Axis</InputLabel>
      <CssSelect
        native
        labelId="demo-simple-x-select"
        id="demo-simple-x-select"
        value={value}
        onChange={event => {
          onChange(event.target.value)
        }}
      >
        <option value={SELECT_OPTIONS.DURATION}>Duration of investment</option>
        <option value={SELECT_OPTIONS.AMOUNT}>Initial Amount</option>
        <option value={SELECT_OPTIONS.PROFIT}>Monthly profit</option>
        <option value={SELECT_OPTIONS.INJECTION}>Monthly injection</option>
      </CssSelect>
    </FormControl>
  )
}

export default XAxisSelect