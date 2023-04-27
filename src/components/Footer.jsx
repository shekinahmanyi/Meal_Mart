import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 text-primary-content text-center'>
         <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>   
    </footer>
  )
}

export default Footer
