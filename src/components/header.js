import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import Chart from "./chart";
import {Link} from "gatsby";
import Layout from "./layout";

const upperBackgroundColor = `${'#22313f'}`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(55%);
  transition-duration: 0.35s;
  left: 0;
  right: 0;
  z-index: 10;

  @media (max-width: 400px) {
    transform: translateY(65%);
  }
`

const ChartContainer = styled.div`
  background-color: #fdfdfd;
  border-radius: 15%;
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 920px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media (max-width: 950px) {
    padding: 4rem 1rem;
    margin: 0 2rem;
    border-radius: 10%;

  }
  @media (max-width: 400px) {

  }
`

const StyledHeader = styled.header`
  text-align: center;
  background: ${upperBackgroundColor};
  color: white;
  margin-bottom: 100px;
  position: relative;
  height: 50vh;
`

const StyledContainer = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  bottom: 0;
  transform: translateY(99%);

  svg {
    width: 100%;
    fill: ${upperBackgroundColor};
    transform: rotate(180deg);
  }
`

const BigCircleSeparator = () => (
  <svg id="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
       viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0 100 C40 0 60 0 100 100 Z"></path>
  </svg>
)


const Header = () => (
  <StyledHeader>
    <Link
      to={"https://alramalho.com"}
      target={"__blank"}
      style={{color: "white", fontSize: "1rem", fontFamily: "Domine"}}>
      Al.
    </Link>
    <Content>
      <h1 style={{margin: `0 auto 2rem 0`}}>  Compound composer  </h1>
      <ChartContainer>
        <Chart/>
      </ChartContainer>
    </Content>
    <StyledContainer>
      <BigCircleSeparator/>
    </StyledContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
