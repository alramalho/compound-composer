import React, {useEffect, useState} from 'react'
import NumInput from "./numinput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {CartesianGrid, Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {HorizontalContainer, SELECT_OPTIONS, VerticalContainer} from "./styled-components";
import XAxisSelect from "./select";
import TaxCheckbox from "./tax-checkbox";

const DURATION_STEP = 0.5
const AMOUNT_STEP = 1000
const MONTHLY_PROFIT_STEP = 0.5
const MONTHLY_INJECTION_STEP = 50

function generateProfit(durationInYears, initialAmount, monthlyProfit, monthlyInjection, taxValue) {
  const total = Array(((durationInYears) || 0)*12).fill(1).reduce((accumulator) => {
    return (accumulator + monthlyInjection) * (1 + (monthlyProfit / 100))
  }, initialAmount)
  const profit = total - (initialAmount + durationInYears*12 * monthlyInjection)
  return total - ((taxValue/100)*profit )
}

const Chart = () => {
  const [duration, setDuration] = useState(3)
  const [initialAmount, setInitialAmount] = useState(15000)
  const [profit, setProfit] = useState(1.5)
  const [injection, setInjection] = useState(500)
  const [taxValue, setTaxValue] = useState(28)

  const [xAxisOption, setXAxisOption] = useState(SELECT_OPTIONS.AMOUNT)
  const [xAxisData, setXAxisData] = useState(null)

  function generateNewData(option) {
    const newData = []
    let step, value
    switch (option){
      case SELECT_OPTIONS.DURATION:
        step = DURATION_STEP;
        value = duration;
        break;
      case SELECT_OPTIONS.AMOUNT:
        step = AMOUNT_STEP;
        value = initialAmount;
        break;
      case SELECT_OPTIONS.PROFIT:
        step = MONTHLY_PROFIT_STEP;
        value = profit;
        break
      case SELECT_OPTIONS.INJECTION:
        step = MONTHLY_INJECTION_STEP;
        value = injection;
        break;
    }
    for (let i = 0; i <= 6; i++) {
      const steppedValue = Number(value) - 3 * step + i * step
      newData.push({
        name: `${steppedValue}${option === SELECT_OPTIONS.DURATION ? ' years' : option === SELECT_OPTIONS.PROFIT ? '%' : '€'}`,
        total: generateProfit(
          option === SELECT_OPTIONS.DURATION ? steppedValue : duration,
          option === SELECT_OPTIONS.AMOUNT ? steppedValue : initialAmount,
          option === SELECT_OPTIONS.PROFIT? steppedValue : profit,
          option === SELECT_OPTIONS.INJECTION ? steppedValue : injection,
          taxValue,
        )
      })
    }
    return newData
  }

  useEffect(() => {
    setXAxisData(generateNewData(xAxisOption))
  }, [duration, initialAmount, profit, injection, taxValue, xAxisOption])


  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={'100%'}
          height={300}
          data={xAxisData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <Area type="monotone" dataKey="total" stroke="#f1a208" fill="#f1a208"/>
          <XAxis dataKey="name"/>
          <YAxis form unit={'€'} width={70}/>
          <Tooltip formatter={(value) => `${parseInt(value)}€`}/>
        </AreaChart>
      </ResponsiveContainer>
      <HorizontalContainer>
        <VerticalContainer>
          <XAxisSelect
            value={xAxisOption}
            onChange={value => {setXAxisOption(value)}}
          />
        </VerticalContainer>
        <VerticalContainer>
          <NumInput
            value={duration}
            onChange={(value) => {setDuration(value > 100 ? 100 : value < 0 ? 0 : value)}}
            label={"Duration of investment"}
            endAdornment={<InputAdornment position="end">years</InputAdornment>}
          />
          <NumInput
            value={initialAmount}
            onChange={(value) => setInitialAmount(parseInt(value))}
            label="Initial amount"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
          <NumInput
            value={profit}
            onChange={(value) => setProfit(parseFloat(value))}
            label="Monthly profit"
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
          <NumInput
            value={injection}
            onChange={(value) => setInjection(parseInt(value))}
            label="Monthly injection"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
          <TaxCheckbox
            value={taxValue}
            onChange={(value) => setTaxValue(value)}
          />
        </VerticalContainer>
      </HorizontalContainer>
    </>
  )
}

export default Chart