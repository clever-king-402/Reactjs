import React from 'react'

const Navigation = () => {
  return (
    <section className='navigation'>
        <div className="container grid grid-cols-3 mx-auto">
            <div className="logo row-span-2">HOSTELIER</div>
            <div className="email-phone flex">
                <div className="email"><i class="fa-solid fa-envelope"></i> mail@domain.com</div>
                <div className="phone">+012 345 6789</div>
            </div>
            <div className="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <nav className='nav-items'>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">ROOMS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
            <div className="btn">PREMIUM VERSION</div>
        </div>
    </section>
  )
}

export default Navigation