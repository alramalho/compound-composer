import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby";
import {BigCircleSeparator, StyledContainer, StyledHeader} from "./styled-components";


const Header = () => (
  <StyledHeader>
    <a
      href={"https://alramalho.com"}
      target={"__blank"}
      style={{color: "white", fontSize: "1rem", fontFamily: "Domine"}}>
      Al.
    </a>
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
