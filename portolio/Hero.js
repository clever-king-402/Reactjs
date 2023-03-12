import React from 'react'

const Hero = () => {


  return (
    <section className='hero'>
        <div className="container flex mx-auto p-10 py-14 gap-x-15">
            <div className="about  basis-1/2  my-auto">
                <h1 className='title text-4xl font-bold'>Hello It's Me</h1>
                <h1 className='name text-7xl font-bold'>Ranjit Thakur</h1>
                <h1 className='work text-4xl font-bold flex'>And I'm a <div className='span text-sky-500'> Frontend Developer.</div></h1>
                <p className='text-xl my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel, exercitationem repellat nemo error earum?</p>
                <div className="icons flex gap-6 py-8">
                <i class="fa-brands fa-facebook-f rounded-full p-2"></i>
                <i class="fa-brands fa-twitter rounded-full p-2"></i>
                <i class="fa-brands fa-instagram rounded-full p-2"></i>
                <i class="fa-brands fa-linkedin rounded-full p-2"></i>
                </div>
                <button className=' rounded-full px-4 py-3 font-bold'>Download CV</button>
            </div>
            <div className="about-image  basis-1/2 justify-center flex">
                <img src="https://dummyimage.com/600x600/000/fff.jpg" alt=""  />
            </div>
        </div>
    </section>
  )
}

export default Hero