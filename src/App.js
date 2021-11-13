import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <div>
        <AuthProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
