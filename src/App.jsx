import { useState, useEffect } from 'react'
import './App.css'
import Profile from './pages/Profile.jsx'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { Routes,Route, useNavigate } from 'react-router'
import { TweetProvider } from './context/TweetContext.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import { AuthProvider } from './auth/AuthProvider.jsx'

function App() {
  const [userName, setUserName] = useState("")
  const navigate = useNavigate();

  const handleNameSave = (value) => {
    localStorage.setItem('userName', value);
    setUserName(value)
    if(value){
      navigate("/");
    }
  }

  useEffect(() => {
    setUserName(localStorage.getItem('userName'));
  },[])

  return (
    <AuthProvider>
      <NavBar/>
      <TweetProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={
            <ProtectedRoute>
            <Profile handleSave={handleNameSave}/>
            </ProtectedRoute>
            }/>
          <Route path="/" element={
            <ProtectedRoute>
            <Home userName={userName}/>
            </ProtectedRoute>}/>
        </Routes>
      </TweetProvider>
    </AuthProvider>
  )
}

export default App
