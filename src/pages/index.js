import React from "react"

import "../components/layout.css"
import {
  ChartContainer,
  Content,
} from "../components/styled-components";
import Chart from "../components/chart";
import Header from "../components/header";
import SEO from "../components/seo";

const IndexPage = () => {

  return (
    <>
      <SEO title="Compound Composer"/>
      <Header/>
      <Content>
        <h1 style={{margin: `0 auto 2rem auto`}}> Compound composer </h1>
        <ChartContainer>
          <Chart/>
        </ChartContainer>
      </Content>
    </>
  )
}

export default IndexPage
