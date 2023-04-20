import React from 'react';
import './App.css';

function App() {
  return (
    <div className="">
      <header className='h-20 flex' >
        <h1 className=' font-bold text-5xl'>Zheng Blog</h1>
        <div className='flex space-x-3'>
          <div>
            Blog
          </div>
          <div>
            Web
          </div>
          <div>
            Mobile Apps
          </div>
          <div>
            Wonderful World
          </div>
        </div>
      </header>
      <iframe title='blog_contianer' src="blog/public/index.html" className='w-full h-[1500px] border-0 overflow-hidden'></iframe>
    </div>
  );
}
export default App;
