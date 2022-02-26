import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/UserAuthContext';

import { RequireAuth } from './higher-order-components/RequireAuth';
import { User } from './screens/user/User';
import Error from './screens/error/Error';
import Pokedex from './screens/pokedex/Pokedex';
import Home from './screens/home/Home';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/user' element={<RequireAuth><User /></RequireAuth>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
