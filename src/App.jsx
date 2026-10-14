import Menu from "./menu"
import Footer from "./footer"
import Navbar from "./nav"
import Welcome from "./Welcome";
import Button from "./Button";
function App() {

  const name = "seven"

  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome />
      <Button />
      <Navbar
      Home = "Home"
      About = "About"
      Contact = "Contact"
      />
      <h1>Hello world</h1>
      <h1>Welcome, {name} </h1>
      <Menu
      home="Home Page"
      about="About Page"
      contact="Contact Page"
      />
      <Footer/>
    </div>
  )
}

export default App
