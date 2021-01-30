import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Chart from "../components/chart";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";


const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const IndexPage = () => {
  return (
    <Layout>
      <p>s</p>
      {/*<SEO title="Compound Composer"/>*/}
      {/*<Chart/>*/}
      {/*<Content>*/}
      {/*  <h1 style={{margin: `0 auto 2rem 0`}}>  {data.title}  </h1>*/}
      {/*  <ChartContainer>*/}
      {/*    <Chart/>*/}
      {/*  </ChartContainer>*/}
      {/*</Content>*/}
    </Layout>
  )
}

export default IndexPage
