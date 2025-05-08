import React from 'react'

function Footer() {
  return (
    <div className="border-t border-white/20  h-20 flex justify-center items-center text-white/80">
     <p className='text-sm text-center'> © {new Date().getFullYear()} Kundan Chauhan — Built with ❤️ and React.js</p>
    </div>
  )
}

export default Footer