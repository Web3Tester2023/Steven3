// import style from './App.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
// import Ticker from './components/Ticker/Ticker'
import { Suspense, lazy, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { useDispatch } from 'react-redux';
import { setLogin } from './store/loginModalSlice';
// import LoginModal from './components/LoginModal/LoginModal'
// import Timer from './components/Timer/Timer'
// import SaleModal from './components/SaleModal/SaleModal'

// const Ticker = lazy(() => import('./components/Ticker/Ticker'));
const Footer = lazy(() => import('./components/Footer/Footer'));
// const Timer = lazy(() => import('./components/Timer/Timer'));
// const SaleModal = lazy(() => import('./components/SaleModal/SaleModal'));
// const LoginModal = lazy(() => import('./components/LoginModal/LoginModal'));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoginModalNeverOpen = useReadLocalStorage('isLoginModalNeverOpen');

  useEffect(() => {
    if (isLoginModalNeverOpen === true) {
      dispatch(setLogin());
    }
  }, []);

  return (
    <div className='wrapper'>
      <div className='content'>
        {/* <ScrollToTop/> */}
        <Header />

        <Suspense fallback={<div className='loading'></div>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}


export default App;
