import image from "../assets/Image1.png"
import playButton from "../assets/playButton.png"

const Description = () => {
  return (
    <div className="mt-10 flex pl-44 pr-44 justify-evenly">
        <div className="pt-14">
            <h3 className="text-red-700 text-2xl">Best Destinations Around the World</h3>
            <br />
            <h1 className="text-slate-700 text-5xl pl-5">Travel, Enjoy 
                <br /> and live a new 
                <br /> and full life
            </h1>

            <br />

            <p className="text-slate-400 text-sm pl-5">
                Built Wicket longer admire do barton vanity itself do in it. 
                <br /> Preferred to sportsmen it engrossed listening. 
                <br /> Park gate sell they west hard for the.
            </p>
            <br />
            <br />

            <button className="bg-yellow-500 border text-white rounded-lg p-5 mr-3 pl-5">Find Out More</button>
            <button className="ml-5">
                <img src={playButton} className="inline h-12 mr-2"/>Play Demo</button>
        </div>

        <div>
            <img src={image} alt="" className="h-[550px]" />
        </div>
    </div>
  )
}

export default Description
