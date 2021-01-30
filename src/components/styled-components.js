import styled from "styled-components";
import React from "react";

export const upperBackgroundColor = `${'#22313f'}`

export const BigCircleSeparator = () => (
  <svg id="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
       viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0 100 C40 0 60 0 100 100 Z"></path>
  </svg>
)

export const Content = styled.div`
  position: relative;
  bottom: 0;
  transform: translateY(-25vh);
  transition-duration: 0.35s;
  left: 0;
  right: 0;
  z-index: 60;
  color: white;
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
`

export const ChartContainer = styled.div`
  background-color: #fdfdfd;
  border-radius: 15%;
  padding: 4rem 2rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media (max-width: 950px) {
    padding: 4rem 1rem;
    margin: 0 2rem;
    border-radius: 10%;

  }
  @media (max-width: 400px) {

  }
`

export const StyledHeader = styled.header`
  z-index: 1;
  text-align: center;
  background: ${upperBackgroundColor};
  color: white;
  position: relative;
  height: 50vh;
`

export const StyledContainer = styled.div`
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