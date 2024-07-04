import Header from "./Components/Header.jsx"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer.jsx"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App