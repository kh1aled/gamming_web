"use client";
import './styles/landing.css'
import Image from '@node_modules/next/image'
const Landing = () => {
  return (
    <section id='landing' className='landing flex-center w-full myImage'>
        <div className="description container">
            <h3 className='h3'>WORLD GAMING</h3>
            <h1 className='h1'>Create <span>Mange</span> <br /> Matches</h1>
            <p>find technology or people for digital projects in public sector and find <br /> an individual specialist develope researcher.</p>
            <button>READ MORE</button>
        </div>
        <div className="image_container">
            <Image
            src="/images/hero-banner.png"
            width={700}
            height={700}
            alt='this is hero banner image'
            />
        </div>
    </section>
  )
}

export default Landing