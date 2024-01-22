import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between w-full bg-blue-500 p-10'>
        <h1 className='text-3xl '>Sardauna clinic</h1>

        <ul className='flex gap-3 hover:'>
            <li> <Link to ='/'> Home</Link> </li>
            <li> <Link to ='/About'> Doctors</Link> </li>
            <li> <Link to ='/Contact'> Contact</Link> </li>
            
        </ul>
    </div>
  )
}

export default Header