import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className=" h-10 flex  items-center bg-slate-800 text-neutral-200">
            <div className="text-md font-bold md:text-3xl mx-4 md:mx-10">
                <Link to="/">Zheng`s Blog</Link>
            </div>
            <div className="flex space-x-2 md:space-x-7 font-sans mx-5">
                <Link to="/blog">Blog</Link>
                <Link to="/web">Web</Link>
                <Link to="/mobile">Mobile Apps</Link>
            </div>
        </div>
    )
}
