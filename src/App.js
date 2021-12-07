import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthProvider from './contexts/AuthContext';
import DesktopAccess from './pages/DesktopAccess/DesktopAccess';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={2000}/>
          {window.screen.width <= 768 ?
            <Routes />
            :
            <DesktopAccess />
          }
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
