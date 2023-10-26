import  { ChangeEvent, useState } from 'react';
import './RegionSec.css'
const RegionSec=()=>{
    const [selectedCountry, setSelectedCountry] = useState('Pakistan'); // Set "Pakistan" as the default country

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedCountry(e.target.value);
    };
  
    const countries = [
      'Pakistan', // Set "Pakistan" as the first option
      'USA',
      'Canada',
      'UK',
      'Australia',
      // Add more countries as needed
    ];
    return(
        <>
        <div className="topRegSec">
            <h1>Please Select A Map</h1>
            <select className='select_cntryBx' value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    
                    </div>

                    <div>
        <hr />
      </div>
        </>
    )
}
export default RegionSec