import image1 from "../assets/trip1.jpg"
import timage1 from "../assets/tinyImage1.png"
import timage2 from "../assets/tinyImage2.png"
import timage3 from "../assets/tinyImage3.png"

import logo from "../assets/temple.png"

const NextTrip = () => {
  return (
    <div className="flex justify-evenly">
      <div>
        <p className="text-slate-600 font-bold text-lg">Easy and Fast</p>
        <br />
        <h1 className="font-bold text-4xl">Book Your Next Trip 
            <br /> In 3 Easy Steps
        </h1>

        <br />

        <div className="flex mt-5 mb-5">
            <div>
                <img src={timage1} alt="" className="h-14 w-14"/>
            </div>
            <div className="ml-3">
                <h1  className="text-slate-500 font-bold" >Choose Destination</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className="flex mt-5 mb-5">
            <div>
                <img src={timage2} alt="" className="h-14 w-14"/>
            </div>
            <div className="ml-3">
                <h1 className="text-slate-500 font-bold" >Make Payment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className="flex mt-5 mb-5">
            <div>
                <img src={timage3} alt="" className="h-14 w-14"/>
            </div>
            <div className="ml-3">
                <h1 className="text-slate-500 font-bold" >Reach Airport on Selected Date</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </div>

      <div>


        <div className="border-2 border-solid border-black rounded-2xl p-10 relative">
            <img src={image1} alt="" className="h-44"/>
            <br />
            <h1 className="font-bold pl-5">Trip to Greece</h1>
            <br />
            <p className="text-slate-500 text-sm pl-5">14-29 June | by Robbin Johnson</p>

            <br />

            <p className="text-slate-500 text-sm pl-5">24 people going</p>

            <div className="flex border-2 border-solid border-black rounded-xl  p-5 absolute top-60  -right-16 bg-white">
                <div>
                    <img src={logo} alt="" className="rounded-full mt-2"/>
                </div>

                <div className="ml-10">
                    <p className="text-slate-500 text-sm">Ongoing</p>
                    <h1 className="font-bold">Trip to Rome</h1>
                    <p className="text-slate-500 text-sm">40% Completed</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NextTrip
