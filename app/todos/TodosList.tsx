import React from 'react';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typcode.com/todos');
  const todos = await res.json();
};

const TodosList = async () => {
  const todos = await fetchTodos();
  return <div>TodosList</div>;
};

export default TodosList;
