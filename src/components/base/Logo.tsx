import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.png';

const LogoImg = styled.img``;
const LogoWrapper = styled.a``;
const Logo: React.FC = () => {
  const homePageURL = 'http://localhost:8080';
  return (
    <LogoWrapper href={homePageURL}>
      <LogoImg src={logo} />
    </LogoWrapper>
  );
};

export default Logo;
