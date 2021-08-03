import React, { useState } from 'react';
import useScroll from 'hooks/useScroll';

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset && !active) setActive(true);
    else setActive(false);
  };

  useScroll(handleScroll);

  return (
    <>
      <HeaderBackgroundWrapper isActive={active} />
    </>
  );
};

export default Header;
