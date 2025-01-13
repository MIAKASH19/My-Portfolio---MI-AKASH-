import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <footer 
        className='relative h-screen'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+100vh)] -top-[100vh]'>
            <div className='h-screen sticky top-[calc(100vh-100vh)]'>
                <Content />
            </div>
        </div>
    </footer>
  )
}