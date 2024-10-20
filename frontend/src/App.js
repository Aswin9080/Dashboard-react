import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './pages/nav/nav';

function App() {
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white h-screen'>
      <BrowserRouter>
        <Nav/>
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
