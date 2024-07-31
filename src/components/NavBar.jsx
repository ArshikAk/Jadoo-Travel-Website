
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <div className="flex justify-evenly pt-3 pb-4">
      <img src={logo} alt="" className="h-12 w-32"/>
      <p className="pt-4 ml-36">Destinations</p>
      <p className="pt-4">Hotels</p>
      <p className="pt-4">Flights</p>
      <p className="pt-4">Bookings</p>
      <button>Login</button>
      <button className="border border-solid border-black pl-4 pr-4 pt-0 pb-0">Sign Up</button>
      <select className="w-14 bg-[#FFF1DA]" >
        <option value="en">En</option>
        <option value="tm">Tm</option>
      </select>
    </div>
  )
}

export default NavBar
