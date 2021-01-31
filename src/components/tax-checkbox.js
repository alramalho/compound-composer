import React, {useEffect, useState} from 'react'
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {inputColor, VerticalContainer} from "./styled-components";
import NumInput from "./numinput";
import InputAdornment from "@material-ui/core/InputAdornment";

const GreenCheckbox = withStyles({
  root: {
    color: inputColor,
    "&$checked": {
      color: inputColor
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const TaxCheckbox = ({value, onChange}) => {
  const [taxesEnabled, setTaxesTo] = useState(true)

  useEffect(() => {
    if (!taxesEnabled){
      onChange(0)
    }
  }, [taxesEnabled])

  return (
    <>
      <FormControlLabel
        style={{
          color: "#9c9c9c",
          marginTop: `3rem`
        }}
        control={
          <GreenCheckbox
            checked={taxesEnabled}
            onChange={() => {
              setTaxesTo(!taxesEnabled);
            }}
            name="tax-checkbox"
          />
        }
        label="Apply discount taxes"
      />
      <NumInput
        disabled={!taxesEnabled}
        value={value}
        onChange={(value) => onChange(parseInt(value < 0 ? 0 : value))}
        label="Tax cutdown over profit"
        startAdornment={<InputAdornment position="start">%</InputAdornment>}
      />
    </>
  )
}

export default TaxCheckbox