//import logo from './logo.svg';
import "./App.css";
//import TodoRowItem from "./components/TodoRowItem"
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
    {rowNumber:1, rowDescription:'Feed puppy',rowAssigned:'User one'},
    {rowNumber:2, rowDescription: 'Water plants',rowAssigned:'User Two'},
    {rowNumber:3, rowDescription: 'Make dinner',rowAssigned:'User one'},
    {rowNumber:4, rowDescription: 'charge phone battery',rowAssigned:'User one'},
]

  const addTOdo = () => {
    if(todos.length > 0){
      const newTodo = {
        rowNumber:todos.length+1,
        rowDescription:'New Todo',
        rowAssigned:'User Three'
      }
      todos.push(newTodo);
      console.log(todos);
    }
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
         <TodoTable todos={todos}/>
         <button className='btn btn-primary' onClick={addTOdo}>
          Add new button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
