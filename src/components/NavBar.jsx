
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <div className="flex justify-evenly bg-yellow-300 pt-3 pb-4">
      <img src={logo} alt="" className="h-12 w-32"/>
      <p className="pt-4">Destinations</p>
      <p className="pt-4">Hotels</p>
      <p className="pt-4">Flights</p>
      <p className="pt-4">Bookings</p>
      <button>Login</button>
      <button className="border border-solid border-black pl-4 pr-4 pt-0 pb-0 bg-yellow-200">Sign Up</button>
      <p className="pt-4">En🔻</p>
    </div>
  )
}

export default NavBar
