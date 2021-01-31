import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import {withStyles} from '@material-ui/core/styles';
import {inputColor} from "./styled-components";
import TextField from "@material-ui/core/TextField";

const CssOutlinedInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: inputColor
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: inputColor
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: inputColor
      }
    }
  }
})(TextField);

const NumInput = (props) => {
  return (
    <FormControl variant="outlined">
      <CssOutlinedInput
        disabled={props.disabled}
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
