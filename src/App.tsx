import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/index'
import Donate from './pages/donate'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App



// function App() {
//   const location = useLocation()
//   const showHeaderFooter = location.pathname === '/'

//   return (
//     <>
//       {showHeaderFooter && <Header/>}
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/donate' element={<Donate/>}/>
//       </Routes>
//       {showHeaderFooter && <Footer/>}
//     </>
//   )
// }