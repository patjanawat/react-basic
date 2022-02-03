import Transaction from "./components/Transaction";
import "./App.css"
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataContext from "./data/dataContext";
import ReportComponent from "./components/ReportComponent";

const App = () => {
//     const Initialdata = [
//     {id:uuidv4(),title:"ค่ารักษา",amount:2000},
//     {id:uuidv4(),title:"เงินเดือน",amount:50000},
//     // {id:uuidv4(),title:"ค่าเดินทาง",amount:5000},
//     // {id:uuidv4(),title:"ค่าพยาบาล",amount:1000},
//     // {title:800,amount:"ค่าขนส่ง"}, //Check proptype
//     // {title:"ค่าขนส่ง"}, //Check proptype
//     {id: uuidv4(),title:"ค่าขนส่ง",amount:800}
   
// ]

const [items,setItems]=useState([])

const onAddNewItem = (newItem)=>{
  setItems((prev)=>{
    return [newItem,...prev]
  })
}
  return (    
    <DataContext.Provider value={'KingKong'}>
      <div className="container">
        <h1 style={{color:'red',textAlign:"center",fontSize:'1.5em'}}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items={items}/>
      </div>
    </DataContext.Provider>    
  );
};

export default App;
 