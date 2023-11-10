import { Table } from "react-bootstrap"
import { useLocation } from "react-router-dom";

const MapBqq=()=>{

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  
    // Access query parameters
    const totalCubicFeet:any = searchParams.get('totalCubicFeet');
    const labourPer:any = searchParams.get('labourPer');
    const cubicFeet:any = searchParams.get('cubic-Feet');

    return(
        <>
     
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

                    {cubicFeet}

                       </td>
                       <td>

 Per Cubic Feet
                       </td>

                       <td>

                         {cubicFeet* totalCubicFeet}

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
        </>
    )
}

export default MapBqq