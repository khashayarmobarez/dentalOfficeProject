import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css'
import NavHam from './Components/Navbar/NavHam';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className={styles.App}>
      <NavHam />

        <Routes>
          <Route path='/*' element={ <Navigate  to='/Home' /> } />
          <Route path="/" element={<Home />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;


