import HomePage from 'pages/HomePage';
import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
