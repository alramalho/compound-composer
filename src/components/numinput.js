import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import {withStyles} from '@material-ui/core/styles';
import {OutlinedInput} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const CssOutlinedInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: `#f1a208`
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: `#f1a208`
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: `#f1a208`
      }
    }
  }
})(TextField);

const NumInput = (props) => {
  return (
    <FormControl variant="outlined">
      <CssOutlinedInput
        label={props.label}
        variant="outlined"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        id={props.id}
        type='number'
        InputProps={{
          startAdornment: props.startAdornment,
          endAdornment: props.endAdornment
        }}
        labelWidth={props.labelWidth}
      />
    </FormControl>
  )
}


export default NumInput
