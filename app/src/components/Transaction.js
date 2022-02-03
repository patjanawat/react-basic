import Item from "./Item"
import './Transaction.css'
import PropTypes from 'prop-types'; // ES6
import DataContext from "../data/dataContext";
import { useContext } from "react";

const Transaction = (props)=>{
   const {items} = props
   const name = useContext(DataContext)

    return (
       <div>
            <ul className="item-list">
            {
            /* <Item title={data[0].title} amount={data[0].amount}/>
            <Item title={data[1].title} amount={data[1].amount}/>
            <Item title={data[2].title} amount={data[2].amount}/> */
            items.map((element)=>{
                // return <Item title={elment.title} amount={elment.amount}/>
                return <Item {...element} key={element.id}/> //Spread Operator
            })
            }
      </ul>
      {name}
       </div>      
    )
}

export default Transaction