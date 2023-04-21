import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="h-12 flex  items-center bg-slate-800 text-neutral-200">
            <div className="text-md font-bold md:text-3xl mx-4 md:mx-10 font-mono">
                <Link to="/">Zheng</Link>
            </div>
            <div className="flex space-x-2 md:space-x-7 font-sans px-5   items-center">
                <div className='bg-slate-800  active:bg-gray-400 hover:bg-slate-500'>
                    <Link to="/blog">Blog</Link>
                </div>
                {/* <div className='bg-slate-800  active:bg-gray-400 hover:bg-slate-500'>
                    <Link to="/web">Web</Link>
                </div> */}
                <div className='bg-slate-800  active:bg-gray-400 hover:bg-slate-500'>
                    <Link to="/mobile">Mobile Apps</Link>
                </div>
            </div>
        </div>
    )
}
