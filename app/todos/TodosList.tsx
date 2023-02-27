import React from 'react';
import { Todo } from '../../typings';
import Link from 'next/link';

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();
  const trimmedTodos = todos.splice(0, 10);
  return trimmedTodos;
};

const TodosList = async () => {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map(todo => (
        <p key={todo.id}>
          <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
