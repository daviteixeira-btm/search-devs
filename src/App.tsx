import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import { Suspense } from 'react';

import './App.css';

import HomePage from './pages/HomePage';
import Loader from './components/Loader/Loader';
import UserPerfilPage from './pages/UserPerfilPage';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-purple/theme.css';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='perfil/:username' element={<UserPerfilPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;