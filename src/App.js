import SimpleForm from "./components/SimpleForm";

// const expenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { 
//     id: "e2", 
//     title: "New TV", 
//     amount: 799.49, date: 
//     new Date(2021, 2, 12) 
//   },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

// const Details = [
//   {
//     name:'Anusha',
//     age:20,
//     Class:'BE'
//   },
//   {
//     name:'Tejash',
//     age:24,
//     Class:'B.com'
//   },

// ];

function App() {
  return (
    <div className="App">
      {/* <ExpenseItem title = {expenses[0].title} amount ={expenses[0].amount} date = {expenses[0].date}/>*/}
      {/* <ExpenseItem title = {expenses[1].title} amount ={expenses[1].amount} date = {expenses[1].date}/> 
      <StudentDetails name = {Details[0].name} age = {Details[0].age} Class = {Details[0].Class}></StudentDetails>
  <StudentDetails name = {Details[1].name} age = {Details[1].age} Class = {Details[1].Class}></StudentDetails>*/}

  <SimpleForm></SimpleForm>

    </div>
  ); 
}

export default App;
