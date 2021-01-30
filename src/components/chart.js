import React, {useEffect, useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import NumInput from "./numinput";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";
import {CartesianGrid, Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {func} from "prop-types";
import {init} from "../../.cache/navigation";


const SELECT_OPTIONS = {
  PROFIT: 'profit',
  DURATION: 'duration',
  AMOUNT: 'amount',
  INJECTION: 'injection'
}

const HorizontalContainer = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin: 1.5rem 0 0 0;
  }
`

function generateProfit(durationInYears, initialAmmount, monthlyProfit, montlyInjection) {
  return [...Array(durationInYears*12).keys()].reduce((accumulator) => {
    return (accumulator + montlyInjection) * (1+(monthlyProfit/100))
  }, initialAmmount)
}

const Chart = () => {
  const [duration, setDuration] = useState(10)
  const [initialAmount, setInitialAmount] = useState(10000)
  const [profit, setProfit] = useState(0.5)
  const [injection, setInjection] = useState(12345)
  const [xAxis, setXAxis] = useState(SELECT_OPTIONS.DURATION)
  const [xAxisData, setXAxisData] = useState([
    {name: 'Page A', pv: 2400},
    {name: 'Page B', pv: 1398},
    {name: 'Page C', pv: 9800},
    {name: 'Page D', pv: 3908},
    {name: 'Page E', pv: 4800},
    {name: 'Page F', pv: 3800},
    {name: 'Page G', pv: 4300},
  ])

  useEffect(() => {
    setXAxisData(createData(duration, 0.5))
  }, [duration])

  function createData(xValue, step) {
    const data = []
    for (let i = 0; i <= 6; i++) {
      const durationInYears = parseInt(xValue) + i*step
      data.push({
        name: durationInYears + ' years',
        duration: generateProfit(durationInYears, 10000, 2, 100)
      })
    }
    return data
  }

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
          <Area type="monotone" dataKey="duration" stroke="#f1a208" fill="#f1a208" />
          <XAxis dataKey="name"/>
          <YAxis/>
        </AreaChart>
      </ResponsiveContainer>
      <HorizontalContainer>
        <VerticalContainer>
          <FormControl>
            <InputLabel id="demo-simple-x-select">X Axis</InputLabel>
            <Select
              native
              labelId="demo-simple-x-select"
              id="demo-simple-x-select"
              value={xAxis}
              onChange={event => {
                setXAxis(event.target.value)
              }}
            >
              <option value={SELECT_OPTIONS.DURATION}>Duration of investment</option>
              <option value={SELECT_OPTIONS.AMOUNT}>Initial Amount</option>
              <option value={SELECT_OPTIONS.PROFIT}>Monthly profit</option>
              <option value={SELECT_OPTIONS.INJECTION}>Monthly injection</option>
            </Select>
          </FormControl>
        </VerticalContainer>
        <VerticalContainer>
          <NumInput
            value={duration}
            onChange={(value) => setDuration(value)}
            label={"Duration of investment"}
            endAdornment={<InputAdornment position="end">years</InputAdornment>}
            labelWidth={200}
          />
          <NumInput
            value={initialAmount}
            onChange={(value) => setInitialAmount(value)}
            label="Initial amount"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            labelWidth={120}
          />
          <NumInput
            value={profit}
            onChange={(value) => setProfit(value)}
            label="Monthly profit"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            labelWidth={130}
          />
          <NumInput
            value={injection}
            onChange={(value) => setInjection(value)}
            label="Monthly injection"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            labelWidth={150}
          />
        </VerticalContainer>
      </HorizontalContainer>
    </>
  )
}

export default Chart