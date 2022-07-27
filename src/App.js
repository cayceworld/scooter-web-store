import { Routes, Route } from 'react-router-dom';
import Header from "./components/layout/Header/Header";
import Main from "./components/pages/Main/Main";
import Cart from './components/pages/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getDevice } from './redux/deviseRedux';
import { useState, useEffect } from 'react';
import { windowResize } from './redux/deviseRedux';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    sizeChange();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);


  const isDesktop = width >= 768;

  const dispatch = useDispatch();

  const sizeChange = (e) => {
    dispatch(windowResize({ isDesktop }));
  };

  //const device = useSelector(getDevice);

  //console.log('device', device);
  //console.log('width', width)

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
