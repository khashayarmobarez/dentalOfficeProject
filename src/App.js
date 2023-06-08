import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css'
import NavHam from './Components/Navbar/NavHam';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Reserve from './Components/Reservation page/Reserve'
import BuildingLoad from './Components/shared/BuildingLoad';

function App() {
  return (
    <div className={styles.App}>
      <NavHam />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='/Reserve' element={<Reserve /> } />
          <Route path='/soon' element={<BuildingLoad />} />
          <Route path='/*' element={ <Navigate  to='/Home' /> } />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;


