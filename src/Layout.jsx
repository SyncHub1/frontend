import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import { Toaster } from "./Components/ui/toaster"
const Layout = () => {
  return (
    <>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster/>
    </>
  )
}

export default Layout

