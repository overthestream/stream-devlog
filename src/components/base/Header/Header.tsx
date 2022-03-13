import React, { useState } from 'react';
import useScroll from 'hooks/useScroll';
import styled from 'styled-components';
import { ResponsiveBox } from '@overthestream/aidy';

import ProgressBar from 'components/base/header/ProgressBar';
import Logo from 'components/base/Logo';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;

  position: fixed;
  display: inline-flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.3);

  color: black;
`;

const HeaderLayout = styled(ResponsiveBox)`
  height: 100%;
  display: inline-flex;
  align-content: space-between;
`;

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset && !active) setActive(true);
    else setActive(false);
  };

  useScroll(handleScroll);

  return (
    <>
      <HeaderWrapper>
        <HeaderLayout>
          <Logo />
        </HeaderLayout>
      </HeaderWrapper>
      <ProgressBar />
    </>
  );
};

export default Header;
