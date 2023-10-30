import DynamicBtn from '../../dynamic/button/Button';
import './Map.css';
const MapCom = () => {
    return (
        <>
            <div className="container_imgmp">
                <div className='img_conatainerMp'>
                    <img src="j2.jpg" alt="" />
                </div>
                <br />
                <div className='img_conatainerFoot'>
                    <div className='btn_container'>
                 <button className='plus_icn'>
                 <img src="plus.svg" alt="" />

                 </button>
                 <p className='zoom_perc'>100%</p>

                 <button className='minus_icn'>
                 <img src="minus.svg" alt="" />

                 </button>

                    </div>
                    <div>
                        <button className='reset_btn'>Reset</button>
                    </div>
                </div>

            </div>


            <div className='processMapCont'>
                <DynamicBtn textBtn='PROCESS MAP' classBtn='processMap' />
            </div>
        </>
    )
}

export default MapCom