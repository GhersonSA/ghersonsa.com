import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

import ScrollToTop from './hooks/ScrollToTop';

import './styles/main.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default App
