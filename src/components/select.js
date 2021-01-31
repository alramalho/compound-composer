import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import {SELECT_OPTIONS} from "./styled-components";
import Select from "@material-ui/core/Select";

const XAxisSelect = ({value, onChange}) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-x-select">X Axis</InputLabel>
      <Select
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
      </Select>
    </FormControl>
  )
}

export default XAxisSelect