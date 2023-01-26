import TodoRowItem from "./TodoRowItem"

function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {/* .map to map the each element of "todos" list to the new "todo", then render it as the data of TodoRowItem*/}
           {props.todos.map(todo =>(
            <TodoRowItem
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            />
           ))}
             
      </tbody>
    </table>
  )
}
export default TodoTable