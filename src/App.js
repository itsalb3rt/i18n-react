import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import DescriptionApp from './components/Description';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="body-description">
          {t('body.description')}
        </p>
      </header>
      <footer>
        <DescriptionApp />
      </footer>
    </div>
  );
}

export default App;
