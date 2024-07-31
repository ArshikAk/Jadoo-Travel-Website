import decor from "../assets/Decore.png"

const BgImage = () => {
  return (
    <div>
        <img src={decor} alt="" className="absolute right-0 top-0 -z-10" style={{width : "950px" , height : "850px"}}/>
    </div>
  )
}

export default BgImage
