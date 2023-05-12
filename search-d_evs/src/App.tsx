import { 
  Route, 
  Routes, 
  BrowserRouter,
} from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import Perfil from './pages/Perfil';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;