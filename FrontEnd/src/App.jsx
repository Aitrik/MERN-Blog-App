import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './CMS/Home/Home'
import Feed from './CMS/Feed/Feed'
import LoginComponent from './CMS/Auth/Login'
import Profile from './CMS/Profile/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/edit_profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
