import { useContext } from "react"
import DataContext from "../data/dataContext"

const ReportComponent =()=>{
    const {income,expense} = useContext(DataContext)
    return(
        <div>
            รายรับ: {income}, รายจ่าย: {expense}
        </div>
    )
}

export default ReportComponent