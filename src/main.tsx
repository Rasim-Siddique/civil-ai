import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './context/auth.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <AppProvider>
    <App />
    </AppProvider>
    </BrowserRouter>,
)
