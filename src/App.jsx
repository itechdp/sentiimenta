import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import OurProjects from './Components/OurProjects/OurProjects'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Home id="home"></Home>
      {/*<About></About>*/}
      <Services></Services>
      <Testimonials ></Testimonials>
      <OurProjects></OurProjects>
      <Contact></Contact>
    </div>
  )
}

export default App
