import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import MainPage from './main';
import LogInPage from './login';
import RegisterPage from './register';
import IntroductionPage from './Introduction';
import RecruitingPage from './Recruiting';
import CsCenterPage from './CsCenter';
import MyVPage from './MyV';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/'  element={<MainPage />} />
    <Route path='/login' element={<LogInPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/introduction' element={<IntroductionPage />} />
    <Route path='/recruiting' element={<RecruitingPage />} />
    <Route path='/CsCenter' element={<CsCenterPage />} />
    <Route path='/MyV' element={<MyVPage />} />
   </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;