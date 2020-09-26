import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Projects/Projects';
import Apps from './components/Apps-Assets/Apps';
import Assets from './components/Apps-Assets/Assets';
import GlobalStyle from './styles/global';
import { Scroll } from './styles/scroll';

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Scroll>
        <Projects />
        <Apps />
        <Assets />
      </Scroll>
      <GlobalStyle />
    </>
  );
};

export default App;
