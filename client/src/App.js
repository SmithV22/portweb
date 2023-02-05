
import react from 'react' ;
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;
import { ToastContainer } from 'react-toastify' ;

import 'react-toastify/dist/ReactToastify.css' ;
import HomePage from './components/components/HomePage' ;
import Reg from './components/loginReg/Reg' ;
import Login from './components/loginReg/Login' ;

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Reg />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
