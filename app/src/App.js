import Transaction from "./components/Transaction";
import "./App.css"
import FormComponent from "./components/FormComponent";

const App = () => {
  return (
    <div className="container">
      <h1 style={{color:'red',textAlign:"center",fontSize:'1.5em'}}>แอพบัญชีรายรับ-รายจ่าย</h1>
      <FormComponent/>
      <Transaction/>
    </div>
  );
};

export default App;
 