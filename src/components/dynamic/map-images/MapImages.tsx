import { useState } from 'react';
import './MapImages.css';

const mapData =[
    {imgSrc:"map-lit-img.svg", textImg:"Map 1", status:'inactive'},
    {imgSrc:"Group 6.svg", textImg:"Map 2", status:'inactive'},
    {imgSrc:"Group 7.svg", textImg:"Map 3", status:'inactive'},
    {imgSrc:"Group 9.svg", textImg:"Map 4", status:'inactive'},
    {imgSrc:"Group 10.svg", textImg:"Map 5", status:'inactive'},
    {imgSrc:"Group 11.svg", textImg:"Map 6", status:'inactive'},




]
const MapImages=()=>{
    const [allMapData, setAllMapData]=useState(mapData)
const [imgValue, setImgValue]=useState("")


const getImg=(imgVal:string)=>{
   setImgValue(imgVal)
setAllMapData((mapData:any)=>{
const data=mapData?.map((values:any)=>{
    if(imgVal===values?.imgSrc){
        return {...values, status:'active'}
    }
    else{
        return {...values, status:'inactive'}

    }
})
return data;

})
    
}


console.log("imgValue:::", allMapData)
    
    return(
        <>
       <div className="map_img_sec">

        {allMapData && allMapData?.map((mapValues:any)=>{
            return(
                <>
                  <div  className="img_sec" onClick={()=>{getImg(mapValues.imgSrc)}}>
            <img style={{border:mapValues.status==='active'?"2px solid black":"", opacity:mapValues.status==='active'?"0.8":""}}  src={mapValues?.imgSrc} alt={mapValues?.textImg} />
            <p>{mapValues?.textImg}</p>
        </div>
                </>
            )
        })}
      
      
       </div>
        </>
    )
}
export default MapImages