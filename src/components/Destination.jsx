import image1 from "../assets/display1.jpg"
import image2 from "../assets/display2.jpg"
import image3 from "../assets/display3.jpg"

const Destination = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-slate-600 text-3xl">Top Selling</h1>
            <br />
            <h1 className="text-5xl">Top Destinations</h1>
        </div>

        <div className="flex justify-evenly mt-20 mb-20">
            <div className="border-2 border-solid border-black rounded-3xl text-center">
                <img src={image1} alt=""  className="h-[300px] w-[400px] rounded-tl-[25px] rounded-tr-[25px]"/>
                <br />
                <p>Rome, Italy   $5,42K</p>
                <br />
                <p className="mb-5">10 days Trip</p>
            </div>

            <div className="border-2 border-solid border-black rounded-3xl  text-center">
                <img src={image2} alt="" className="h-[300px] w-[400px] rounded-tl-[25px] rounded-tr-[25px]"/>
                <br />
                <p>London, UK   $5,42K</p>
                <br />
                <p className="mb-5">12 days Trip</p>
            </div>

            <div className="border-2 border-solid border-black rounded-3xl text-center">
                <img src={image3} alt="" className="h-[300px] w-[400px] rounded-tl-[25px] rounded-tr-[25px]"/>
                <br />
                <p>Full Europe   $5,42K</p>
                <br />
                <p className="mb-5">28 days Trip</p>
            </div>
        </div>
    </>
  )
}

export default Destination
