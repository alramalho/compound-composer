import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const NumInput = (props) => {
  return (
    <FormControl variant="outlined">
      <InputLabel aria-setsize={'small'} >{props.label}</InputLabel>
      <OutlinedInput
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        id={props.id}
        endAdornment={props.endAdornment}
        startAdornment={props.startAdornment}
        type='number'
        labelWidth={props.labelWidth}
      />
    </FormControl>
  )
}


export default NumInput
