import Item from "./Item"
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; // ES6

const Transaction = ()=>{
    const data = [
        {title:"ค่ารักษา",amount:2000},
        {title:"เงินเดือน",amount:50000},
        {title:"ค่าเดินทาง",amount:5000},
        {title:"ค่าพยาบาล",amount:1000},
        // {title:800,amount:"ค่าขนส่ง"}, //Check proptype
        // {title:"ค่าขนส่ง"}, //Check proptype
        {title:"ค่าขนส่ง",amount:800}
       
    ]
    return (
        <ul className="item-list">
            {
            /* <Item title={data[0].title} amount={data[0].amount}/>
            <Item title={data[1].title} amount={data[1].amount}/>
            <Item title={data[2].title} amount={data[2].amount}/> */
            data.map((element)=>{
                // return <Item title={elment.title} amount={elment.amount}/>
                return <Item {...element} key={element.id} key={uuidv4()}/> //Spread Operator
            })
            }
      </ul>
    )
}

export default Transaction