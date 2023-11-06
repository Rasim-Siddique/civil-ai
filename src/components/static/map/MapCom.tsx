import DynamicBtn from '../../dynamic/button/Button';
import ReactCrop, { convertToPixelCrop } from 'react-image-crop';

import {Form, Table } from 'react-bootstrap';

import './Map.css';

import 'react-image-crop/dist/ReactCrop.css';
import { useRef, useState } from 'react';
import { canvasPreview } from './canvasPreview';

const jsonObject = {
  "objects": [
    {
      "objects": [
        {
          "x1": 171,
          "y1": 433,
          "x2": 189,
          "y2": 450,
          "value": "c1"
        },
        {
          "x1": 274,
          "y1": 492,
          "x2": 292,
          "y2": 509,
          "value": "c1"
        },
        {
          "x1": 544,
          "y1": 478,
          "x2": 563,
          "y2": 493,
          "value": "c1"
        },
        {
          "x1": 645,
          "y1": 433,
          "x2": 661,
          "y2": 448,
          "value": "c1"
        },
        {
          "x1": 421,
          "y1": 431,
          "x2": 439,
          "y2": 450,
          "value": "c1"
        },
        {
          "x1": 170,
          "y1": 629,
          "x2": 190,
          "y2": 645,
          "value": "c1"
        },
        {
          "x1": 272,
          "y1": 630,
          "x2": 290,
          "y2": 645,
          "value": "c1"
        },
        {
          "x1": 420,
          "y1": 631,
          "x2": 436,
          "y2": 645,
          "value": "c1"
        },
        {
          "x1": 543,
          "y1": 629,
          "x2": 561,
          "y2": 645,
          "value": "c1"
        },
        {
          "x1": 644,
          "y1": 628,
          "x2": 661,
          "y2": 642,
          "value": "c1"
        },
        {
          "x1": 170,
          "y1": 738,
          "x2": 190,
          "y2": 752,
          "value": "c1"
        },
        {
          "x1": 645,
          "y1": 738,
          "x2": 661,
          "y2": 753,
          "value": "c1"
        },
        {
          "x1": 206,
          "y1": 859,
          "x2": 225,
          "y2": 874,
          "value": "c1"
        },
        {
          "x1": 628,
          "y1": 857,
          "x2": 648,
          "y2": 874,
          "value": "c1"
        },
        {
          "x1": 171,
          "y1": 941,
          "x2": 186,
          "y2": 958,
          "value": "c1"
        },
        {
          "x1": 268,
          "y1": 965,
          "x2": 285,
          "y2": 979,
          "value": "c1"
        },
        {
          "x1": 397,
          "y1": 945,
          "x2": 413,
          "y2": 958,
          "value": "c1"
        },
        {
          "x1": 563,
          "y1": 965,
          "x2": 582,
          "y2": 977,
          "value": "c1"
        },
        {
          "x1": 643,
          "y1": 942,
          "x2": 663,
          "y2": 956,
          "value": "c1"
        },
        {
          "x1": 171,
          "y1": 1098,
          "x2": 186,
          "y2": 1114,
          "value": "c1"
        },
        {
          "x1": 304,
          "y1": 1112,
          "x2": 322,
          "y2": 1126,
          "value": "c1"
        },
        {
          "x1": 419,
          "y1": 1112,
          "x2": 435,
          "y2": 1124,
          "value": "c1"
        },
        {
          "x1": 511,
          "y1": 1111,
          "x2": 531,
          "y2": 1124,
          "value": "c1"
        },
        {
          "x1": 643,
          "y1": 1097,
          "x2": 662,
          "y2": 1113,
          "value": "c1"
        },
        {
          "x1": 304,
          "y1": 1269,
          "x2": 321,
          "y2": 1285,
          "value": "c1"
        },
        {
          "x1": 418,
          "y1": 1270,
          "x2": 437,
          "y2": 1284,
          "value": "c1"
        },
        {
          "x1": 512,
          "y1": 1269,
          "x2": 530,
          "y2": 1283,
          "value": "c1"
        },
        {
          "x1": 198,
          "y1": 472,
          "x2": 219,
          "y2": 489,
          "value": "f1"
        },
        {
          "x1": 425,
          "y1": 472,
          "x2": 446,
          "y2": 486,
          "value": "f1"
        },
        {
          "x1": 653,
          "y1": 471,
          "x2": 670,
          "y2": 488,
          "value": "f1"
        },
        {
          "x1": 304,
          "y1": 508,
          "x2": 327,
          "y2": 524,
          "value": "f2"
        },
        {
          "x1": 553,
          "y1": 507,
          "x2": 576,
          "y2": 525,
          "value": "f2"
        },
        {
          "x1": 380,
          "y1": 643,
          "x2": 406,
          "y2": 663,
          "value": "cf2"
        },
        {
          "x1": 428,
          "y1": 940,
          "x2": 457,
          "y2": 960,
          "value": "cf2"
        },
        {
          "x1": 327,
          "y1": 1254,
          "x2": 353,
          "y2": 1274,
          "value": "cf2"
        },
        {
          "x1": 250,
          "y1": 733,
          "x2": 282,
          "y2": 751,
          "value": "cf3"
        },
        {
          "x1": 545,
          "y1": 733,
          "x2": 571,
          "y2": 750,
          "value": "cf3"
        },
        {
          "x1": 270,
          "y1": 861,
          "x2": 293,
          "y2": 882,
          "value": "cf3"
        },
        {
          "x1": 538,
          "y1": 861,
          "x2": 565,
          "y2": 879,
          "value": "cf3"
        },
        {
          "x1": 435,
          "y1": 1126,
          "x2": 463,
          "y2": 1142,
          "value": "cf3"
        },
        {
          "x1": 222,
          "y1": 1318,
          "x2": 249,
          "y2": 1331,
          "value": "cf1"
        },
        {
          "x1": 578,
          "y1": 1316,
          "x2": 606,
          "y2": 1330,
          "value": "cf1"
        },
        {
          "x1": 361,
          "y1": 737,
          "x2": 381,
          "y2": 753,
          "value": "c2"
        },
        {
          "x1": 451,
          "y1": 739,
          "x2": 471,
          "y2": 752,
          "value": "c2"
        },
        {
          "x1": 337,
          "y1": 850,
          "x2": 357,
          "y2": 868,
          "value": "c2"
        },
        {
          "x1": 481,
          "y1": 876,
          "x2": 499,
          "y2": 888,
          "value": "c2"
        },
        {
          "x1": 173,
          "y1": 1315,
          "x2": 190,
          "y2": 1330,
          "value": "c3"
        },
        {
          "x1": 211,
          "y1": 1337,
          "x2": 228,
          "y2": 1348,
          "value": "c3"
        },
        {
          "x1": 303,
          "y1": 1311,
          "x2": 320,
          "y2": 1325,
          "value": "c3"
        },
        {
          "x1": 532,
          "y1": 1335,
          "x2": 548,
          "y2": 1350,
          "value": "c3"
        },
        {
          "x1": 617,
          "y1": 1333,
          "x2": 631,
          "y2": 1348,
          "value": "c3"
        },
        {
          "x1": 647,
          "y1": 1312,
          "x2": 667,
          "y2": 1326,
          "value": "c3"
        }
      ]
    }
  ]
};

const jsonArray = jsonObject.objects;
const arrayConvt = jsonArray[0]?.objects;
const MapCom = () => {
  const imgGet=localStorage.getItem('imgValue');
    const [imgSrc, setImgSrc] = useState('');
    const [coordinates, setCoordinates] = useState('');
    
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [crop, setCrop] = useState<any>();
    const [completedCrop, setCompletedCrop] = useState<any>(null);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [matchingElement, setMatchingElement] = useState<any>(null);
    const [crushValue, setCrushValue] = useState<any>("");
    const [cementValue, setCementValue] = useState<any>("");
    const [crush2Value, setCrush2Value] = useState<any>("");
    const [labourPer, setLabourPer] = useState<any>("");
  
    const [isCroppingEnabled, setIsCroppingEnabled] = useState(false);
  
  
  
  
  
    // const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   if (e.target.files && e.target.files.length > 0) {
    //     setCrop(undefined);
    //     setScale(1);
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () =>
    //       setImgSrc(reader.result?.toString() || '')
    //     );
    //     reader.readAsDataURL(e.target.files[0]);
    //   }
    // };
  
    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (completedCrop) {
        const { width, height } = e.currentTarget;
        const pixelCrop = convertToPixelCrop(completedCrop, width / scale, height / scale);
        setCrop(pixelCrop);
      }
    };
  
    const cropCoord = (coord: any) => {
        setCoordinates(coord)
  
    
    };
  
  
  
    // const showImg = () => {
    //   if (
    //     completedCrop?.width &&
    //     completedCrop?.height &&
    //     imgRef.current &&
    //     previewCanvasRef.current
    //   ) {
    //     canvasPreview(
    //       imgRef.current,
    //       previewCanvasRef.current,
    //       completedCrop,
    //       scale,
    //       rotate
    //     );
    //   }
    // };
  
    // const handleZoomIn = () => {
    //   setScale(scale + 0.1);
    // };
  
    // const handleZoomOut = () => {
  
    //   if (scale > 0.1) {
    //     setScale(scale - 0.1);
    //   }
    // };
  
  
    const handleCrush = (e: any) => {
      setCrushValue(e.target.value)
    }
    const handleCement = (e: any) => {
      setCementValue(e.target.value)
    }
  
    const handleCrush2 = (e: any) => {
      setCrush2Value(e.target.value)
    }
  
    const handleLaboutPer = (e: any) => {
      setLabourPer(e.target.value)
    }
  
    const handleCount = (e: any, id: any) => {
      console.log(matchingElement);
      const updatedMatchingElement = matchingElement.map(([value, count]:any, index:any) => {
        if (id === index) {
          return [value, parseInt(e.target.value, 10)];
        }
        return [value, count];
      });
  
      setMatchingElement(updatedMatchingElement);
    }
  
  
    const resetCrop = () => {
      setCompletedCrop(null)
      setCrop(null)
    }
  
    const toggleCropping = () => {
      setIsCroppingEnabled((prev) => !prev);
    };
  
    const findTotalCubicFeet = () => {
  
      const totalCubicFeet = matchingElement?.map(([values, quantity]) => {
        if (values === 'c1') {
          return quantity * 1.5
        } else if (values === 'c2') {
          return quantity * 1.5;
        }
        else if (values === 'c3') {
          return quantity * 1.25;
        }
        else if (values === 'c4') {
          return quantity * 1.25;
        }
        else if (values === 'f1') {
          return quantity * 60;
        }
        else if (values === 'f2') {
          return quantity * 72;
        }
        else if (values === 'cf1') {
          return quantity * 106.75;
        }
        else if (values === 'cf2') {
          return quantity * 450
        }
        else if (values === 'cf3') {
          return quantity * 500
        }
        else {
          return 0;
        }
  
      })
  
      const total = totalCubicFeet && totalCubicFeet.reduce((acc: any, value: any) => acc + value, 0);
    
      return total;
  
    }
    const totalCubicFeet = findTotalCubicFeet();
    console.log("Total Cubic Feet:", totalCubicFeet);
  
  

    const processMapping=()=>{
      setCompletedCrop(coordinates);

        const scaledWidth = Math.floor(coordinates?.width * scale);
        const scaledHeight = Math.floor(coordinates?.height * scale);
    
        const rotatedX1 = coordinates?.x * scale * Math.cos((rotate * Math.PI) / 180) - coordinates?.y * scale * Math.sin((rotate * Math.PI) / 180);
        const rotatedY1 = coordinates?.x * scale * Math.sin((rotate * Math.PI) / 180) + coordinates?.y * scale * Math.cos((rotate * Math.PI) / 180);
    
        const rotatedX2 = rotatedX1 + scaledWidth;
        const rotatedY2 = rotatedY1 + scaledHeight;
    
        const pointObj = {
          x1: Math.floor(rotatedX1),
          y1: Math.floor(rotatedY1),
          x2: Math.floor(rotatedX2),
          y2: Math.floor(rotatedY2),
        };
    
        const foundElements = arrayConvt.filter((element) => {
          return (
            pointObj.x1 <= element.x2 &&
            pointObj.x2 >= element.x1 &&
            pointObj.y1 <= element.y2 &&
            pointObj.y2 >= element.y1
          );
        });
    
        if (foundElements.length > 0) {
          const counts = {};
          foundElements?.forEach((element) => {
            const { value } = element;
            counts[value] = (counts[value] || 0) + 1;
          });
          const arrGot = Object.entries(counts);
          setMatchingElement(arrGot);
        } else {
          setMatchingElement(null);
        }
    }
  
  
    return (
        <>
         <div className='input_fldsBox'>
         <Form className='form_fields'>
      <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Control type="number" placeholder='Price of 1 bag of cement' onChange={handleCrush} value={crushValue} />
      </Form.Group>
      <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Control  type="number" placeholder='Price of one bag of crush' onChange={handleCement} value={cementValue} />
      </Form.Group>
      <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Control  type="number" placeholder='Price of one bag of course aggregator' onChange={handleCrush2} value={crush2Value} />
      </Form.Group>
      <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Control  type="number" placeholder='Rate of labour per cubic feet' onChange={handleLaboutPer} value={labourPer} />
      </Form.Group>
       
 </Form>

        </div>
<br />
<br />

            <div className="container_imgmp">
                <div className='img_conatainerMp'>
          <ReactCrop
          style={{width:"100%"}}
            crop={ crop }
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => cropCoord(c)}
          >
            <img
              alt="Crop me"
              src={imgGet}
              style={{
                maxWidth: '100%',
              }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
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
                        <button className='reset_btn'
                        onClick={resetCrop}
                        >Reset</button>
                    </div>
                </div>

            </div>


            <div className='processMapCont'>
                <DynamicBtn textBtn='PROCESS MAP' classBtn='processMap' btnFunc={processMapping} />
            </div>


            {completedCrop && crop &&
          <div
            style={{
              display: 'flex',
              marginTop: 50,
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 30,
            }}
          >
            {!!completedCrop && (
              <>
                


             
                {!!matchingElement && (
                  <div>
                    <h2
                      style={{
                        marginTop: 50,
                        marginBottom: 50,
                        textAlign: 'center',
                      }}
                    >
                      Matching Elements and Quantities
                    </h2>
                    {matchingElement?.map(
                      ([value, count]:any, id: any) => (
                        <div key={value} style={{ display: "flex", gap: 40, margin: 20 }}>
                          <span className='pointName' style={{ fontWeight: 'bold', marginTop: 10 }}>
                            {value}:
                          </span>

                          <input
                            className='count_input'

                            type="number" value={count} onChange={(e) => { handleCount(e, id) }} />



                          <span className='pointName2' style={{ fontWeight: "bold" }}>
                            Total cubic feet:

                            <input
                            style={{marginLeft:20}}
                              type="number"
                              className='count_input'
                              value={value === 'c1' ? count * 1.5 :
                                value === 'c2' ? count * 1.5 :
                                  value === 'c3' ? count * 1.25 :
                                    value === 'c4' ? count * 1.25 :
                                      value === 'f1' ? count * 60 :
                                        value === 'f2' ? count * 72 :
                                          value === 'cf1' ? count * 106.75 :
                                            value === 'cf2' ? count * 450 :
                                              value === 'cf3' ? count * 500 :
                                                0
                              }
                              disabled
                            />
                          </span>




                          <span className='pointName2' style={{ fontWeight: "bold" }}>Total concrete Price for cubic feet: D =

                            <input
                                                        style={{marginLeft:20}}

                              type="number"
                              className='count_input'

                              value={
                                (value === 'c1' ? count * 1.5 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                  value === 'c2' ? count * 1.5 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                    value === 'c3' ? count * 1.25 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                      value === 'c4' ? count * 1.25 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                        value === 'f1' ? count * 60 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                          value === 'f2' ? count * 72 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                            value === 'cf1' ? count * 106.75 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                              value === 'cf2' ? count * 450 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                                value === 'cf3' ? count * 500 * (2 * crushValue + 8 * cementValue + 16 * crush2Value / 50) :
                                                  0
                                )
                              }
                              disabled
                            />
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}



                {matchingElement &&

<div className='table_boot'>
<Table    striped  hover variant="light">
<thead >
<tr >
                       <th>
                         S.No
                       </th>
                       <th>
                         Name of Item
                       </th>
                       <th>
                         Quantity
                       </th>

                       <th>
                         Unit
                       </th>

                       <th>
                         rate
                       </th>
                       <th>
                         per
                       </th>

                       <th>
                         Amount (RS)
                       </th>



                     </tr>
</thead>
<tbody>
                     <tr>
                       <td>1</td>
                       <td>Excavation

                       </td>

                       <td>

                         {totalCubicFeet}

                       </td>
                       <td>cubic feet

                       </td>
                       <td>

                         {labourPer}

                       </td>
                       <td>Per Cubic Feet

                       </td>

                       <td>
                         {totalCubicFeet * labourPer}

                       </td>



                     </tr>

                     <tr>
                       <td>2</td>
                       <td>P.P.C. Work(M-15)

                       </td>

                       <td>1

                       </td>
                       <td>cubic feet

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>


                     <tr>
                       <td>3</td>
                       <td>Footing Concrete(M-25)

                       </td>

                       <td>

                         {totalCubicFeet}


                       </td>
                       <td>cubic feet

                       </td>
                       <td>

                       {(2 * crushValue + 8 * cementValue + 16 * crush2Value / 50)}


                       </td>
                       <td>

 Per Cubic Feet
                       </td>

                       <td>

                         {(2 * crushValue + 8 * cementValue + 16 * crush2Value / 50)* totalCubicFeet}

                       </td>



                     </tr>
                     <tr>
                       <td>4</td>
                       <td>Steel Quantity in Footing

                       </td>

                       <td>1

                       </td>
                       <td>kg

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>

                     <tr>
                       <td>5</td>
                       <td>DPC Work at plinth (M-20)

                       </td>

                       <td>1

                       </td>
                       <td>
                         not available

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>

                     <tr>
                       <td>6</td>
                       <td>Plinth beam concrete

                       </td>

                       <td>1

                       </td>
                       <td>
                       not available


                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>

                     <tr>
                       <td>7</td>
                       <td>Brickwork in superstructure

                       </td>

                       <td>1

                       </td>
                       <td>cubic feet

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>


                     <tr>
                       <td>8</td>
                       <td>Concrete in beams column (M 25)

                       </td>

                       <td>1

                       </td>
                       <td>cubic feet

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>


                     <tr>
                       <td>9</td>
                       <td>Steel in beam, column

                       </td>

                       <td>1

                       </td>
                       <td>cubic feet

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>

                     <tr>
                       <td>10</td>
                       <td>Plaster work

                       </td>

                       <td>1

                       </td>
                       <td>cubic feet

                       </td>
                       <td>1

                       </td>
                       <td>1

                       </td>

                       <td>1

                       </td>



                     </tr>

</tbody>
</Table>
</div>  
                }


             


              </>
            )}
          </div>
        }

        </>
    )
}

export default MapCom