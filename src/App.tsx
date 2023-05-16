import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import { Suspense } from 'react';

import './App.css';

// Pages
// import Home from './pages/Home';
import HomePage from './pages/HomePage';

// import Perfil from './pages/Perfil';
import UserPerfilPage from './pages/UserPerfilPage';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Páginas com Recoil */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/perfil' element={<Perfil />} /> */}

          {/* Páginas apenas usando o React */}
          <Route path='/' element={<HomePage />} />
          <Route path='perfil/:username' element={<UserPerfilPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;