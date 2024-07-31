import image1 from "../assets/weatherLogo.png"
import image2 from "../assets/flightLogo.png"
import image3 from "../assets/micLogo.png"
import image4 from "../assets/settingsLogo.png"

const Category = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-slate-600 text-3xl">Category</h1>
            <br />
            <h1 className="text-5xl">We Offer Best Services</h1>
        </div>


        <div className="flex justify-evenly mt-20">
      <div className="flex flex-col justify-center items-center">
        <img src={image1} alt="" className="h-20 w-20"/>
        <br />
        <h1 className="text-slate-700 text-lg font-bold">Calculated Weather</h1>
        <br />
        <p className="w-52 text-slate-600 text-sm text-center">Built Wicket longer admire do barton vanity itself do in it.</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={image2} alt="" className="h-28 w-28"/>
        <br />
        <h1 className="text-slate-700 text-lg font-bold">Best Flights</h1>
        <br />
        <p className="w-52 text-slate-600 text-sm text-center" >Engrossed listening. Park gate sell they west hard for the.</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={image3} alt="" className="h-20 w-20"/>
        <br />
        <h1 className="text-slate-700 text-lg font-bold">Local Events</h1>
        <br />
        <p className="w-52 text-slate-600 text-sm text-center" >Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={image4} alt="" className="h-20 w-20"/>
        <br />
        <h1 className="text-slate-700 text-lg font-bold">Customization</h1>
        <br />
        <p className="w-52 text-slate-600 text-sm text-center" >We deliver outsourced aviation services for military customers</p>
      </div>
    </div>
    </>
  )
}

export default Category
