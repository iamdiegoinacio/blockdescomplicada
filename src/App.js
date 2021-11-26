import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthProvider from './contexts/AuthContext';
import AcessoDesktop from './pages/AcessoDesktop/AcessoDesktop';
import BoasVindas from './pages/BoasVindas/BoasVindas';

function App() {
  
  return (
    <div>
        <AuthProvider>
          <BrowserRouter>
            {window.screen.width <= 768 ? 
              <Routes />
              :
              <AcessoDesktop />
            }
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
