import React, { Suspense } from 'react';
import TodosList from './(users)/todos/TodosList';

const Home = () => {
  return (
    <div className='flex flex-col space-y-10'>
      <Suspense fallback={<p>Loading the todos...</p>}>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the shopping cart...</p>}>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
