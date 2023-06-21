import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

function Header() {
  const [sideNavStatus, setsideNavStatus] = useState(false);
  return (
    <Container>
      <img src="/images/logo.svg" alt=""></img>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setsideNavStatus(true)}></CustomMenu>
      </RightMenu>
      <SideNav show={sideNavStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setsideNavStatus(false)}></CustomClose>
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used inventory</a>
        </li>
        <li>
          <a href="#">Tesla Energy</a>
        </li>
        <li>
          <a href="#">Roadsters</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Powewall</a>
        </li>
        <li>
          <a href="#">Existing Power</a>
        </li>
      </SideNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 20px;
  justify-content: space-between;
  top: 0;
  right: 0;
  z-index: 1;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  a{
    font-weight: 600;
    padding 0px 10px;
    flex-wrap: nowrap;
    text-transform: uppercase;
  }
  @media ( max-width: 768px){
    display:none;
  }
`;
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  padding 0px 10px;
  flex-wrap: nowrap;
  text-transform: uppercase;
}
`;
const CustomMenu = styled(MenuIcon)`
  align-items: center;
`;
const SideNav = styled.div`
  position: fixed;
  z-index: 15;
  background: #fff;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: left;
  width: 250px;
  list-style: none;
  padding: 20px;
  font-weight: 600;
  transform: ${(props) => (props.show ? "teanslateX(0)" : "translateX(100%)")};
  li {
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0px;
  }
`;

const CustomClose = styled(CancelIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
//Create a header
