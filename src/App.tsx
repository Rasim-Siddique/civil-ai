import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/static/layout/navbar/Navbar"
import Footer from "./components/static/layout/footer/Footer"
import MapDetails from "./pages/map-page/MapDetails"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/signup/Register"

function App() {
  return (
    <>
    <Navbar />

    <div className="App">

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/map-page" element={ <MapDetails/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />

        


      </Routes>

    </div>
      <Footer />
      </>

  )
}

export default App