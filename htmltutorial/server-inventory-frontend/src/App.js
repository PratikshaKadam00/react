
import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import AdminDashboard from './components/AdminDashBoard';
import UserDashboard from './components/UserDashBoard';

function App() {

  const[role, setRole]=useState(null);

  const handleLoginSubmit=({role})=>{
    setRole(role);
  }
  return (
    <div>
    <Header onLogin={handleLoginSubmit}></Header>
    {role==='admin' && <AdminDashboard/>}
    {role==='user' && <UserDashboard/>}
    
    <Footer></Footer>
    </div>
  );
}

export default App;
