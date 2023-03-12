import React from 'react'

const Navigation = () => {
  return (
    <section className='navigation'>
        <div className="container flex justify-between mx-auto p-10">
            <div className="logo text-4xl font-bold">
                Portfolio.
            </div>
            <nav>
                <ul className='flex gap-x-10 text-xl font-bold'>
                    <li >
                        <a href="#" className='active'>Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Navigation