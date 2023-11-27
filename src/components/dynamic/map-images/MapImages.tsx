import { useState } from 'react';
import './MapImages.css';

const mapData =[
    {imgSrc:"map-lit-img.svg", textImg:"Map 1", status:'inactive'},
    {imgSrc:"map-colored-img.png", textImg:"Map 2", status:'inactive'},
    



]

const MapImages=()=>{
    const [allMapData, setAllMapData]=useState(mapData)
const [imgValue, setImgValue]=useState("")


const getImg=(imgVal:string)=>{
    localStorage.setItem('imgValue', imgVal);
   setImgValue(imgVal)
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
setAllMapData((mapData:any)=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

console.info(imgValue)
// Define a type or interface for mapValues
interface MapValuesType {
    status: string;
    imgSrc: string;
    textImg: string;
    // Add other properties as needed
  }
  
  


    
    return(
        <>
       <div className="map_img_sec">

       {allMapData && allMapData?.map((mapValues: MapValuesType) => {
  return (
    <div
      style={{
        border: mapValues.status === 'active' ? '1px solid gray' : '',
        opacity: mapValues.status === 'active' ? '0.9' : '',
        boxShadow: mapValues.status === 'active' ? '5px 5px 15px gray' : ''
      }}
      className="img_sec"
      onClick={() => {
        getImg(mapValues.imgSrc);
      }}
    >
      <img src={mapValues.imgSrc} alt={mapValues.textImg} style={{ width: '400px', height: '300px' }} />
      <p>{mapValues.textImg}</p>
    </div>
  );
})}
      
      
       </div>
        </>
    )
}
export default MapImages