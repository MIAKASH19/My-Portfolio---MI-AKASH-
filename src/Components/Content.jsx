import React from 'react'

export default function Content() {
  return (
    <div className='bg-black dark:bg-white py-8 px-10 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between w-full items-end text-white bg-red-00'>
            <h1 className='text-[13vw] tracking-tighter font-bold font-plus uppercase leading-none mt-0 dark:text-black text-white'>get in touch</h1>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex items-center gap-20 text-white'>
            <div className='flex flex-col gap-2 dark:text-black text-white'>
                <h3 className='mb-2 uppercase text-white'>About</h3>
                <p>Home</p>
                <p>Projects</p> 
                <p>Our Mission</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2 dark:text-black text-white'>
                <h3 className='mb-2 uppercase '>Education</h3>
                <p>News</p>
                <p>Learn</p>
                <p>Certification</p>
                <p>Publications</p>
            </div>
        </div>
    )
}
