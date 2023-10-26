import MapImages from "../../components/dynamic/map-images/MapImages"
import RegionSec from "../../components/dynamic/region-sec/RegionSec"
import "./Home.css"
const Home=()=>{
    return(
        <>
          <div className="home_sec">
            <RegionSec />
            <MapImages />
          </div>
        </>
    )
}

export default Home 