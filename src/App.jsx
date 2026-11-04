import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch({ type: 'auth/login', payload: { userData: user } });
        } else {
          dispatch({ type: 'auth/logout' });
        }
      })
      .catch(() => {
        dispatch({ type: 'auth/logout' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      {loading ? <p>Loading...</p> : null}
      <Footer />
    </>
  );
}

export default App;
