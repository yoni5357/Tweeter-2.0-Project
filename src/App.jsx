import { useState, useEffect } from 'react'
import './App.css'
import Profile from './pages/Profile.jsx'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import { Routes,Route,BrowserRouter } from 'react-router'

function App() {
  const [userName, setUserName] = useState("")

  const handleNameSave = (value) => {
    localStorage.setItem('userName', value);
    setUserName(value)
  }

  useEffect(() => {
    setUserName(localStorage.getItem('userName'));
  },[])

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/profile" element={<Profile handleSave={handleNameSave}/>}/>
        <Route path="/" element={<Home userName={userName}/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
