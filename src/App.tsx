import HomePage from 'pages/HomePage';
import React from 'react';
import GlobalStyle from 'components/base/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
