import Transaction from "./components/Transaction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { useEffect, useState } from "react";
import DataContext from "./data/dataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

const App = () => {
  const Initialdata = [
    { id: 1, title: "ค่ารักษา", amount: 2000 },
    { id: 2, title: "เงินเดือน", amount: 50000 },
    { id: 3, title: "ค่าขนส่ง", amount: 800 },
  ];

  const initState = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -2000 },
    { id: 2, title: "เงินเดือน", amount: 12000 },
    { id: 3, title: "ค่าเดินทาง", amount: -500 },
    { id: 4, title: "ขายของ", amount: +2000 },
  ];

  const [items, setItems] = useState(Initialdata);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prev) => {
      return [newItem, ...prev];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((e) => e > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      -1 *
      amounts
        .filter((e) => e < 0)
        .reduce((total, element) => (total += element), 0);

    setReportIncome((income).toFixed(2))
    setReportExpense((expense).toFixed(2))
  }, [items, reportIncome, reportExpense])

  Number.prototype.format = function(){
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
 }

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5em" }}>
          แอพบัญชีรายรับ-รายจ่าย
        </h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>              
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">ข้อมูลรายจ่าย</Link>              
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <ReportComponent /> 
              </Route>
              <Route path="/insert">
                <FormComponent onAddItem={onAddNewItem} />
                <Transaction items={items} />
              </Route>
            </Switch>
            {/* <Route Link="/" component={ReportComponent}/> */}
          </div>
        </Router>        
        
      </div>
    </DataContext.Provider>
  );
};

export default App;
