import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
`;

const Footer = () => {
  return <FooterWrapper>© 2023 Diaily App</FooterWrapper>;
};

export default Footer;
