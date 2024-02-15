import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav className='bg-slate-200 p-4'>
                <ul className='flex gap-3'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
