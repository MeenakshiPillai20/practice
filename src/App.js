import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Student from './Pages/Student';
import ContactUs from './Pages/ContactUs';
import AppBar from './Components/AppBar';
import StudentContextProvider from './context/StudentContextProvider';

function App() {
  return (
    <>
    <BrowserRouter>
       <AppBar/>
       <Routes>
           <Route path="" element={<Home/>} />
           <Route path="/Student" element={<StudentContextProvider><Student/></StudentContextProvider>} />
           <Route path="/Contact-us" element={<ContactUs/>} />
       </Routes>
    </BrowserRouter>
 </>
  );
}

export default App;
