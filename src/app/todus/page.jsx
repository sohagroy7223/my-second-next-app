import React from "react";

const TodosPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();
  //   console.log(todos);
  return (
    <div>
      <h3>all data is here: {todos.length}</h3>
    </div>
  );
};

export default TodosPage;
