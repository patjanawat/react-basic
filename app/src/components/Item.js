import PropTypes from 'prop-types'
import { useContext } from 'react'
import DataContext from '../data/dataContext'
import './Item.css'

const Item =(props) => {
   const {title,amount} = props
   const statusClass = amount < 0?"expense":"income"
   const symbol = amount < 0 ? "-":"+"

   const name = useContext(DataContext)
    return (
        <div>
        <li className={statusClass}>{title} <span>{symbol} {Math.abs(amount)}</span>
            <p>{name}</p>
        </li>
        </div>
    )
}

Item.propTypes={
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item