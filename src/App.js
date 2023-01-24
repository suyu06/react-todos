//import logo from './logo.svg';
import "./App.css";
//import TodoRowItem from "./components/TodoRowItem"
import TodoTable from "./components/TodoTable";

function App() {
  const todos=[
    {rowNumber:1, rowDescription:'Feed puppy',rowAssigned:'User one'},
    {rowNumber:2, rowDescription: 'Water plants',rowAssigned:'User Two'},
    {rowNumber:3, rowDescription: 'Make dinner',rowAssigned:'User one'},
]
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
         <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
