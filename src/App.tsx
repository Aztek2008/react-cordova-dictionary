import { HashRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { MainPage } from 'pages/MainPage/MainPage';
import { AddWordPage, CheckWordPage } from 'pages';

import './App.css';

type AppProps = {
  cordovaWork?: boolean;
};

function App(props: AppProps) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main className='App-main'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/add' element={<AddWordPage />} />
            <Route path='/check' element={<CheckWordPage />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
